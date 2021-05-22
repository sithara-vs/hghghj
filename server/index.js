require("dotenv").config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const cors = require('cors');
const authCtrl = require('./controllers/authController');
const classesCtrl = require('./controllers/classesController');
const bookingsCtrl = require('./controllers/bookingsController');
const instructorsCtrl = require('./controllers/instructorsController');

const {v4:uuidv4} = require("uuid");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET,STRIPE_KEY } = process.env;
const stripe = require("stripe")(STRIPE_KEY);
const app = express();


app.use(cors('*'));
app.use(express.json());

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        rejectUnauthorized: false,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
        secret: SESSION_SECRET
    })
);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( dbInstance => {
    console.log("Database connected");
    app.set('db', dbInstance);

    app.listen( SERVER_PORT, () => console.log(`Server is listening on ${SERVER_PORT}`));
});


// Auth Endpoints
app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login);
app.delete('/api/logout', authCtrl.logout);
app.post('/api/delete', authCtrl.delete);
// app.put('/api/reset_password',authCtrl.reset_password)

// //Class Endpoints
app.get('/api/classes',classesCtrl.getAllClasses);
app.get('/api/classes/:day_of_the_week',classesCtrl.getSpecificClass) ;


// //Instructors Endpoints
app.get('/api/instructors',instructorsCtrl.getAllInstructors);

// //Bookings Endpoints
app.get('/api/bookings',bookingsCtrl.getBookings);
app.post('/api/booking',bookingsCtrl.makeBookings);
app.delete('/api/bookings/:booking_id',bookingsCtrl.cancel);

//User settings Endpoint
app.put('/api/reset_password',authCtrl.reset_password)
app.put('/api/reset_email',authCtrl.reset_email)
  








// app.get("/", (req, res) => {
//   res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
// });

app.post("/api/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { classData, token } = req.body;
    console.log(classData)

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });
console.log(customer)
    const idempotency_key = uuidv4();
    const cards = await stripe.customers.listSources(
      customer.id,
      {object: 'card', limit: 3}
    );
    console.log(cards)
    console.log("CLASSDATA",classData)
    console.log("TOKEN:",token)  
    const charge = await stripe.charges.create(
      {
        amount: classData.price * 100,

        currency: "usd",
        customer: customer.id,//classData.class_id,
        // source:"tok_visa",
        receipt_email: token.email,
        description: `Purchased the ${classData.description}`,
        shipping: {
          name: "saji",//token.card.name,
          address: {
            line1: "south",//token.card.address_line1,
            line2: "north",//token.card.address_line2,
            city: "east",//token.card.address_city,
            country: "west",//token.card.address_country,
            postal_code: "24333",//token.card.address_zip
            
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});
// console.log(
//     "nodejs running url"+ window.location.href)

