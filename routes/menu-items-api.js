const express = require('express');
const router  = express.Router();
const menuItemQueries = require('../db/queries/menu_itemsModel');

//browse all menu_items
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

//add individual meal_item
router.post('/', (req, res) => {
  res.send('inside /');
});

//read individual meal_item
router.get('/:id', (req, res) => {
  res.send('inside get user /:id');
});

//edit individual meal_item
router.post('/:id', (req, res) => {
  res.send('inside post user /:id');
});

//delete individual meal_item
router.post('/:id/delete', (req, res) => {
  res.send('inside post user /:id/delete');
});

module.exports = router;
