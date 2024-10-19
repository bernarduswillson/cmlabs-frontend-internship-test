$(document).ready(function () {
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
      // Load categories
      $.each(response.categories, function (index, category) {
        var categoryCard = $('<div></div>').load('components/category-card.html', function () {
          categoryCard.find('#categoryImage').attr('src', category.strCategoryThumb);
          categoryCard.find('#categoryName').text(category.strCategory);

          // Redirect to category detail page
          categoryCard.click(function () {
            var categoryName = category.strCategory;
            window.location.href = "/category-detail.html?category-name=" + categoryName;
          });

          $('#categoryList').append(categoryCard);
        });
      });
    },

    // Handle error fetching
    error: function () {
      $("#categoryList").text("Failed to load categories.");
    },

    // Hide loader
    complete: function () {
      $('#lottieLoader').fadeOut();
    }
  });
});
