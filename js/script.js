$(document).ready(function() {
    $.getJSON('https://www.themealdb.com/api/json/v1/1/categories.php', function(data) {
      if (data.categories && data.categories.length > 0) {
        var category = data.categories[0];
        $('#text').append(`
          <h1>${category.strCategory}</h1>
        `);
      }
  });
});
