const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
let currentIndex = 0;
let slideInterval;

// Update slider position
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

// Move to next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

// Move to previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

// Set up auto-play
function startAutoPlay() {
  slideInterval = setInterval(nextSlide, 10000);
}

// Stop auto-play when interacting manually
function stopAutoPlay() {
  clearInterval(slideInterval);
  startAutoPlay(); // Restart auto-play after interaction
}

// Event listeners
rightBtn.addEventListener("click", () => {
  stopAutoPlay();
  nextSlide();
});

leftBtn.addEventListener("click", () => {
  stopAutoPlay();
  prevSlide();
});

// Initialize
updateSlider();
startAutoPlay();
