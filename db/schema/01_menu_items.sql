DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS food_categories CASCADE;

CREATE TABLE food_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  categorie_id INTEGER REFERENCES food_categories(id) ON DELETE CASCADE,
  name VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  price DECIMAL(10,2),
  SIZE VARCHAR(10),
  avg_prep_time_mins SMALLINT
);
