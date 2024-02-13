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
  WHERE cart_items.id = $1;
  `, [cartItemId])
  .then((result) => {
    return result.rows;
  });

};

/**
* Edit the quantity of a single cart item with cart item id
* @param {{cart_item_id: integer}} cartItemId
* @param {newQuantity: integer} newQuantity
*/

const editCartItemQuant = (cartItemId, newQuantity) => {

  return db.query(`
  UPDATE cart_items
  SET quantity = $1
  WHERE id = $2
  RETURNING *;
  `, [newQuantity, cartItemId])
  .then((result) => {
    return result.rows;
  });

};

/**
* Delete a single cart item with cart item id
* @param {{cart_item_id: integer}} cartItemId
*/

const deleteCartItem = (cartItemId) => {

  return db.query(`
  DELETE FROM cart_items
  WHERE id = $1;
  `, [cartItemId])
  .then((result) => {
    return result.rows;
  });

};

//Post functions
/**
* Add a new cart item.
* @param {{order_id: integer, menu_item_id: integer, quantity: integer, is_active: boolean}} cartItem
*/

const addCartItem = (cartItem) => {

  return db.query(`
  INSERT INTO cart_items (order_id, menu_item_id, quantity)
  VALUES ($1, $2, $3)
  RETURNING *;
  `,[cartItem.order_id, cartItem.menu_item_id, cartItem.quantity])
  .then((result) => {
    return result.rows;
  });

};



module.exports = { getCartItems, getCartItem, editCartItemQuant, deleteCartItem, addCartItem };
