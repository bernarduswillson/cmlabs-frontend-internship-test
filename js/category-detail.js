$(document).ready(function () {
  var urlParams = new URLSearchParams(window.location.search);
  var categoryDetail = urlParams.get('category');

  console.log(categoryDetail);
});