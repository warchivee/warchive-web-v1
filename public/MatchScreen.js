$(document).ready(function () {
  $(window).on("resize", function () {
    if ($(window).width() >= 960) {
      $(".wata_list").css("width", 960);
      $(".search__input").css("width", 500);
    } else if ($(window).width() < 960 && $(window).width() >= 640) {
      $(".wata_list").css("width", 640);
      $(".search__input").css("width", 500);
    } else if ($(window).width() < 640) {
      $(".wata_list").css("width", 320);
      $(".search__input").css("width", 320);
    }
  });
});
