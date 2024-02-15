// $(() => {
//   window.cartItems = {};
//   const $mainContainer = $('#main-content');

//   // function getOrdersPage() {
//   //   menuItems.clear();
//   //   let ordersHTML = `
//   //         <div id="orders-img-container">
//   //           <img src="/images/orders.jpg">
//   //         </div>
//   //         <p> <p>
//   //         <div class="about-header">
//   //       </div>
//   //       <section>
//   //       <div id="orders-list"></div>
//   //       </section>
//   //     `;
//   //     $mainContainer.append(ordersHTML);
//   // }

//   function createCartItems(cartItems) {
//     const $cartItems = $(`

//           <h3>${cartItems.id}</h3>
//           <h3>${cartItems.quantity}</h3>
//           <h3>${cartItems.name}</h3>
//           <h3>${cartItems.price}</h3>

//     `);

//     return $cartItems;

//   };

//   function displayCartItems(cartItems) {


//     // Element within orders page to hold the list of orders
//     const $cartItemsList = $('#cart-items-list');

//     // clear previous content
//     $cartItemsList.empty();


//     for (const cartItemId in cartItems) {
//       const cartItem = cartItems[cartItemId];

//       console.log('cartItemId', cartItemId);
//       console.log('cart items Object', cartItems);
//       const $cartItem = createCartItems(cartItem);



//       // Append the cart item to the list
//       $cartItemsList.append($cartItem);

//     }

//   }

//   function loadCartItems(cartItems) {

//     displayCartItems(cartItems);
//   }


//   window.cartItems.createCartItems = createCartItems;
//   window.cartItems.displayCartItems = displayCartItems;
//   window.cartItems.loadCartItems = loadCartItems;


// });
