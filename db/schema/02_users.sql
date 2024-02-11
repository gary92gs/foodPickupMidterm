-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(50) NOT NULL,
  phone_number VARCHAR(11) NOT NULL,
  email VARCHAR(50) NOT NULL,
  super_user BOOLEAN NOT NULL DEFAULT FALSE
);
