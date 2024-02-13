const express = require('express');
const router = express.Router();
const cartItemsQueries = require('../db/queries/cart_items');

//Browse route
router.get('/', (req, res) => {

  //extract order id through cookie
  const orderId = 2;
  //get that order's cart information
  cartItemsQueries.getCartItems(orderId)
    .then(cartItems => {
      res.json({ cartItems })
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    })
});

//Read route
router.get('/:id', (req, res) => {

  //get the cart item id
  const cartItemId = req.params.id
  console.log(req.params.id);
  //get that cart item's information
  cartItemsQueries.getCartItems(cartItemId)
    .then(cartItem => {
      res.json({ cartItem })
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    })
});

//Add route

//Edit route
router.post('/:id', (req, res) => {

//get the cart item id
const cartItemId = req.params.id
//get the new quantity
const newQuantity = 3;

//edit the cart item quantity
cartItemsQueries.editCartItemQuant(cartItemId, newQuantity)
  .then(updatedCartItem => {
    res
      .json({ updatedCartItem });
  })
  .catch(error => {
    res.status(500).json({error: error.message});
  })

});

//Delete route

router.post('/:id/delete', (req, res) => {

  //get the cart item id
  const cartItemId = req.params.id;
  //delete the cart item
  cartItemsQueries.deleteCartItem(cartItemId)
    .then(updatedCartItem => {
      res.json({ updatedCartItem });
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    })

  });


module.exports = router;
