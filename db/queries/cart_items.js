const db = require('./../connection');


//GET functions
const getCartItems = () => {

  return db.query(`
  SELECT *
  FROM cart_items
  JOIN orders ON order_id = orders.id;
  `)
  .then((result) => {
    return result.rows;
  });

};




module.exports = { getCartItems };
