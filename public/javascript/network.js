function getAllMenuItems() {
  let url = "/api/menu-items";
  return $.ajax({
    url
  });
};

// // Get cookie iD
// function getCurrentID () {
//   let url = "/";
//   return $.ajax({
//     url,
//     success: function(response) {
//       // console.log(Current user ID)
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
