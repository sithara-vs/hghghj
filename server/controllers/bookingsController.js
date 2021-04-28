const { response } = require("express");

module.exports = {
  getBookings: async (req, res) => {
    const db = req.app.get("db");
    if (req.session.user) {
      const { user_id } = req.session.user;
      try {
        const bookings = await db.bookings.get_user_bookings({ user_id });
        res.status(200).send(bookings);
      } catch (err) {
        console.log(err);
      }
    } else {
      return res.status(403).send("User not logged in");
    }
  },
//get the class data with the class id from body.
// figure out the price based on the the num of participants and rate.
//make the bookings insertion with the data from body and the missing data from the class data that was retrieved.
//return the required row joined with the class table
//put paid as false


  makeBookings: async (req, res) => {
    const db = req.app.get("db");
    if (req.session.user) {
      const { user_id } = req.session.user;
      const {
        class_id,
        no_of_participants,
        // total_price,
        // day_of_the_week,
      } = req.body;
      try {
        const bookings = await db.bookings.make_bookings(
          user_id,
          class_id,
          no_of_participants,
          total_price
          // day_of_the_week
        );
        res.status(200).send(bookings);
      } catch (err) {
        console.log(err);
      }
    } else {
      return res.status(403).send("User not logged in");
    }
  },
  cancel: (req, res) => {
    const { booking_id } = req.params;
    req.app
      .get("db")
      .bookings.delete_bookings({ booking_id })
      .then((_) => res.sendStatus(200));
  },
};
