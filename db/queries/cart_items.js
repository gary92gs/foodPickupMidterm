const db = require('./../connection');


//GET functions

/**
* @param {{user_id: integer}} userId
*/

const getCartItems = (userId) => {

  return db.query(`
  SELECT *
  FROM cart_items
  JOIN orders ON order_id = orders.id
  WHERE orders.user_id = $1;
  `, [userId])
  .then((result) => {
    return result.rows;
  });

};



module.exports = { getCartItems };
