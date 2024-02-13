// $(() => {

//   const $main = $('#main-content');

//   window.views_manager = {};

//   window.views_manager.show = function(item) {
//     $menuItem.detach();

//     switch (item) {
//       case 'menu':
//         $menuItem.appendTo($main);
//         break;
//       case 'error': {
//         const $error = $(`<p>${arguments[1]}</p>`);
//         $error.appendTo('body');
//         setTimeout(() => {
//           $error.remove();
//           views_manager.show('menu');
//         }, 2000);

//         break;
//       }
//     }
//   }

// });
