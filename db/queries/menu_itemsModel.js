const db = require('../connection');

const getMeals = () => {
  const query = `
    SELECT menu_items.name AS name, menu_items.id AS meal_id, food_categories.name AS type,
      description, price, SIZE, image_url
    FROM menu_items
    JOIN food_categories ON food_categories.id = categorie_id;
  `
  return db.query(query)
    .then((data) => {
      return data.rows
    })
};

module.exports = { getMeals };
