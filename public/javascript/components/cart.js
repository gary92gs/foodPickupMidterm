$(() => {
  window.cart = {};
  const $mainContainer = $('#main-content');

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

      window.orderObj.cart_items.forEach(meal => {

        cartHTML = `
          <div data-meal_id="${meal.meal_id}" class="cart-item">
            <p>${meal.meal_name}</p>
            <p>Price: ${Math.round((meal.price * meal.quantity) * 100) / 100}</p>
            <p>Quantity: ${meal.quantity}<p/>
            <button class="edit-cart-quan">Edit Quantity</button>
            <button class="remove-cart-item">Remove from Cart</button>
          </div>
      `;
        $cartWrapper.append(cartHTML);
      });
      $mainContainer.append($cartWrapper);
    }
  }
  window.cart.createCartPage = createCartPage;

});

