$(document).ready(function() {
  getAllMenuItems()
    .then((json) => {
      console.log(json)
      // menuListing.listAll(json);
      // views_manager.show('menu'); // Pass the menu list to the view manager
    })
    .catch((error) => {
      console.error('Error fetching menu items:', error);
      // views_manager.show('error', 'Error fetching menu items'); // Show error message
    });
});

