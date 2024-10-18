$(document).ready(function () {
  var categoryListTitle = $("#categoryList");

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
            window.location.href = "/mealList.html?category=" + categoryName;
          });

          $('#categoryList').append(categoryCard);
        });
      });
    },

    error: function () {
      categoryListTitle.text("Failed to load categories.");
    },
  });
});
