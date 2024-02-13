const db = require('./../connection');

//Get functions
/**
* @param {{user_id: integer}} userId
//join cart items and meal items
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

//get order by order id
//can display name of customer
//add ORDER BY;

const getOrders = () => {

  return db.query(`
  SELECT *
  FROM orders
  JOIN users ON user_id = users.id

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

  let dbOrder = null;

  return db.query(`
  INSERT INTO orders (user_id, total_cost, placed_at, accepted_at, completed_at)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;
  `,[order.user_id, order.total_cost, order.placed_at, order.accepted_at, order.completed_at])
  .then((result) => {
    dbOrder = result.rows[0];
    const orderId = result.rows[0].id;
    const promises = [];
    for (const cartItem of order.cartItems) {

    const promise = db.query(`
    INSERT INTO cart_items (order_id, menu_item_id, quantity)
    VALUES ($1, $2, $3)
    RETURNING *;
  `,[orderId, cartItem.menu_item_id, cartItem.quantity])

    promises.push(promise);
    }
    return Promise.all(promises);



  })
  .then((result) => {
    console.log(result);
    return dbOrder;
    //order consfrimation page - or order is confirmed!
  });


};

module.exports = { getOrders, getOrderWithUserId, addOrder };
