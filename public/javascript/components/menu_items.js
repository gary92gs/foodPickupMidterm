$(() => {
  window.menuItems = {}
  const $mainContainer = $('#main-content')

  const $menuWrapper = $('<div>').addClass('menu');

  const $navWrapper = $('<div>').addClass('nav-header');

  function addMeal(meal, container) {
    container.append(meal);
  };

  function clearMenuItems() {
    $menuWrapper.empty();
    $navWrapper.empty();
    $mainContainer.empty().append($menuWrapper)

    let menuLinks = `
    <div id="button-nav" class="std-border">
      <button id="app-but" type="submit">APPETIZERS</button>
      <button id="main-but" type="submit">MAINS</button>
      <button id="des-but" type="submit">DESSERTS</button>
      <button id="drink-but" type="submit">DRINKS</button>
      <button id="cart-but" type="submit">CART</button>
    </div>
    <div id="header-img">
      <img src="/images/lineup.PNG">
    </div>
  `;

  $navWrapper.html(menuLinks);
  $mainContainer.prepend($navWrapper);

    // Re-create the meal category containers
    const categories = ['Appetizers', 'Mains', 'Desserts', 'Beverages'];
    categories.forEach(category => {
      const $categoryContainer = $('<div>').addClass('meal-cat').attr('id', category);
      $categoryContainer.append(`<h1>${category.charAt(0).toUpperCase() + category.slice(1)}</h1>`);
      $menuWrapper.append($categoryContainer);
    });
  }

  function listMenuItems(meals) {
    clearMenuItems();


    // Get meals
    for (const mealId in meals) {
      const meal = meals[mealId]
      mealLayout = menuItem.listMenuItem(meal);

      let mealContainer;

      //Sort into correct container
      if (meal.type === 'Appetizers') {
        mealContainer = $('#Appetizers');
      } else if (meal.type === 'Mains') {
        mealContainer = $('#Mains');
      } else if (meal.type === 'Dessert') {
        mealContainer = $('#Desserts');
      } else if (meal.type === 'Beverages') {
        mealContainer = $('#Beverages');
      } else {
        mealContainer = $menuWrapper;
      }

      addMeal(mealLayout, mealContainer);
    }
  };

  window.menuItems.listMenuItems = listMenuItems;
});
