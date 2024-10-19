$(document).ready(function(){
  $("#navbar").load("components/navbar.html", function() {

    // Hamburger clicked
    $('#hamburger').on('click', function() {
      $('#mobile-menu').removeClass('hidden');
    });

    // Close menu clicked
    $('#close-menu').on('click', function() {
      $('#mobile-menu').addClass('hidden');
    });
    
  });
});