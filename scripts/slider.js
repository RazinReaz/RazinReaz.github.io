const slidesData = [
    {
        id: "slide-01",
        src: "assets/projects/flocking-boids/boids%201.gif",
        alt: "Flocking Simulation",
        link: "https://razinreaz.github.io/flocking-boids/",
        
    },
      {
        id: "slide-02",
        src: "assets/projects/raytracing/5%20spheres.gif",
        alt: "Path Tracing",
        link: "https://github.com/RazinReaz/ray-tracing",
        
      },
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
        src: "assets/projects/steering-behaviours/path-30.gif",
        alt: "Steering Behaviours",
        link: "https://github.com/RazinReaz/Steering-behaviours",
        
    },
    {
        id: "slide-06",
        src: "assets/projects/asteroids/game_level_1.gif",
        alt: "Asteroids Game",
        link: "https://razinreaz.github.io/GameJam-2023-Asteroids/",
        
    },
    {
        id: "slide-07",
        src: "assets/projects/rope/rope%20gif%20square.gif",
        alt: "Rope Simulation",
        link: "https://razinreaz.github.io/rope-simulation/",
    },
    {
        id: "slide-08",
        src: "assets/projects/game-of-life/2.gif",
        alt: "Game of Life",
        link: "https://razinreaz.github.io/game-of-life/",
    },
    {
        id: "slide-09",
        src: "assets/projects/tworch/gaussian%205layer-10nn.gif",
        alt: "Tworch",
        link: "https://github.com/RazinReaz/Tworch",
    },
    {
        id: "slide-10",
        src: "assets/projects/optimizers/all-demo-places.gif",
        alt: "Optimizer Visualization",
        link: "https://github.com/RazinReaz/Optimizers-Visualization",
    },
    {
        id: "slide-11",
        src: "assets/projects/em-visualized/6D_data_points-gmm-5.gif",
        alt: "EM Algorithm",
        link: "https://github.com/RazinReaz/machine-learning-sessional/tree/main/offline-4-pca",
        
    },
];

const INTERVAL = 15000; // 15 seconds 

function createSlide(slide) {
    const isSimulation = slide.link.includes("github.io");
    
    return `
    <div id="${slide.id}" class="slide">
        <a href="${slide.link}" target="_blank" class="slide-image-wrapper">
            <img src="${slide.src}" alt="${slide.alt}">
            <div class="slide-overlay-text">Click to ${isSimulation ? 'try' : 'view'} <br><b>${slide.alt}</b> ${isSimulation ? '' : 'Code'}</div>
        </a>
    </div>
  `;
}

function createNavDot(slide) {
    return `<a href="#${slide.id}"></a>`;
}


// document.addEventListener("DOMContentLoaded", init, false);


document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const sliderNav = document.querySelector(".slider-nav");
    const slides = document.querySelectorAll(".slide");
    
    slider.innerHTML = slidesData.map(createSlide).join("");
    
    if (sliderNav) {
        sliderNav.innerHTML = slidesData.map(createNavDot).join("");
    }


    // Autoplay functionality
    let autoPlayInterval = setInterval(() => {
        slider.scrollBy({
            left: 100, //! NEEDs to change
            behavior: "smooth",
        });
    }, INTERVAL);

    // // Pause autoplay on hover
    slider.addEventListener("mouseenter", () =>
    clearInterval(autoPlayInterval)
    );
    slider.addEventListener("mouseleave", () => {
    autoPlayInterval = setInterval(() => {
        slider.scrollBy({
            left: 100, //! NEEDs to change
            behavior: "smooth",
        });
    }, INTERVAL);
    });

    // // Clone first and last slides
    // const cloneFirstSlides = slides
    //   .slice(0, 2)
    //   .map((slide) => slide.cloneNode(true));
    // const cloneLastSlides = slides
    //   .slice(-2)
    //   .map((slide) => slide.cloneNode(true));

    // // Append clones to the slider
    // cloneFirstSlides.forEach((clone) => slider.appendChild(clone));
    // cloneLastSlides.forEach((clone) =>
    //   slider.insertBefore(clone, slider.firstChild)
    // );

    // // Adjust slider's scroll position to show original slides
    // const slideWidth = slides[0].offsetWidth;
    // slider.scrollLeft = slides.length * slideWidth;

    // // Handle wrap-around effect
    // slider.addEventListener("scroll", () => {
    //   if (slider.scrollLeft <= 0) {
    //     // User scrolled to the start; reset to the original last slide
    //     slider.scrollLeft = slides.length * slideWidth;
    //   } else if (
    //     slider.scrollLeft >=
    //     slider.scrollWidth - slider.offsetWidth
    //   ) {
    //     // User scrolled to the end; reset to the original first slide
    //     slider.scrollLeft =
    //       slides.length * slideWidth - slider.offsetWidth;
    //   }
    // });

});

