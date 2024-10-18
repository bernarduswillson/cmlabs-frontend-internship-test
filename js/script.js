const button = document.getElementById('button');
const textElement = document.getElementById('text');

button.addEventListener('click', function() {
  if (textElement.innerHTML === "World") {
    textElement.innerHTML = "Hello";
  } else {
    textElement.innerHTML = "World";
  }
});
