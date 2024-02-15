function getAllMenuItems() {
  let url = "/api/menu-items";
  return $.ajax({
    url
  });
};

function getAllOrders() {
  let url = "/api/orders/all";
  return $.ajax({
    url: url,
    method: "GET",

  });
};

//get all cart items in an order
function getCartItems(orderId) {
  let url = "/api/cart-items";
  return $.ajax({
    url: url,
    method: "GET"
  });
}

// Get cookie iD
// function getCurrentID () {
//   return new Promise((resolve, reject) => {
//   element
//   })
//   let url = "/login";
//   return $.ajax({
//     url: url,
//     method: 'POST',
//     data: { user_id: req.session.user_id },
//     success: function(response) {
//       const userID = response.user_id;
//     }
//   })
// }

function addOrder(order) {
  let url = "/api/orders";
  return $.ajax({
    url: url,
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(order)
  })
};
