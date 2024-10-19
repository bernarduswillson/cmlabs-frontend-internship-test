$(document).ready(function () {
  var categoryListTitle = $("#categoryList");

  // Lottie Loading Animation
  var animation = lottie.loadAnimation({
    container: document.getElementById('lottieAnimation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../assets/animations/spinner-loading.json'
  });

  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/categories.php",
    method: "GET",
    success: function (response) {
      $.each(response.categories, function (index, category) {
        var categoryCard = $('<div></div>').load('components/card.html', function () {
          categoryCard.find('#categoryImage').attr('src', category.strCategoryThumb);
          categoryCard.find('#categoryName').text(category.strCategory);

          categoryCard.click(function () {
            var categoryName = category.strCategory;
            window.location.href = "/category-detail.html?category=" + categoryName;
          });

          $('#categoryList').append(categoryCard);
        });
      });
    },

    error: function () {
      categoryListTitle.text("Failed to load categories.");
    },

    complete: function () {
      $('#lottieLoader').fadeOut();
    }
  });
});
