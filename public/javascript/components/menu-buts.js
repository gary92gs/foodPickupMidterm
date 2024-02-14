  $(document).on('click', '.add-cart-but', function() {
    if (!window.orderObj) {
      window.orderObj = {
        user_id: 1,
        // totalcost: 0,
        // placed_at: 0,
        // accepted_at: 0,
        // completed_at: 0,
        cart_items: [],
      }
    }

    const mealName = $(this).siblings('h2').text();
    const mealContainer = $(this).closest('.meal');
    const meal_id = $(this).closest('.meal').data('meal_id');
    const mealPrice = $(this).siblings('p[data-price]').data('price');
    const existingCartItemIndex = window.orderObj.cart_items.findIndex(item => item.meal_id === meal_id);



  if (existingCartItemIndex !== -1) {
    // Update quantity if item already exists in cart
    window.orderObj.cart_items[existingCartItemIndex].quantity++;
  } else {
    // Add new item to cart if it doesn't exist
    window.orderObj.cart_items.push({
      meal_id: meal_id,
      quantity: 1,
      meal_name: mealName,
      price: mealPrice
    });
  }

    mealContainer.append(`<p class="added-to-cart-msg">Added to cart!</p>`);

    // Remove the paragraph after 3 seconds
    setTimeout(function() {
      mealContainer.find('.added-to-cart-msg').remove();
    }, 1000);

  });


  // Scroll down functionality

$(document).on('click', '#app-but', function() {
  $appiesDiv = $(this).closest('body').find('#Appetizers');
  if ($appiesDiv.length > 0) {
      const scrollTop = $appiesDiv.offset().top - 120;
      $('html, body').animate({ scrollTop: scrollTop });
  }
});

$(document).on('click', '#main-but', function() {
  $menuDiv = $(this).closest('body').find('#Mains');
  if ($menuDiv.length > 0) {
      const scrollTop = $menuDiv.offset().top - 120;
      $('html, body').animate({ scrollTop: scrollTop });
  }
});


$(document).on('click', '#des-but', function() {
  $desDiv = $(this).closest('body').find('#Desserts');
  if ($desDiv.length > 0) {
      const scrollTop = $desDiv.offset().top - 120;
      $('html, body').animate({ scrollTop: scrollTop });
  }
});


$(document).on('click', '#drink-but', function() {
  $bevDiv = $(this).closest('body').find('#Beverages');
  if ($bevDiv.length > 0) {
      const scrollTop = $bevDiv.offset().top - 120;
      $('html, body').animate({ scrollTop: scrollTop });
  }
});

