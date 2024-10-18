$(document).ready(function() {
  const openMenu = () => {
    $('.absolute').removeClass('hidden');
  };

  const closeMenuHandler = () => {
    $('.absolute').addClass('hidden');
  };

  $('.fa-bars').on('click', openMenu);
  $('.fa-times').on('click', closeMenuHandler);
});
