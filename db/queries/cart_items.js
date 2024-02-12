const db = require('./../connection');

//GET functions

/**
* Browse all cart items for a user
* @param {{orderId: integer}} orderId
*/

const getCartItems = (orderId) => {

  return db.query(`
  SELECT *
  FROM cart_items
  JOIN orders ON order_id = orders.id
  WHERE order_id = $1;
  `, [orderId])
  .then((result) => {
    return result.rows;
  });

};

/**
* Read a single cart item with cart item id
* @param {{cart_item_id: integer}} cartItemId
*/

const getCartItem = (cartItemId) => {

  return db.query(`
  SELECT *
  FROM cart_items
  JOIN orders ON order_id = orders.id
  WHERE orders.user_id = $1;
  `, [cartItemId])
  .then((result) => {
    return result.rows;
  });

};



module.exports = { getCartItems, getCartItem };
