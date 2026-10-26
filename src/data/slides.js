export const slidesData = [
  {
    id: "slide-01",
    src: "/assets/projects/pathtracer-gpu/pathtracer-vid.mp4",
    alt: "Real-time PBR Path tracer",
    link: "https://github.com/RazinReaz/path-tracer",
  },
  {
    id: "slide-02",
    src: "/assets/projects/black-hole/blackhole.mp4",
    alt: "Black Hole Simulation",
    link: "https://github.com/RazinReaz/black-hole",
  },
  {
    id: "slide-03",
    src: "/assets/projects/raytracing/5%20spheres.gif",
    alt: "Ray-tracing with Global Illumination",
    link: "https://github.com/RazinReaz/ray-tracing",
  },
  {
    id: "slide-04",
    src: "/assets/projects/softbody-pbd/final(self-coll-incomplete).gif",
    alt: "Softbody PBD",
    link: "https://razinreaz.github.io/softbody-pbd/",
  },
  {
    id: "slide-05",
    src: "/assets/projects/flocking-boids/flocking-boids.mp4",
    alt: "Flocking Simulation",
    link: "https://razinreaz.github.io/flocking-boids/",
  },
  {
    id: "slide-06",
    src: "/assets/projects/ragdoll/demo.gif",
    alt: "Ragdoll Physics",
    link: "https://razinreaz.github.io/Ragdoll-Simulation/",
  },
  {
    id: "slide-07",
    src: "/assets/projects/ray-casting/ray-casting.mp4",
    alt: "Simple Ray Casting",
    link: "https://razinreaz.github.io/raycasting/",
  },
  {
    id: "slide-08",
    src: "/assets/projects/steering-behaviours/path-30.gif",
    alt: "Steering Behaviours",
    link: "https://github.com/RazinReaz/Steering-behaviours",
  },
  {
    id: "slide-09",
    src: "/assets/projects/asteroids/game_level_1.gif",
    alt: "Asteroids Game",
    link: "https://razinreaz.github.io/GameJam-2023-Asteroids/",
  },
  {
    id: "slide-10",
    src: "/assets/projects/rope/rope%20gif%20square.gif",
    alt: "Rope Simulation",
    link: "https://razinreaz.github.io/rope-simulation/",
  },
  {
    id: "slide-11",
    src: "/assets/projects/game-of-life/2.gif",
    alt: "Game of Life",
    link: "https://razinreaz.github.io/game-of-life/",
  },
  {
    id: "slide-12",
    src: "/assets/projects/cubey/cubey.gif",
    alt: "Cubey",
    link: "https://razinreaz.github.io/cubey/",
  },
  {
    id: "slide-13",
    src: "/assets/projects/tworch/gaussian%205layer-10nn.gif",
    alt: "Tworch",
    link: "https://github.com/RazinReaz/Tworch",
  },
  {
    id: "slide-14",
    src: "/assets/projects/optimizers/all-demo-places.gif",
    alt: "Optimizer Visualization",
    link: "https://github.com/RazinReaz/Optimizers-Visualization",
  },
  {
    id: "slide-15",
    src: "/assets/projects/em-visualized/6D_data_points-gmm-5.gif",
    alt: "EM Algorithm",
    link: "https://github.com/RazinReaz/machine-learning-sessional/tree/main/offline-4-pca",
  },
];

export function isVideoSource(src) {
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"];
  return videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));
}

export function overlayTextFor(slide) {
  const isSimulation = slide.link.includes("github.io");
  return `Click to ${isSimulation ? "try" : "view"} <br><b>${slide.alt}</b> ${
    isSimulation ? "" : "Code"
  }`;
}
