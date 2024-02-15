// On click functions for header menu
$(document).on('click', '#menu-but', function() {
  getAllMenuItems()
  .then((json) => {
    menuItems.listMenuItems(json.meals)

  })
  .catch((error) => {
    console.error('Error fetching menu items:', error);
  });
});

$(document).on('click', '#about-but', function() {
  about.getAboutPage();
});


$(document).on('click', '#cart-but', function() {
  cart.createCartPage();

});
$(document).on('click', '#logout-but', function() {
  sendLogout();
});


$(document).on('click', '#login-but', function() {
  sendLogin();
});

$(document).on('click', '#orders-but', function() {
  getAllOrders()
  .then((json) => {
    orders.loadOrders(json.orders);
  })
});
