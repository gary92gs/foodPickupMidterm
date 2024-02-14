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
  console.log(window.cart);
});
