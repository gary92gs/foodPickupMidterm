const express = require('express');
const router = express.Router();
const cartItemsQueries = require('../db/queries/cart_items');


router.get('/', (req, res) => {

  //extract order id through cookie

  //get that order's cart information
  cartItemsQueries.getCartItems(orderId)
    .then(cartItems => {
      res.json({ cartItems })
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    })
});

router.get('/:id', (req, res) => {

  //get the cart item id
  const cartItemId = req.params

  //get that cart item's information
  cartItemsQueries.getCartItems(cartItemId)
    .then(cartItem => {
      res.json({ cartItem })
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    })
});


module.exports = router;
