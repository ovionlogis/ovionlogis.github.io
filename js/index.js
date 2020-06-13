window.addEventListener('load', function () {
  var dateElement = document && document.getElementById('date');

  if (dateElement) {
    dateElement.textContent = Date().split(' ')[3];
  }
});
