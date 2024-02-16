$(() => {
  window.orders = {};
  const $mainContainer = $('#main-content');

  function convertPST(time) {
    //convert timestamp to pst
    const storedDate = new Date(time);

    // Calculate the time difference between UTC and PST in milliseconds (PST is UTC - 8 hours)
    const offsetMs = -8 * 60 * 60 * 1000;

    // Apply the offset to the stored date to convert it to PST
    const pstDate = new Date(storedDate.getTime() + offsetMs);

    // Format the PST date as desired
    const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true};
    const pstDateString = pstDate.toLocaleString('en-US', options);

    return pstDateString;
  }

  function renderOrdersContainer() {
    menuItems.clear();
    let ordersHTML = `
          <div id="orders-img-container">
            <img src="/images/orders.jpg">
          </div>
          <p> <p>
          <div class="about-header">
        </div>
        <section>
        <div id="orders-list"></div>

        </section>
        <section>
        <div id ="cart-items-list"></div>
        <section>
      `;
    $mainContainer.append(ordersHTML);
  }

  function createOrderElement(order) {
    const $order = $(`
    <article class="order">
    <header>
      <div class="order-info">
        <div class="order-id">
          <h3>Order by: ${order.username}</h3>
          <h3 data-order-id="${order.id}">Order ID: ${order.id}</h3>
          <h3>Total Cost: ${order.total_cost}</h3>
          <h3>Placed at: ${convertPST(order.placed_at)}</h3>
        </div>

        <div>
        <p>${order.is_active ? 'Order Accepted' : ''}</p>
        ${order.is_active ? '' : '<button id="accept-but" type="submit">Accept</button>'}
        </div>
      </div>
    </header>
    <footer>
    </footer>
  </article>
    `);
    return $order;

  }

  function renderOrders(orders) {
    renderOrdersContainer();

    // Element within orders page to hold the list of orders
    const $ordersList = $('#orders-list');

    // clear previous content
    $ordersList.empty();


    for (const orderId in orders) {
      const order = orders[orderId];

      const $order = createOrderElement(order);

      // Append the order to the list
      $ordersList.append($order);

    }



  }

  window.orders.renderOrders = renderOrders;
  window.orders.createOrder = createOrderElement;

});

