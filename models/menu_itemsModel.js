const db = require('./../db/connection');

const getMeals = () => {
  return db.query('SELECT * FROM menu_items;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMeals };
