/* ============================================
   NAVIGATION FUNCTIONS
   ============================================ */

/**
 * Scrolls the slider in the specified direction
 * @param {string} direction - 'left' or 'right'
 */
function scrollSlider(direction) {
    const slider = document.querySelector('.slider');
    if (!slider) return;
    
    const slideWidth = slider.querySelector('.slide')?.offsetWidth || 300;
    const scrollAmount = slideWidth * 0.8; // Scroll by 80% of slide width
    
    const scrollDirection = direction === 'left' ? -scrollAmount : scrollAmount;
    slider.scrollBy({
        left: scrollDirection,
        behavior: 'smooth'
    });
    
    // Update arrow states after scroll animation completes
    setTimeout(updateArrowStates, 500);
}

/**
 * Updates arrow button states based on scroll position
 * Disables arrows when at the start or end of the slider
 */
function updateArrowStates() {
    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.slider-arrow.left');
    const rightArrow = document.querySelector('.slider-arrow.right');
    
    if (!slider || !leftArrow || !rightArrow) return;
    
    const scrollThreshold = 10; // Small threshold to account for rounding
    const isAtStart = slider.scrollLeft <= scrollThreshold;
    const isAtEnd = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - scrollThreshold;
    
    leftArrow.disabled = isAtStart;
    rightArrow.disabled = isAtEnd;
}

/* ============================================
   SLIDE DATA CONFIGURATION
   ============================================ */
const slidesData = [
    {
        id: "slide-01",
        src: "./assets/projects/pathtracer-gpu/pathtracer-vid.mp4",
        alt: "Real-time PBR Path tracer",
        link: "https://github.com/RazinReaz/path-tracer",
    },
    {
        id: "slide-01b",
        src: "./assets/projects/black-hole/blackhole.mp4",
        alt: "Black Hole Simulation",
        link: "https://github.com/RazinReaz/black-hole",
    },
    {
        id: "slide-03",
        src: "assets/projects/raytracing/5%20spheres.gif",
        alt: "Ray-tracing with Global Illumination",
        link: "https://github.com/RazinReaz/ray-tracing",
    },
    {
        id: "slide-02",
        src: "./assets/projects/softbody-pbd/final(self-coll-incomplete).gif",
        alt: "Softbody PBD",
        link: "https://razinreaz.github.io/softbody-pbd/",
    },
    {
        id: "slide-04",
        src: "assets/projects/flocking-boids/flocking-boids.mp4",
        alt: "Flocking Simulation",
        link: "https://razinreaz.github.io/flocking-boids/",
    },
    {
        id: "slide-05",
        src: "assets/projects/ragdoll/demo.gif",
        alt: "Ragdoll Physics",
        link: "https://razinreaz.github.io/Ragdoll-Simulation/",
    },
    {
        id: "slide-06",
        src: "assets/projects/ray-casting/ray-casting.mp4",
        alt: "Simple Ray Casting",
        link: "https://razinreaz.github.io/raycasting/",
    },
    {
        id: "slide-07",
        src: "assets/projects/steering-behaviours/path-30.gif",
        alt: "Steering Behaviours",
        link: "https://github.com/RazinReaz/Steering-behaviours",
    },
    {
        id: "slide-08",
        src: "assets/projects/asteroids/game_level_1.gif",
        alt: "Asteroids Game",
        link: "https://razinreaz.github.io/GameJam-2023-Asteroids/",
    },
    {
        id: "slide-09",
        src: "assets/projects/rope/rope%20gif%20square.gif",
        alt: "Rope Simulation",
        link: "https://razinreaz.github.io/rope-simulation/",
    },
    {
        id: "slide-10",
        src: "assets/projects/game-of-life/2.gif",
        alt: "Game of Life",
        link: "https://razinreaz.github.io/game-of-life/",
    },
    {
        id: "slide-11",
        src: "assets/projects/cubey/cubey.gif",
        alt: "Cubey",
        link: "https://razinreaz.github.io/cubey/",
    },
    {
        id: "slide-12",
        src: "assets/projects/tworch/gaussian%205layer-10nn.gif",
        alt: "Tworch",
        link: "https://github.com/RazinReaz/Tworch",
    },
    {
        id: "slide-13",
        src: "assets/projects/optimizers/all-demo-places.gif",
        alt: "Optimizer Visualization",
        link: "https://github.com/RazinReaz/Optimizers-Visualization",
    },
    {
        id: "slide-14",
        src: "assets/projects/em-visualized/6D_data_points-gmm-5.gif",
        alt: "EM Algorithm",
        link: "https://github.com/RazinReaz/machine-learning-sessional/tree/main/offline-4-pca",
    },
];

