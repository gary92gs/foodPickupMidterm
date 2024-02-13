$(() => {
  window.about = {};
  const $mainContainer = $('#main-content');

  function getAboutPage() {
    menuItems.clear();
    let aboutHTML = `
        <div>
          <h1>I am an about Page!</h1>
        </div>
      `;
      $mainContainer.append(aboutHTML);
  }
  window.about.getAboutPage = getAboutPage;

});

