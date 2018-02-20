// function resizer() {
//   var w = $(window).width();
//   if (w < 1000) {
//     if ($('.stick-cat-slider.slick-initialized').length > 0) {
//       return;
//     }
//     $('.stick-cat-slider').slick({
//       dots: false,
//       arrows: false,
//       infinite: false,
//       speed: 300,
//       slidesToShow: 4,
//       slidesToScroll: 2,
//       variableWidth: true,
//       swipeToSlide: true,
//       autoplay: false,
//       responsive: [
//
//         // {
//         //   breakpoint: 9999,
//         //   settings: "unslick"
//         // },
//
//         {
//           breakpoint: 1020,
//           settings: {
//             slidesToScroll: 2,
//           }
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     });
//     console.log("slicked");
//   } else {
//     if ($('.stick-cat-slider.slick-initialized').length == 0) {
//       return;
//     }
//     $('.stick-cat-slider').slick("unslick");
//     console.log("unslicked");
//   }
// }
//
// $(window).on('load resize', function() {
//   resizer();
// });
