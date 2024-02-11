const db = require('./../connection');

const getOrderWithUserId = (userId) => {

  return db.query(`
  SELECT orders.id AS order_id, orders.user_id AS user, orders.total_cost AS order_total
  FROM orders
  JOIN users ON user_id = users.id
  WHERE orders.user_id = $1;
  `, userId)
  .then(data => {
    return data.rows;
  });

};


const getOrders = () => {

  return db.query(`
  SELECT *
  FROM orders
  JOIN users ON user_id = users.id;
  `)
  .then(data => {
    return data.rows;
  });

};


module.exports = { getOrders, getOrderWithUserId };
