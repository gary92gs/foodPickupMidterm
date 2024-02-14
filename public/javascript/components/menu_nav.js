// $(() => {
//   window.menuNav = {};
//   const $mainContainer = $('#main-content')

//   const $menuWrapper = $('<div>')   /// .addClass('menu');

//   $mainContainer.prepend($menuWrapper);

//   function clearNavMenu() {
//     $menuWrapper.empty()
//     $mainContainer.empty().prepend($menuWrapper);
//   }

//   function updateNav() {
//     clearNavMenu();
//     let menuLinks = `
//     <div id="button-nav" class="std-border">
//     //         <button id="app-but" type="submit">APPETIZERS</button>
//     //         <button id="main-but" type="submit">MAINS</button>
//     //         <button id="des-but" type="submit">DESSERTS</button>
//     //         <button id="drink-but" type="submit">DRINKS</button>
//     //         <button id="cart-but" type="submit">CART</button>
//     //       </div>
//     //       <div id="header-img">
//     //         <img src="/images/lineup.PNG">
//     //       </div>
//     `
//     $menuWrapper.append(menuLinks);
//   }
//   window.menuNav.updateNav = updateNav;
// });
