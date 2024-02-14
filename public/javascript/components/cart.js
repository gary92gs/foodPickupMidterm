$(() => {
  window.cart = {};
  const $mainContainer = $('#main-content');


  function getCartPage() {
    menuItems.clear();
    let cartHTML = `
        <div>
          <h1>I am a cart Page!</h1>
        </div>
        <div>
          <h2>Order Id</h2>
          <h3>Cart item Id</h3>
          <h4>Quantity</h4>
        </div>
      `;
      $mainContainer.append(cartHTML);

  }
  window.cart.getCartPage = getCartPage;
  function createCartPage() {
    menuItems.clear();
    $cartWrapper = $('<div>').addClass('cart');
    $cartWrapper.append('<h1>Order so far:<h1></h1>');
    let cartHTML;
    if (!window.orderObj || window.orderObj.cart_items.length === 0) {
      cartHTML = `
        <div>
          <h1>Currently nothing in your Cart!</h1>
        </div>
      `
      $mainContainer.append(cartHTML);
    } else {

      let totalCost = 0;

      window.orderObj.cart_items.forEach(meal => {
        let itemCost = meal.price * meal.quantity;
        totalCost += itemCost;
        cartHTML = `
          <div data-meal_id="${meal.meal_id}" class="cart-item">
            <p>${meal.meal_name}</p>
            <p>Price: ${Math.round((itemCost) * 100) / 100}</p>
            <p>Quantity: ${meal.quantity}<p/>
            <button class="edit-cart-quan">Edit Quantity</button>
            <button class="remove-cart-item">Remove from Cart</button>
          </div>
      `;
        $cartWrapper.append(cartHTML);
      });
      $mainContainer.append($cartWrapper);

      // set for checkout
      window.orderObj.total_cost = parseFloat(totalCost);

      $mainContainer.append(`
        <div>
          <p>Total Cost: ${Math.round(totalCost * 100) / 100}</p>
          <button id="checkout-but">Checkout</button>
        </div>
      `)
    }
  }
  window.cart.createCartPage = createCartPage;

});
