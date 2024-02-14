$(() => {
  window.about = {};
  const $mainContainer = $('#main-content');
  // const $navHeaderDiv = $("#nav-alpha").find(".nav-header");

  function getAboutPage() {
    menuItems.clear();
    let aboutHTML = `
        <div class="about-header">
          <img
        </div>
      `;
      $mainContainer.append(aboutHTML);
      $menuWrapper.append(aboutHTML);
  }
  window.about.getAboutPage = getAboutPage;

});

