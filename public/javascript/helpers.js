// //Menu HTML
// function generateMenuHTML(response) {
//   let html = `
//     <header>
//       <div id="button-nav" class="std-border">
//         <button id="app-but" type="submit">APPETIZERS</button>
//         <button id="main-but" type="submit">MAINS</button>
//         <button id="des-but" type="submit">DESSERTS</button>
//         <button id="drink-but" type="submit">DRINKS</button>
//         <button id="cart-but" type="submit">CART</button>
//       </div>
//       <div id="header-img">
//         <img src="/images/lineup.PNG">
//       </div>
//     </header>
//     <div class="menu">
//       <div class="meal-cat" id="appies">
//         <h1>Appetizers</h1>
//       </div>
//       <div class="meal-cat" id="mains">
//         <h1>Mains</h1>
//       </div>
//       <div class="meal-cat" id="desserts">
//         <h1>Desserts</h1>
//       </div>
//       <div class="meal-cat" id="drinks">
//         <h1>Beverages</h1>
//       </div>
//     </div>
//   `;

//   const meals = response.meals;
//   // Iterate over meals and populate HTML
//   meals.forEach(function(meal) {
//     const mealHTML = `
//       <div class="meal">
//         <img src="${meal.image_url}">
//         <h2>${meal.name}</h2>
//         <p>${meal.description}</p>
//         <p>Price: ${meal.price}</p>
//         <p>Size: ${meal.size}</p>
//       </div>
//     `;
//     // Append the generated HTML to the appropriate container
//     if (meal.type === 'Appetizers') {
//       html += mealHTML;
//     } else if (meal.type === 'Mains') {
//       html += mealHTML;
//     } else if (meal.type === 'Dessert') {
//       html += mealHTML;
//     } else if (meal.type === 'Beverages') {
//       html += mealHTML;
//     }
//   });

//   return html;
// }
