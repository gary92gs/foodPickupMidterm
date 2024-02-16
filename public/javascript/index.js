$(document).ready(function() {
  getCurrentID().then((userId) => {
    getAllMenuItems()
      .then((json) => {
        header.update(userId);
        menuItems.listMenuItems(json.meals);
      })
      .catch((error) => {
        console.error('Error fetching menu items:', error);
      });
  });
});
