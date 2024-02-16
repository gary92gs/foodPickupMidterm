const db = require('./../connection');

//Get functions
/**
* @param {{user_id: integer}} userId
//join cart items and meal items
*/
const getOrderWithUserId = (userId) => {

  return db.query(`
  SELECT *
  FROM orders
  JOIN cart_items ON order_id = orders.id
  JOIN menu_items ON menu_item_id = menu_items.id
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
  SELECT DISTINCT orders.id, orders.user_id, orders.total_cost, orders.placed_at, orders.accepted_at, orders.completed_at, orders.is_active, users.username
  FROM orders
  JOIN users ON user_id = users.id
  JOIN cart_items ON order_id = orders.id
  JOIN menu_items ON menu_item_id = menu_items.id
  ORDER BY orders.id DESC;

  `)
    .then((result) => {
      return result.rows;
    });

};


//Post functions


/**
* Delete a single order with order id
* @param {{order_id: integer}} orderId
*/

const deleteOrder = (orderId) => {

  return db.query(`
  DELETE FROM orders
  WHERE id = $1
  RETURNING *;
  `, [orderId])
    .then((result) => {
      return result.rows;
    });

};


/**
* Add a new order to the database.
* @param {{user_id: integer, total_cost: integer, placed_at: timestamp, accepted_at: timestamp, completed_at: timestamp, cart -items}} order
*/

const addOrder = (order) => {

  let dbOrder = null;

  return db.query(`
  INSERT INTO orders (user_id, total_cost, placed_at)
  VALUES ($1, $2, $3)
  RETURNING *;
  `,[order.user_id, order.total_cost, order.placed_at])
    .then((orderResult) => {
      dbOrder = orderResult.rows[0];
      const orderId = dbOrder.id;

      // Cart loop
      const cartItemPromises = order.cart_items.map(cartItem => {
        return db.query(`
          INSERT INTO cart_items (order_id, menu_item_id, quantity)
          VALUES ($1, $2, $3);
        `, [orderId, cartItem.meal_id, cartItem.quantity]);
      });

      return Promise.all(cartItemPromises);

    })
    .then(() => {
      console.log('Order and cart items inserted successfully:', dbOrder);
      return dbOrder;
    })
    .catch((error) => {
      console.error('Error inserting order and cart items:', error);
      throw error; // Propagate the error to the caller
    });
};


const updateOrderIsActive = (orderId) => {
  return db.query(`
    UPDATE orders
    SET is_active = TRUE
    WHERE id = $1;
  `, [orderId])
    .then(() => {
      return "Order is_active field updated successfully";
    })
    .catch((error) => {
      return error;
    });
};

const getOrderById = (orderId) => {
  return db.query(`
    SELECT orders.is_active
    FROM orders
    WHERE id = $1;
  `, [orderId])
    .then((orderResult) => {
      const dbOrder = orderResult.rows[0];
      return dbOrder;
    })
    .catch((error) => {
      return error;
    });
};
module.exports = { getOrders, getOrderWithUserId, deleteOrder, addOrder, updateOrderIsActive, getOrderById };
