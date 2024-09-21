document.addEventListener("DOMContentLoaded", function () {
  function applyScrollAnimation(selector, animationClass) {
    const elements = document.querySelectorAll(selector);

    document.body.addEventListener("scroll", function () {
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.1;

        if (elementPosition < screenPosition && elementPosition > 0) {
          element.classList.add(animationClass);
        }
      });
    });
  }

  applyScrollAnimation(".from-left", "visible");
  applyScrollAnimation(".from-right", "visible");
});
