$(document).ready(function(){
  $("#navbar").load("components/navbar.html", function() {

    $('#hamburger').on('click', function() {
      $('#mobile-menu').removeClass('hidden');
    });

    $('#close-menu').on('click', function() {
      $('#mobile-menu').addClass('hidden');
    });
    
  });
});