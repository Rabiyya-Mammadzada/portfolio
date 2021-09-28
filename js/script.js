$("#container").fadeNavigation();

$("#portfolio .portfolio .portfolio-body .item figure").tilt({
  maxTilt: 3,
  glare: true,
  maxGlare: 0.6,
  reverse: true,
});

$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplaySpeed: 2000,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(".theme-color li a").on("click", function (e) {
  var style_link = $(this).attr("href");
  $("link.site-color").attr("href", style_link);

  e.preventDefault();
});

// $(".open-menu").click(function (e) {

//     e.preventDefault()
// })
// $(".close-menu").click(function (e) {
//     $(".side-bar").()
//     e.preventDefault()
// })

// $(document.body).click(function () {
//     if ((this).hasClass(".open")) {
//         $(".side-bar").addClass("open")
//     }

// });
$(".open-menu").click(function (e) {
  if ($(window).width() <= 768) {
    e.preventDefault();
    $(".side-bar").show().fadeIn(1500).css("left", "200px");

    $(".close-menu").click(function (e) {
      e.preventDefault();
      $(".side-bar").hide().fadeOut(2500).css("left", "0px");
    });
      
  }
});
