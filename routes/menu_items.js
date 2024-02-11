const express = require('express');
const router  = express.Router();
const MenuItemsModel = require('./../models/menu_itemsModel')

router.get('/', (req, res) => {
  MenuItemsModel.getMeals()
    .then((result) => {
      const templateVariables = {
        menu_items: result.rows
      }
      return res.render('menu_items', templateVariables);
    })

});

module.exports = router;
