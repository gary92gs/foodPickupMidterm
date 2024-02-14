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
          <p>PlaceHolder Icon</p>
        </section>
        <section class="right-nav">
          <button id="about-but" type="submit">ABOUT</button>
          <button id="menu-but" type="submit">MENU</button>
          <button id="cart-but" type="submit">CART</button>
          <button type="submit">Order for Pickup</button>
        </section>
      </nav>
    </div>
      `;
    $pageHeader.append(userLinks);
  }

  window.header.update = updateHeader;

  updateHeader()
});

