$(() => {
  window.header = {};
  const $pageHeader = $('#page-header');
  function updateHeader() {
    // const userid = req.session.user_id;
    let userLinks = `
    <div id="nav-alpha">
        <nav class="nav-container">
          <section class="left-nav">
          <h1>THE CULPRIT'S KITCHEN</h1>
          <p><i class="fa-solid fa-truck-fast"></i></p>
        </section>
        <section class="right-nav">
          <button id="about-but" class="button-col" type="submit">About</button>
          <button id="menu-but" class="button-col" type="submit">Menu</button>
          <button id="cart-but" class="button-col" type="submit">Cart</button>
          <button id="orders-but" type="submit">Orders</button>
        </section>
      </nav>
    </div>
      `;
    $pageHeader.append(userLinks);
  }

  window.header.update = updateHeader;

  updateHeader()
});

