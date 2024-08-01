$(function () {
  "use strict";

  // fixed menu js
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header_area").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $(".header_area").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });


  // scroll to top js
  var btn = $(".scroll-to-top");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        800
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });

  // Mobile menu js start

  $(".mobile-topbar .bars").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
    return false;
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  // $(".sub-mobile-menu ul").hide();
  // $(".sub-mobile-menu a").on("click", function () {
  //   $(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
  //   $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  // });
});