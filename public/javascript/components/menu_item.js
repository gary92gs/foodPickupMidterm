$(() => {
  window.menuItem = {};
  // const $mainContainer = $('#main-content')

  function listMenuItem(meal) {
  let mealLayout = `
        <div class="meal">
          <img src="${meal.image_url}">
          <h2>${meal.name}</h2>
          <p>${meal.description}</p>
          <p>Price: ${meal.price}</p>
          <p>Size: ${meal.size}</p>
        </div>
  `
  return mealLayout;
  // $mainContainer.append(mealLayout);
  }

  window.menuItem.listMenuItem = listMenuItem;

});

