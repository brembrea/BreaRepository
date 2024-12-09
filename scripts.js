$(document).ready(function () {
    $(".blurred").on("click", function () {
      $(this).css("filter", "none");
      $(this).siblings(".tw-label").fadeOut();
    });
  });
  