document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav-menu");
  const navItems = document.querySelectorAll(".nav-item");

  burger.addEventListener("click", () => {
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
