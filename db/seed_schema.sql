DROP TABLE IF EXISTS bookings ;
DROP TABLE IF EXISTS classes ;
DROP TABLE IF EXISTS users ;
DROP TABLE IF EXISTS instructors ;


  CREATE TABLE classes (
    class_id  SERIAL PRIMARY KEY NOT NULL,
    day_of_the_week VARCHAR(25),
    description    VARCHAR(100),
    participants integer,
    price decimal
  ); 


   


  CREATE TABLE users (
    user_id    SERIAL PRIMARY KEY NOT NULL,
    email      VARCHAR(100),
    hash   VARCHAR(1000)
  ); 




      CREATE TABLE instructors (
      instructor_id SERIAL PRIMARY KEY NOT NULL,
      image  TEXT,
      about VARCHAR (500)
  );



 CREATE TABLE bookings (
      booking_id SERIAL PRIMARY KEY NOT NULL,
      class_id INTEGER REFERENCES classes(class_id),
      no_of_participants INTEGER ,
      total_price DECIMAL,
      user_id INTEGER REFERENCES users(user_id)
      
     

  );

