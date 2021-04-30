require("dotenv").config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const cors = require('cors');
const authCtrl = require('./controllers/authController');
const classesCtrl = require('./controllers/classesController');
const bookingsCtrl = require('./controllers/bookingsController');
const instructorsCtrl = require('./controllers/instructorsController');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

/* CORS stands for Cross Origin Resource Sharing. 
*  Basically one domain like "facebook" vs 
*  another origin like "google" talking to each other.
*  Don't use '*' on a production environment
*/
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
app.get('/api/search_day',classesCtrl.getSpecificClass) ;


// //Instructors Endpoints
app.get('/api/instructors',instructorsCtrl.getAllInstructors);

// //Bookings Endpoints
app.get('/api/bookings',bookingsCtrl.getBookings);
app.post('/api/booking',bookingsCtrl.makeBookings);
app.delete('/api/bookings/:booking_id',bookingsCtrl.cancel);

//User settings Endpoint
app.put('/api/reset_password',authCtrl.reset_password)
app.put('/api/reset_email',authCtrl.reset_email)
  