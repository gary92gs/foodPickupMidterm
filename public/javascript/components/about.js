$(() => {
  window.about = {};
  const $mainContainer = $('#main-content');
  // const $navHeaderDiv = $("#nav-alpha").find(".nav-header");

  function getAboutPage() {
    menuItems.clear();
    let aboutHTML = `
        <div>
          <h1>I am an about Page!</h1>
        </div>
      `;
      $mainContainer.append(aboutHTML);
      $menuWrapper.append(aboutHTML);
  }
  window.about.getAboutPage = getAboutPage;

});

