$(() => {
  window.cart = {};
  const $mainContainer = $('#main-content');

  function createCartPage() {
    menuItems.clear();
    $cartWrapper = $('<div>').addClass('cart');
    $cartWrapper.append('<div class="cart-head"><h1>Order so far:</h1></div>');
    let cartHTML;


    if (!window.orderObj || !window.orderObj.order_id) {
      if (!window.orderObj || window.orderObj.cart_items.length === 0) {
        cartHTML = `
          <div class="cart-head">
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
          <div id="checkout-div">
            <p>Total Cost: ${Math.round(totalCost * 100) / 100}</p>
            <button id="checkout-but">Checkout</button>
          </div>
        `)
      }
    } else {
      getOrderStatus(window.orderObj.order_id)
    }
  }

  function getOrderStatus(orderId) {
    getActiveOrder(orderId)
      .then((orderRes) => {
        console.log(orderRes.is_active);
        if (!orderRes.is_active) {
          cartHTML = `
          <div class="cart-head">
            <h1>Your order #${window.orderObj.order_id} has been placed! but is still being confirmed. Check back here for updates!</h1>
          </div>
          `
          $mainContainer.append(cartHTML)
        } else {
          cartHTML = `
          <div class="cart-head">
            <h1>Your order #${window.orderObj.order_id} has been confirmed! Check your phone for an ETA!</h1>
          </div>
          `
          $mainContainer.append(cartHTML)
        }

      })
  }

  window.cart.createCartPage = createCartPage;

});
