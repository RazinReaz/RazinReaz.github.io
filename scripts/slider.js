const slidesData = [
    {
        id: "slide-01",
        src: "assets/projects/flocking-boids/boids%201.gif",
        alt: "Flocking Simulation",
        link: "https://razinreaz.github.io/flocking-boids/",
    },
    //   {
    //     id: "slide-02",
    //     src: "assets/projects/raytracing/5%20spheres.gif",
    //     alt: "Ray Tracing",
    //     link: "https://github.com/RazinReaz/ray-tracing",
    //   },
    {
        id: "slide-03",
        src: "assets/projects/ragdoll/demo.gif",
        alt: "Ragdoll Physics",
        link: "https://razinreaz.github.io/Ragdoll-Simulation/",
    },
    {
        id: "slide-04",
        src: "assets/projects/ray-casting/demo.gif",
        alt: "Simple Ray Casting",
        link: "https://razinreaz.github.io/raycasting/",
    },
    {
        id: "slide-05",
        src: "assets/projects/steering-behaviours/path.gif",
        alt: "Steering Behaviours",
        link: "https://github.com/RazinReaz/Steering-behaviours",
    },
    {
        id: "slide-06",
        src: "assets/projects/asteroids/game_level_1.gif",
        alt: "Asteroids",
        link: "https://razinreaz.github.io/GameJam-2023-Asteroids/",
    },
    {
        id: "slide-07",
        src: "assets/projects/game-of-life/2.gif",
        alt: "Game of Life",
        link: "https://razinreaz.github.io/game-of-life/",
    },
    {
        id: "slide-08",
        src: "assets/projects/tworch/gaussian%205layer-10nn.gif",
        alt: "Tworch - Model Fitting",
        link: "https://github.com/RazinReaz/Tworch",
    },
    {
        id: "slide-09",
        src: "assets/projects/optimizers/all-demo-places.gif",
        alt: "Optimizer Visualization",
        link: "https://github.com/RazinReaz/Optimizers-Visualization",
    },
    {
        id: "slide-10",
        src: "assets/projects/em-visualized/6D_data_points-gmm-5.gif",
        alt: "Expectation Maximization Algorithm",
        link: "https://github.com/RazinReaz/machine-learning-sessional/tree/main/offline-4-pca",
    },
];

function createSlide(slide) {
    return `
    <a href="${slide.link}" target="_blank">
      <img id="${slide.id}" src="${slide.src}" class="slides" alt="${slide.alt}">
    </a>
  `;
}

function createNavDot(slide) {
    return `<a href="#${slide.id}"></a>`;
}



document.addEventListener("DOMContentLoaded", () => {
    const sliderContainer = document.querySelector(".slider");
    const sliderNav = document.querySelector(".slider-nav");

    sliderContainer.innerHTML = slidesData.map(createSlide).join("");
    sliderNav.innerHTML = slidesData.map(createNavDot).join("");

    // Initialize the slideshow
    resetSlideInterval();
});

let currentSlideIndex = 0; // Track the current slide index
let slideInterval;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slides");
    let totalSlides = slides.length;
    currentSlideIndex =
        (currentSlideIndex + direction + totalSlides) % totalSlides;
    const slider = document.querySelector(".slider");
    const newSlide = slides[currentSlideIndex];
    slider.scrollTo({
        left: newSlide.offsetLeft,
        behavior: "smooth",
    });
    updateNavDots(currentSlideIndex);
    resetSlideInterval();
}

function updateNavDots(activeIndex) {
    const navDots = document.querySelectorAll(".slider-nav a");
    navDots.forEach((dot, index) => {
        dot.style.opacity = index === activeIndex ? "1" : "0.25";
    });
}

// Add click event listeners to the navigation dots
function initNavDots() {
    const navDots = document.querySelectorAll(".slider-nav a");
    navDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlideIndex = index;
            const slider = document.querySelector(".slider");
            const slides = document.querySelectorAll(".slides");
            slider.scrollTo({
                left: slides[currentSlideIndex].offsetLeft,
                behavior: "smooth",
            });
            updateNavDots(currentSlideIndex);
        });
    });
}

function resetSlideInterval() {
    clearInterval(slideInterval);
}

document.addEventListener("DOMContentLoaded", () => {
    slideInterval = setInterval(() => changeSlide(1), 10000); // Start the interval
});
