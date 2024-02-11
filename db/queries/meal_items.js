const db = require('../connection');

const getMeals = () => {
  return db.query('SELECT * FROM meal_items;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMeals };
