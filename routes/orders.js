
const express = require('express');
const router = express.Router();
const orderQueries = require('../db/queries/orders');

router.get('/', (req, res) => {
  orderQueries.getOrders()
    .then(orders => {
      res.json({ orders })
    })
    .catch(error => {
      res.status(500).json({error: error.message});
  });
});

module.exports = router;
