const db = require('./../connection');

const getOrders = () => {

  return db.query(`
  SELECT * FROM orders
  JOIN users ON user_id = users.id;
  `)
  .then(data => {
    return data.rows;
  });

};

module.exports = { getOrders };
