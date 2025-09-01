// Function to scroll slider left or right
function scrollSlider(direction) {
    const slider = document.querySelector('.slider');
    const slideWidth = slider.querySelector('.slide')?.offsetWidth || 300;
    const scrollAmount = slideWidth * 0.8; // Scroll by 80% of slide width
    
    if (direction === 'left') {
        slider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
    
    // Update arrow states after scrolling
    setTimeout(updateArrowStates, 500);
}

// Function to update arrow states (enable/disable based on scroll position)
function updateArrowStates() {
    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.slider-arrow.left');
    const rightArrow = document.querySelector('.slider-arrow.right');
    
    if (!slider || !leftArrow || !rightArrow) return;
    
    const isAtStart = slider.scrollLeft <= 0;
    const isAtEnd = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 10;
    
    leftArrow.disabled = isAtStart;
    rightArrow.disabled = isAtEnd;
}

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
        src: "./assets/projects/softbody-pbd/final(self-coll-incomplete).gif",
        alt: "Softbody PBD",
        link: "https://razinreaz.github.io/softbody-pbd/",
    },
    {
        id: "slide-04",
        src: "assets/projects/ragdoll/demo.gif",
        alt: "Ragdoll Physics",
        link: "https://razinreaz.github.io/Ragdoll-Simulation/",
        
    },
    {
        id: "slide-05",
        src: "assets/projects/ray-casting/demo.gif",
        alt: "Simple Ray Casting",
        link: "https://razinreaz.github.io/raycasting/",
        
    },
    {
        id: "slide-06",
        src: "assets/projects/steering-behaviours/path-30.gif",
        alt: "Steering Behaviours",
        link: "https://github.com/RazinReaz/Steering-behaviours",
        
    },
    {
        id: "slide-07",
        src: "assets/projects/asteroids/game_level_1.gif",
        alt: "Asteroids Game",
        link: "https://razinreaz.github.io/GameJam-2023-Asteroids/",
        
    },
    {
        id: "slide-08",
        src: "assets/projects/rope/rope%20gif%20square.gif",
        alt: "Rope Simulation",
        link: "https://razinreaz.github.io/rope-simulation/",
    },
    {
        id: "slide-09",
        src: "assets/projects/game-of-life/2.gif",
        alt: "Game of Life",
        link: "https://razinreaz.github.io/game-of-life/",
    },
    {
        id: "slide-10",
        src: "assets/projects/cubey/cubey.gif",
        alt: "Cubey",
        link: "https://razinreaz.github.io/cubey/",
    },
    {
        id: "slide-11",
        src: "assets/projects/tworch/gaussian%205layer-10nn.gif",
        alt: "Tworch",
        link: "https://github.com/RazinReaz/Tworch",
    },
    {
        id: "slide-12",
        src: "assets/projects/optimizers/all-demo-places.gif",
        alt: "Optimizer Visualization",
        link: "https://github.com/RazinReaz/Optimizers-Visualization",
    },
    {
        id: "slide-13",
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
            <img data-src="${slide.src}" alt="${slide.alt}" loading="lazy" class="slide-image">
            <div class="slide-overlay-text">Click to ${isSimulation ? 'try' : 'view'} <br><b>${slide.alt}</b> ${isSimulation ? '' : 'Code'}</div>
        </a>
    </div>
  `;
}

// Lazy loading implementation
function loadImage(img) {
    if (img.dataset.src) {
        img.src = img.dataset.src;
        img.classList.remove('slide-image');
        img.classList.add('slide-image-loaded');
    }
}

// Intersection Observer for lazy loading
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                loadImage(img);
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px', // Start loading 50px before image comes into view
        threshold: 0.01
    });

    // Observe all slide images
    document.querySelectorAll('.slide-image').forEach(img => {
        imageObserver.observe(img);
    });
}

// Progressive loading - load first few images immediately
function loadCriticalImages() {
    const criticalSlides = slidesData.slice(0, 3); // Load first 3 slides immediately
    criticalSlides.forEach((slide, index) => {
        const img = document.querySelector(`#${slide.id} .slide-image`);
        if (img) {
            setTimeout(() => loadImage(img), index * 100); // Stagger loading
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    
    if (slider) {
        slider.innerHTML = slidesData.map(createSlide).join("");

        // Setup lazy loading
        setupLazyLoading();
        
        // Load critical images first
        loadCriticalImages();

        // Autoplay functionality with performance optimization
        let autoPlayInterval;
        
        function startAutoplay() {
            autoPlayInterval = setInterval(() => {
                if (slider && !slider.matches(':hover')) {
                    slider.scrollBy({
                        left: 100,
                        behavior: "smooth",
                    });
                }
            }, INTERVAL);
        }

        function stopAutoplay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        }

        // Start autoplay
        startAutoplay();

        // Pause autoplay on hover
        slider.addEventListener("mouseenter", stopAutoplay);
        slider.addEventListener("mouseleave", startAutoplay);

        // Pause autoplay when tab is not visible
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                stopAutoplay();
            } else {
                startAutoplay();
            }
        });

        // Initialize arrow states
        setTimeout(updateArrowStates, 1000);
        
        // Update arrow states on scroll
        slider.addEventListener('scroll', updateArrowStates);
    }
});

