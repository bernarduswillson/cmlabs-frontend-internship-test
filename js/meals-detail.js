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
  var mealId = urlParams.get('meal-id');

  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/lookup.php",
    method: "GET",
    data: {
      i: mealId
    },
    success: function (response) {
      var meal = response.meals[0];

      $('#categoryName').text(meal.strCategory);
      $('#categoryName').attr('href', '/category-detail.html?category-name=' + meal.strCategory);  // Inject the href link dynamically

      $('#mealName').text(meal.strMeal);
      $('#mealTitle').text(meal.strMeal);

      $('#mealArea').text(meal.strArea + " Culinary");

      $('#mealImage').attr('src', meal.strMealThumb);

      $('#mealInstructions').html(meal.strInstructions.replace(/\r\n|\n/g, '<br>'));

      var ingredients = [];
      for (var i = 1; i <= 20; i++) {
        var ingredient = meal['strIngredient' + i];
        if (ingredient && ingredient.trim() !== "") {
          ingredients.push(ingredient);
        }
      }

      var ingredientsHtml = "<ul style='list-style-type: disc; padding-left: 20px;'>";
      ingredients.forEach(function(ingredient) {
        ingredientsHtml += "<li>" + ingredient + "</li>";
      });
      ingredientsHtml += "</ul>";

      $('#mealRecipes').html(ingredientsHtml);

      var videoUrl = meal.strYoutube;
      var videoId = videoUrl.split('v=')[1];

      var embedUrl = "https://www.youtube.com/embed/" + videoId;

      $('#mealTutorials').attr('src', embedUrl);

    },

    error: function () {
      // $('#mealTitle').text("Failed to load meals.");
    },

    complete: function () {
      $('#lottieLoader').fadeOut();
    }
  });
});