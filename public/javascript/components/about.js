$(() => {
  window.about = {};
  const $mainContainer = $('#main-content');
  // const $navHeaderDiv = $("#nav-alpha").find(".nav-header");

  function getAboutPage() {
    menuItems.clear();
    let aboutHTML = `

          <img src="/images/about.jpg">
          <p> Welcome to The Culprit's Kitchen, an enigmatic haven in the heart of Vancouver, where culinary mastery meets cinematic intrigue. Inspired by the timeless allure of 'The Usual Suspects,' our high-end restaurant invites you to embark on a gastronomic journey like no other.

          Immerse yourself in an ambiance reminiscent of Keyser Söze's mysterious world, where our carefully curated menu unfolds a storyline through every dish. Our chefs, akin to directors, craft a symphony of flavors, while our attentive waitstaff play the roles of characters, ensuring your dining experience at The Culprit's Kitchen is nothing short of extraordinary. Indulge in rare wines, savor unexpected culinary revelations, and redefine your dining expectations with us. Welcome to a culinary experience where every meal is a masterpiece and every bite leaves you craving for more.<p>
          <div class="about-header">
        </div>
      `;
      $mainContainer.append(aboutHTML);
      $menuWrapper.append(aboutHTML);
  }
  window.about.getAboutPage = getAboutPage;

});

