const db = require('./../db/connection');

const getMeals = () => {
  const query = `
    SELECT menu_items.name AS name, food_categories.name AS type,
      description, price, SIZE
    FROM menu_items
    JOIN food_categories ON food_categories.id = categorie_id;
  `
  return db.query(query);
};

module.exports = { getMeals };
