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

function sendLogout() {
  $.ajax({
    url: '/logout',
    method: 'GET',
    success: function(data, textStatus, xhr) {
      console.log(xhr.status);
      if (xhr.status === 200) {
        // Redirect to the location specified in the response header
        window.location.href = '/';
      } else {
        // Handle other successful responses as needed
        console.log('Logout successful.');
      }
    },
    error: function(xhr, textStatus, errorThrown) {
      // Handle errors if any
      console.error('Logout failed:', errorThrown);
    }
  });
}

// 2 is just a regular user
function sendLogin() {
  return $.ajax({
    url: '/login/2',
    method: 'GET',
    success: function(data, textStatus, xhr) {
      console.log(xhr.status);
      if (xhr.status === 200) {
        // Redirect to the location specified in the response header
        window.location.href = '/';
      } else {
        // Handle other successful responses as needed
        console.log('Login successful.');
      }
    },
  });
}
