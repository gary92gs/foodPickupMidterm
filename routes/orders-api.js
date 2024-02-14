
const express = require('express');
const router = express.Router();
const orderQueries = require('../db/queries/orders');

router.get('/all', (req, res) => {
  orderQueries.getOrders()
    .then(orders => {
      res.json({ orders })
    })
    .catch(error => {
      res.status(500).json({error: error.message});
  });
});



router.get('/', (req, res) => {

  //extract user id through cookie
  const userId = 1;

  //get that user's order information
  orderQueries.getOrderWithUserId(userId)
    .then(orders => {
      res.json({ orders })
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    })
});

//get the array of finalized cart items
//req.body

router.post('/', (req, res) => {
  //grab the order info
  const order = req.body
  // order.user_id = 1;


  orderQueries.addOrder(order)
    .then((order) => {
      // req.session.orderId = order.id;
      res.json(order);
    })
    .catch(error => {
      res.status(500).json({error: error.message});
  });
});


//Delete route

router.post('/:id/delete', (req, res) => {

  //get the order id
  const orderId = req.params.id;
  //delete the order
  orderQueries.deleteOrder(orderId)
    .then(deletedOrder => {
      res.json({ deletedOrder });
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    })

  });

module.exports = router;
