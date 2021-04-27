"use strict";

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        margin: 60,
      },
      360: {
        items: 2,
        margin: 60,
      },
      500: {
        items: 3,
        margin: 60,
      },
      700: {
        items: 4,
        margin: 60
      }
    }
  });
});