/* ============================================
   CONFIGURATION CONSTANTS
   ============================================ */
const AUTOPLAY_INTERVAL = 15000; // 15 seconds
const CRITICAL_SLIDES_COUNT = 3; // Number of slides to load immediately
const LAZY_LOAD_ROOT_MARGIN = '50px 0px'; // Start loading before element is visible

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

/**
 * Checks if a source URL is a video file
 * @param {string} src - Source URL
 * @returns {boolean}
 */
function isVideoSource(src) {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    return videoExtensions.some(ext => src.toLowerCase().endsWith(ext));
}

/* ============================================
   SLIDE CREATION
   ============================================ */

/**
 * Creates HTML markup for a single slide
 * @param {Object} slide - Slide data object
 * @returns {string} HTML string
 */
function createSlide(slide) {
    // Generate overlay text based on link type
    const overlayText = slide.overlay || (() => {
        const isSimulation = slide.link.includes("github.io");
        return `Click to ${isSimulation ? 'try' : 'view'} <br><b>${slide.alt}</b> ${isSimulation ? '' : 'Code'}`;
    })();
    
    // Create appropriate media element (video or image)
    const isVideo = isVideoSource(slide.src);
    const mediaElement = isVideo 
        ? `<video data-src="${slide.src}" loading="lazy" class="slide-image" muted loop playsinline></video>`
        : `<img data-src="${slide.src}" alt="${slide.alt}" loading="lazy" class="slide-image">`;
    
    return `
        <div id="${slide.id}" class="slide">
            <a href="${slide.link}" target="_blank" class="slide-image-wrapper">
                ${mediaElement}
                <div class="slide-overlay-text">${overlayText}</div>
            </a>
        </div>
    `;
}

/* ============================================
   LAZY LOADING
   ============================================ */

/**
 * Loads media element by moving src from data-src and updating classes
 * @param {HTMLElement} element - Image or video element
 */
function loadMedia(element) {
    if (!element.dataset.src) return;
    
    element.src = element.dataset.src;
    element.classList.remove('slide-image');
    element.classList.add('slide-image-loaded');
    
    // Auto-play videos when loaded
    if (element.tagName === 'VIDEO') {
        element.play().catch(err => {
            // Autoplay may be blocked by browser policy - this is expected
            console.log('Video autoplay prevented:', err);
        });
    }
}

/**
 * Sets up Intersection Observer for lazy loading media elements
 */
function setupLazyLoading() {
    const mediaObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadMedia(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: LAZY_LOAD_ROOT_MARGIN,
        threshold: 0.01
    });

    // Observe all unloaded media elements
    document.querySelectorAll('.slide-image').forEach(media => {
        mediaObserver.observe(media);
    });
}

/**
 * Loads critical slides immediately for better initial experience
 */
function loadCriticalMedia() {
    const criticalSlides = slidesData.slice(0, CRITICAL_SLIDES_COUNT);
    criticalSlides.forEach((slide, index) => {
        const media = document.querySelector(`#${slide.id} .slide-image`);
        if (media) {
            // Stagger loading to avoid blocking
            setTimeout(() => loadMedia(media), index * 100);
        }
    });
}

/* ============================================
   AUTOPLAY MANAGEMENT
   ============================================ */

/**
 * Manages autoplay functionality for the slider
 */
class AutoplayManager {
    constructor(slider) {
        this.slider = slider;
        this.interval = null;
    }

    start() {
        this.stop(); // Clear any existing interval
        
        this.interval = setInterval(() => {
            if (this.slider && !this.slider.matches(':hover')) {
                const slideWidth = this.slider.querySelector('.slide')?.offsetWidth || 300;
                const scrollAmount = slideWidth * 0.4; // Scroll by 40% of slide width
                
                this.slider.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth",
                });
            }
        }, AUTOPLAY_INTERVAL);
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}

/* ============================================
   INITIALIZATION
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    if (!slider) return;

    // Render all slides
    slider.innerHTML = slidesData.map(createSlide).join("");

    // Setup lazy loading
    setupLazyLoading();
    loadCriticalMedia();

    // Initialize autoplay
    const autoplay = new AutoplayManager(slider);
    autoplay.start();

    // Pause autoplay on hover
    slider.addEventListener("mouseenter", () => autoplay.stop());
    slider.addEventListener("mouseleave", () => autoplay.start());

    // Pause autoplay when tab is not visible
    document.addEventListener("visibilitychange", () => {
        document.hidden ? autoplay.stop() : autoplay.start();
    });

    // Initialize and maintain arrow states
    setTimeout(updateArrowStates, 1000);
    slider.addEventListener('scroll', updateArrowStates);
});

