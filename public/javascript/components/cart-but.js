$(document).on('click', '.edit-cart-quan', function() {
  // Prompt the user for a new quantity
  let newQuantity = prompt("Enter new quantity:");

  // Parse the new quantity as an integer
  newQuantity = parseInt(newQuantity);

  // Check if the new quantity is valid
  if (!isNaN(newQuantity) && newQuantity > 0) {
    // Get the index of the clicked item in the cart_items array
    const meal_id = $(this).closest('.cart-item').data('meal_id');
    let index = window.orderObj.cart_items.findIndex(item => item.meal_id === meal_id);

    // Update the quantity in the array of objects
    if (index !== -1 && index < window.orderObj.cart_items.length) {
      window.orderObj.cart_items[index].quantity = newQuantity;
      cart.createCartPage();

    } else {
      console.log("Invalid index or item not found in the cart_items array.");
    }
  } else {
    alert("Invalid quantity.");
  }
});

$(document).on('click', '.remove-cart-item', function() {
  // Get the meal_id of the clicked item
  const meal_id = $(this).closest('.cart-item').data('meal_id');

  // Find the index of the item with the matching meal_id in the cart_items array
  const index = window.orderObj.cart_items.findIndex(item => item.meal_id === meal_id);

  // If the item is found, remove it from the array
  if (index !== -1) {
    window.orderObj.cart_items.splice(index, 1);
    cart.createCartPage();
  } else {
    console.log("Item not found in the cart_items array.");
  }
});


// Checkout button logic
$(document).on('click', '#checkout-but', function() {
  //set placed at time
  let currentTime = new Date();
  window.orderObj.placed_at = currentTime.toISOString();
  // console.log(window.orderObj);
  addOrder(window.orderObj)
    .then((results) => {
      // Cleanup clear divs and reset cart
      menuItems.clear();
      window.orderObj.cart_items = [];
      const $mainContainer = $('#main-content');

      // I dunno why I had to do this
      const storedDate = new Date(results.placed_at);

      // Calculate the time difference between UTC and PST in milliseconds (PST is UTC - 8 hours)
      const offsetMs = -8 * 60 * 60 * 1000;

      // Apply the offset to the stored date to convert it to PST
      const pstDate = new Date(storedDate.getTime() + offsetMs);

      // Format the PST date as desired
      const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true};
      const pstDateString = pstDate.toLocaleString('en-US', options);


      $mainContainer.append(`
        <div>
          <h1>Your order has been placed at ${pstDateString}!</h1>
          <p> Your order # is: ${results.id} You will receive a text when your order is confirmed with an ETA!</p>
        </div>
      `);
      window.orderObj.order_id = results.id;
      sendMessage(`An order with the ID ${results.id} has been placed at ${pstDateString}`);
    });

});


