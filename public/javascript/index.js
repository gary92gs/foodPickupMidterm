$(document).ready(function() {
  getAllMenuItems()
    .then((json) => {
      header.update();
      menuItems.listMenuItems(json.meals)
    })
    .catch((error) => {
      console.error('Error fetching menu items:', error);
    });
});

