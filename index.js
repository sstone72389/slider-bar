// var isMobile = true;
//
// function resizer() {
//   var w = $(window).width();
//   if (w < 1000) {
//     console.log("resize");
//     $('.responsive').slick({
//       dots: false,
//       arrows: false,
//       infinite: false,
//       speed: 300,
//       slidesToShow: 4,
//       slidesToScroll: 2,
//       variableWidth: true,
//       swipeToSlide: true,
//       autoplay: false,
//       responsive: [{
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
//     isMobile = true;
//   } else {
//     isMobile = false;
//     $('.responsive').slick({
//       responsive: [
//         {
//           breakpoint: 9999,
//           settings: "unslick"
//         },
//       ]
//     });
//   }
// }
//
// $(window).on('load resize', function() {
//   resizer();
// });
