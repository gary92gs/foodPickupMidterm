const express = require('express');
const router = express.Router();
const cartItemsQueries = require('../db/queries/cart_items');


router.get('/', (req, res) => {

  //extract user id through cookie

  //get that user's order information
  cartItemsQueries.getCartItems(userId)
    .then(cartItems => {
      res.json({ cartItems })
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    })
});

module.exports = router;
