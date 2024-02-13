  // Clicking menu does the same as loading into the page
  $(() => {
  const $menuBut = $('#menu-but');
  $menuBut.on("click", function() {
    getAllMenuItems()
    .then((json) => {
      menuItems.listMenuItems(json.meals)

    })
    .catch((error) => {
      console.error('Error fetching menu items:', error);
    });
  });
});


