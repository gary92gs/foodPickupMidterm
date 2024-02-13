$(() => {
  window.menuItem = {};
  // const $mainContainer = $('#main-content')

  function listMenuItem(meal) {
  let mealLayout = `
        <div data-meal_id="${meal.meal_id}" class="meal">
          <img src="${meal.image_url}">
          <h2>${meal.name}</h2>
          <p>${meal.description}</p>
          <p>Price: ${meal.price}</p>
          <p>Size: ${meal.size}</p>
          <button class="add-cart-but" type="submit">Add to Cart</button>
        </div>
  `
  return mealLayout;
  // $mainContainer.append(mealLayout);
  }

  window.menuItem.listMenuItem = listMenuItem;

});

