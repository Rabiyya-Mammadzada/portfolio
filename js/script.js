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



const showMenu = (toggleId, navbarId, bodyId) => {
  const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId);

  if (toggle && navbar) {
    toggle.addEventListener("click", () => {
      // APARECER MENU
      navbar.classList.toggle("show");
      // ROTATE TOGGLE
      toggle.classList.toggle("rotate");
      // PADDING BODY
      bodypadding.classList.toggle("expander");
    });
  }
  
 
};
showMenu("nav-toggle", "navbar", "body");

$(document).mouseup(function (e) {
  if ($(e.target).closest("#navbar").length
              === 0) {
    $("#navbar").removeClass("show");
    $("#nav-toggle").removeClass("rotate")
    $("#body").removeClass("expander")
  }
});
