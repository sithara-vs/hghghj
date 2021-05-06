SELECT * FROM bookings 
JOIN classes ON classes.class_id = bookings.class_id
JOIN users on users.user_id = bookings.user_id
WHERE bookings.user_id = ${user_id} AND paid = true