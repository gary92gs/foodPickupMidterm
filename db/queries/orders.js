const db = require('./../connection');

//Get functions
/**
* @param {{user_id: integer}} userId
*/
const getOrderWithUserId = (userId) => {

  return db.query(`
  SELECT orders.id AS order_id, orders.user_id AS user, orders.total_cost AS order_total
  FROM orders
  JOIN users ON user_id = users.id
  WHERE orders.user_id = $1;
  `, [userId])
  .then((result) => {
    return result.rows;
  });

};

const getOrders = () => {

  return db.query(`
  SELECT *
  FROM orders
  JOIN users ON user_id = users.id;
  `)
  .then((result) => {
    return result.rows;
  });

};


//Post functions
/**
* Add a new order to the database.
* @param {{user_id: integer, total_cost: integer, placed_at: timestamp, accepted_at: timestamp, completed_at: timestamp}} order
*/

const addOrder = (order) => {

  return db.query(`
  INSERT INTO orders (user_id, total_cost, placed_at, accepted_at, completed_at)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;
  `,[order.user_id, order.total_cost, order.placed_at, order.accepted_at, order.completed_at])
  .then((result) => {
    return result.rows;
  });

};

module.exports = { getOrders, getOrderWithUserId, addOrder };
