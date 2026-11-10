$(function () {
  $("#travel-tabs").tabs();

  $(".date-field").datepicker({
    dateFormat: "mm/dd/yy",
    minDate: 0
  });

  $(".search-button").on("click", function () {
    alert("Thank you for choosing Happy Travel! This is a sample educational website.");
  });
});
