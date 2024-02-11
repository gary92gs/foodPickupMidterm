const express = require('express');
const router  = express.Router();
const menuItemQueries = require('../db/queries/menu_itemsModel');

router.get('/', (req, res) => {
  menuItemQueries.getMeals()
    .then(meals => {
      res.json({ meals });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
