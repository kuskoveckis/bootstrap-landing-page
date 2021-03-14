const navbar = document.querySelector(".navbar");
const navBrand = document.querySelector(".navbar-brand");
const navLink = document.querySelectorAll(".nav-link");
const dropDownMenu = document.querySelector(".dropdown-menu");

let navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("whiteNav");
    navBrand.classList.add("navbar-brand-black");
    navLink.forEach((link) => {
      link.classList.add("black");
    });
    dropDownMenu.classList.add("bg-white");
  } else if (window.scrollY <= navbarHeight) {
    navbar.classList.remove("whiteNav");
    navBrand.classList.remove("navbar-brand-black");
    navLink.forEach((link) => {
      link.classList.remove("black");
    });
    dropDownMenu.classList.remove("bg-white");
  }
});

ScrollOut({
  targets: [".left", ".right", ".up"],
  once: true,
});
