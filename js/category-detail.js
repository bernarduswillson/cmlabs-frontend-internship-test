$(document).ready(function () {
  // Lottie Loading Animation
  var animation = lottie.loadAnimation({
    container: document.getElementById('lottieAnimation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../assets/animations/spinner-loading.json'
  });

  var urlParams = new URLSearchParams(window.location.search);
  var categoryName = urlParams.get('category-name');

  $('#categoryName').text(categoryName);
  $('#categoryTitle').text(categoryName + " Meals");

  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/filter.php",
    method: "GET",
    data: {
      c: categoryName
    },
    success: function (response) {
      if (response.meals === null) {
        $('#categoryDetail').attr('style', 'text-align: center; padding: 20px;');
        $('#categoryDetail').text("Category not found.");
        return;
      }

      $.each(response.meals, function (index, meal) {
        var mealCard = $('<div></div>').load('components/meal-card.html', function () {
          mealCard.find('#mealImage').attr('src', meal.strMealThumb);
          mealCard.find('#mealName').text(meal.strMeal);

          mealCard.click(function () {
            var mealId = meal.idMeal;
            window.location.href = "/meals-detail.html?meal-id=" + mealId;
          });

          $('#mealList').append(mealCard);
        });
      });
    },

    error: function () {
      $('#mealList').text("Failed to load meals.");
    },

    complete: function () {
      $('#lottieLoader').fadeOut();
    }
  });
});