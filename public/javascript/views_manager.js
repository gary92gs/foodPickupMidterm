$(() => {

  const $main = $('#main-content');

  window.views_manager = {};

  window.views_manager.show = function(item) {
    $menuListing.detach();

    switch (item) {
      case 'menu':
        $menuListing.appendTo($main);
        break;
      case 'error': {
        const $error = $(`<p>${arguments[1]}</p>`);
        $error.appendTo('body');
        setTimeout(() => {
          $error.remove();
          views_manager.show('menu');
        }, 2000);

        break;
      }
    }
  }

});
