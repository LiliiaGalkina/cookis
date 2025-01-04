let burger = document.querySelector("#burger");
let menu = document.querySelector("#menu");

burger.addEventListener("click", func);

function func() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}
