
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

  //get that user's order information
  orderQueries.getOrderWithUserId(userId)
    .then(orders => {
      res.json({ orders })
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    })
});

router.post('/', (req, res) => {
  orderQueries.addOrder(order)
    .then((order) => {
      req.session.orderId = order.id;
      res.send('order created succesfully');
    })
    .catch(error => {
      res.status(500).json({error: error.message});
  });
});

module.exports = router;
