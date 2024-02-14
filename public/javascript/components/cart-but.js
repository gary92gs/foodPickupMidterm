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
      console.log("Invalid quantity.");
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
