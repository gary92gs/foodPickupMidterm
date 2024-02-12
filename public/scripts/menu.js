$(document).ready(function() {
  // Make AJAX request to fetch meal data
  $.ajax({
    url: '/api/menu-items',
    method: 'GET',
    success: function(response) {
      const meals = response.meals;
      // Iterate over meals and populate HTML
      meals.forEach(function(meal) {
        const mealHTML = `
          <div class="meal">
            <img src="${meal.image_url}">
            <h2>${meal.name}</h2>
            <p>${meal.description}</p>
            <p>Price: ${meal.price}</p>
            <p>Size: ${meal.size}</p>
          </div>
        `;
        // Append the generated HTML to the appropriate container
        if (meal.type === 'Appetizers') {
          $('#appies').append(mealHTML);
        } else if (meal.type === 'Mains') {
          $('#mains').append(mealHTML);
        } else if (meal.type === 'Dessert') {
          $('#desserts').append(mealHTML);
        } else if (meal.type === 'Beverages') {
          $('#drinks').append(mealHTML);
        }
      });
    },
    error: function(error) {
      console.error('Error fetching meal data:', error);
    }
  });

});


