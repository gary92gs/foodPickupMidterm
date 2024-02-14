function getAllMenuItems() {
  let url = "/api/menu-items";
  return $.ajax({
    url
  });
};

// Get cookie iD
function getCurrentID () {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/getUserId',
      method: 'GET',
      success: function(response) {
        const userID = response.user_id;
        resolve(userID);
      },
      error: function(err) {
        reject(err);
      }
    });
  });
}

function addOrder(order) {
  let url = "/api/orders";
  return $.ajax({
    url: url,
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(order)
  })
};
