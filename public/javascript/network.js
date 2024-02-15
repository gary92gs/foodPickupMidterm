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
function getAllCartItems() {
  let url = "/api/cart-items";
  return $.ajax({
    url: url,
    method: "GET"
  });
}

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


// Send message route
function sendMessage(body) {
  const messageBody = body;

  const from = '+12134631207';
  const to = '+12508265312';

  return $.ajax({
    url: '/messages/send',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ body: messageBody, from: from, to: to }),
    success: function(response) {
        console.log(response);
    },
    error: function(xhr, status, error) {
        console.error(error);
    }
  });
}
