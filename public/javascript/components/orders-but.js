// On click functions for order page


$(document).on('click', '#view-cart-but', function() {
  getAllCartItems()
  .then((json) => {
    cartItems.loadOrders(json.orders);
  })
});
