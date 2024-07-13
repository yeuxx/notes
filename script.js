// Buton açma/kapama işlemleri
var buttons = document.querySelectorAll(".toggle-button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    this.classList.toggle("opened");
  });
});
