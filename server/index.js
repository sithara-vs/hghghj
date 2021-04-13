// require("dotenv").config();
// const express = require('express');
// const massive = require('massive');
// const session = require('express-session');
// const cors = require('cors')
// const authCtrl = require('./controllers/authController');
// // const classesCtrl = require('./controllers/classesCtrl');
// // const instructorsCtrl = require('./controllers/instructorsController');
// // const bookingsCtrl = require('./controllers/bookingsController');
// const {SERVER_PORT , CONNECTION_STRING,SESSION_SECRET}= process.env

// const app = express();
// app.use(cors('*'))
// app.use(express.json())

// app.use(
//     session({
//         resave:false,
//         saveUninitialized:true,
//         rejectUnauthorized:false,
//         cookie: {maxAge:1000 *60 * 60 * 24 *365},
//         secret: SESSION_SECRET
//     })
// );

// massive({
//     connectionString: CONNECTION_STRING,
//     ssl: {
//         rejectUnauthorized: false
//     }
// }).then(dbInstance => {
//     console.log("Database connected");
//     app.set('db', dbInstance);
//     app.listen(SERVER_PORT, () => console.log(`Server is listening on  ${SERVER_PORT}`));
// })

// //Users Endpoints
// app.post('/api/register', authCtrl.register);
//  app.post('/api/login', userCtrl.login);
// // app.delete('/api/logout',userCtrl.logout);
// // app.delete('/api/delete', userCtrl.delete);
// // app.put('/api/users',userCtrl.update)

// //Class Endpoints
// //app.get('/api/classes',classesCtrl.displayClasses);
// //app.get('/api/classes?day_of_the_week={day_of_the_week,classesCtrl.searchClasses}') ;

// //Instructors Endpoints
// //app.get('/api/instructors,instructorsCtrl.displayInstructors');

// //Bookings Endpoints
// //app.get('/api/bookings,bookingsCtrl.userBookings');
// //app.post('/api/bookings,bookingsCtrl.bookingPage');
// //app.delete('/api/bookings/:booking_id,bookingsCtrl.cancel');

  
require("dotenv").config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const cors = require('cors');
const authCtrl = require('./controllers/authController');
//const productsCtrl = require('./controllers/productsController');
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
