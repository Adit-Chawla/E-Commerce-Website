const openMenu = document.querySelector("#menu");
const navLinks = document.querySelector(".nav-links");

openMenu.addEventListener("click", (e) => {
  e.preventDefault();
  navLinks.classList.toggle("active");
  openMenu.classList.toggle("fa-times");
});
