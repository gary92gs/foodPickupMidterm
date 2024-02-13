$(document).ready(function() {
  getAllMenuItems()
    .then((json) => {
        menuItems.listMenuItems(json.meals)

    })
    .catch((error) => {
      console.error('Error fetching menu items:', error);
    });
});

