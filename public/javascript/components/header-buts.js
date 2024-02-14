  // Clicking menu does the same as loading into the page
  $(() => {

  const $menuBut = $('#menu-but');
  const $aboutBut = $('#about-but');
  const $cartBut = $('#cart-but');

  $menuBut.on("click", function() {
    getAllMenuItems()
    .then((json) => {
      menuItems.listMenuItems(json.meals)

    })
    .catch((error) => {
      console.error('Error fetching menu items:', error);
    });
  });

  $aboutBut.on("click", function() {
    about.getAboutPage();
  });

  //load the cart html when the cart but is clicked
  $cartBut.on("click", function() {
    console.log('button clicked');
    console.log(window.cart);
    //cart.getCartPage();
  });

});
