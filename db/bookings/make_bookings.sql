
INSERT INTO bookings(class_id,no_of_participants,total_price )
VALUES ($1,$2,$3)
returning *;