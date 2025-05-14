const contents = document.querySelectorAll(".content");
let lastScrollY = window.scrollY;

function getScrollDirection() {
  const currentScrollY = window.scrollY;
  const direction = currentScrollY > lastScrollY ? "down" : "up";
  lastScrollY = currentScrollY;
  return direction;
}

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 50 && rect.top < (window.innerHeight - 150);
}

function checkVisibility() {
  const direction = getScrollDirection();

  contents.forEach(content => {
    const inView = isInView(content);
    const classes = [
      "content--visible-up",
      "content--visible-down",
      "content--hidden-up",
      "content--hidden-down"
    ];
    content.classList.remove(...classes);

    if (inView) {
      content.classList.add(
        direction === "down" ? "content--visible-down" : "content--visible-up"
      );
    } else {
      content.classList.add(
        direction === "down" ? "content--hidden-down" : "content--hidden-up"
      );
    }
  });
}

// Trigger once on page load
window.addEventListener("load", checkVisibility);
// Trigger on scroll
document.addEventListener("scroll", checkVisibility);

