document.addEventListener("DOMContentLoaded", function () {
  const burgerMenuIcon = document.querySelector(".burger-menu-icon");
  const navMenu = document.querySelector(".nav-menu");
  const navItems = document.querySelectorAll(".nav-item");

  burgerMenuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });
});
