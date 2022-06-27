
const button = document.querySelector("#button");
const npmIcon = document.querySelector(".npm-icon");

button.addEventListener("click", (e) => {
  e.preventDefault;

  npmIcon.classList.remove("is_animating");
  void npmIcon.offsetWidth;
  npmIcon.classList.add("is_animating");
});