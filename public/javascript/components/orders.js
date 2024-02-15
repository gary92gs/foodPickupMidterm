$(() => {
  window.orders = {};
  const $mainContainer = $('#main-content');

  function getOrdersPage() {
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
      `;
      $mainContainer.append(ordersHTML);
  }

  function createOrder(order) {
    const $order = $(`
    <article class="order">
    <header>
      <div class="order-info">
        <div class="order-id">
          <h3>${order.username}</h3>
          <h3>${order.id}</h3>
        </div>
        <h3>${order.name}</h3>
      </div>
      <div>
        <p>${order.avg_prep_time_mins}</p>
      </div>
    </header>
    <footer>
    </footer>
  </article>
    `);
    console.log(order.username);
    return $order;

  };

  function displayOrders(orders) {


    // Element within orders page to hold the list of orders
    const $ordersList = $('#orders-list');

    // clear previous content
    $ordersList.empty();


    for (const orderId in orders) {
      const order = orders[orderId];

      console.log('orderid', orderId);
      console.log('orders Object', orders);
      const $order = createOrder(order);
      console.log('$order', $order);

      // Construct an HTML string for the order - customize as needed
      // const orderHtml = `<div class="order">${JSON.stringify(order, null, 2)}</div>`;
      // Append the order to the list
      $ordersList.append($order);

    }

  }

  function loadOrders(orders) {
    getOrdersPage();

    displayOrders(orders);
  }


  window.orders.getOrdersPage = getOrdersPage;
  window.orders.displayOrders = displayOrders;
  window.orders.loadOrders = loadOrders;
  window.orders.createOrder = createOrder;

});

