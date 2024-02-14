function getAllMenuItems() {
  let url = "/api/menu-items";
  return $.ajax({
    url
  });
}

// Get cookie iD
function getCurrentID () {
  let url = "/";
  return $.ajax({
    url,
    success: function(response) {
      // console.log(Current user ID)
    }
  })
}
