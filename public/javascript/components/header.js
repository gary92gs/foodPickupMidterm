$(() => {
  window.header = {};
  const $pageHeader = $('#page-header');
  function generateUserLinks(userId) {
    const loggedInLinks = `
    <button id="about-but" class="button-col" type="submit">About</button>
    <button id="menu-but" class="button-col" type="submit">Menu</button>
    <button id="cart-but" class="button-col" type="submit">Cart</button>
    ${userId === "1" ? '<button id="orders-but" type="submit">Orders</button>' : ''}
    <button id="logout-but" class="button-col" type="submit">LOGOUT</button>
    `;

    const loggedOutLinks = `
    <button id="about-but" class="button-col" type="submit">About</button>
    <button id="menu-but" class="button-col" type="submit">Menu</button>
    <button id="cart-but" class="button-col" type="submit">Cart</button>
    <button id="login-but" class="button-col" type="submit">LOGIN</button>
    `;

    return userId ? loggedInLinks : loggedOutLinks;
  }

  function updateHeader(userId) {
    const userLinks = `
      <div id="nav-alpha">
        <nav class="nav-container">
          <section class="left-nav">
            <h1>THE CULPRIT'S KITCHEN</h1>
            <i class="fa-solid fa-truck-fast"></i>
          </section>
          <section class="right-nav">
            ${generateUserLinks(userId)}
          </section>
        </nav>
      </div>
    `;
    $pageHeader.append(userLinks);
  }

  window.header.update = updateHeader;
});
