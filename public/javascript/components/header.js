$(() => {
    window.header = {};
    const $pageHeader = $('#page-header');
    function updateHeader() {
      console.log("Im in the header");
      let userLinks = `
      <div id="nav-alpha">
          <nav class="nav-container">
            <section class="left-nav">
            <h1>THE CULPRIT'S KITCHEN</h1>
            <p><i class="fa-solid fa-truck-fast"></i></p>
          </section>
          <section class="right-nav">
            <button id="about-but" class="button-col" type="submit">ABOUT</button>
            <button id="menu-but" class="button-col" type="submit">MENU</button>
            <button id="cart-but" class="button-col" type="submit">CART</button>
            <button type="submit">Order for Pickup</button>
          </section>
        </nav>
      </div>
        `;
      $pageHeader.append(userLinks);
    }

    window.header.update = updateHeader;

    // header.update();
});

