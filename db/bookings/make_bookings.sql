
INSERT INTO bookings(
    user_id,
    class_id,
    no_of_participants,
    total_price
)
VALUES ($1,$2,$3,$4)
returning *;