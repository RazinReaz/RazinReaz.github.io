const projects = [
  {
    imageSrc: "./assets/projects/raytracing/5%20spheres.gif",
    imageAlt: "Ray tracing",
    title: "Ray tracing",
    tools: ["C++", "OpenGL"],
    description:
      "An offline ray tracer capable of diffuse lighting, global illumination using path tracing, and emissive objects. Developed using C++ and OpenGL.",
    links: [
      {
        href: "https://github.com/RazinReaz/ray-tracing",
        text: "Github",
      },
      {
        href: "https://youtube.com/shorts/ligIcI4hCak",
        text: "Video",
      },
    ],
  },
  // {
  //   imageSrc: "./assets/projects/raytracing/8%20spheres/output.gif",
  //   imageAlt: "Ray-Tracing",
  //   title: "Ray-Tracing",
  //   tools: ["C++", "OpenGL"],
  //   description:
  //     "An image generating computer graphics pipeline capable of creating ray-traced images of spheres, pyramids, and cubes with diffuse, specular, and reflective components. Developed using C++ and OpenGL.",
  //   links: [
  //     {
  //       href: "https://github.com/RazinReaz/RazinReazCSE410-Computer-Graphics/tree/master/offline-4-raytracing",
  //       text: "Code",
  //     },
  //   ],
  // },
  {
    imageSrc: "./assets/projects/flocking-boids/boids 1.gif",
    imageAlt: "Flocking simulation",
    title: "Flocking Boids",
    tools: ["JavaScript", "p5.js"],
    description:
      "Flocking simulation with Quad tree neighbour search. Developed using p5.js.",
    links: [
      {
        href: "https://razinreaz.github.io/flocking-boids/",
        text: "Try it Yourself!",
      },
      {
        href: "https://github.com/RazinReaz/flocking-boids",
        text: "Github",
      },
    ],
  },
  {
    imageSrc: "./assets/projects/ray-casting/demo.gif",
    imageAlt: "Simple Ray Casting",
    title: "Simple Ray Casting",
    tools: ["JavaScript", "p5.js"],
    description:
      "An interactive 3D world where you can traverse a customisable map. Developed using p5.js.",
    links: [
      {
        href: "https://razinreaz.github.io/raycasting/",
        text: "Try it Yourself!",
      },
      {
        href: "https://github.com/RazinReaz/raycasting",
        text: "Github",
      },
    ],
  },
  {
    imageSrc: "./assets/projects/ragdoll/demo.gif",
    imageAlt: "Ragdoll",
    title: "Ragdoll Simulation",
    tools: ["JavaScript", "p5.js"],
    description:
      "Ragdoll interacting with gravity and a ball. Developed using p5.js.",
    links: [
      {
        href: "https://razinreaz.github.io/Ragdoll-Simulation/",
        text: "Try it Yourself!",
      },
      {
        href: "https://github.com/RazinReaz/Ragdoll-Simulation/",
        text: "Github",
      },
    ],
  },
  {
    imageSrc: "./assets/projects/steering-behaviours/path.gif",
    imageAlt: "Steering behaviours",
    title: "Steering Behaviours",
    tools: ["JavaScript", "p5.js"],
    description:
      "A collection of steering behaviour simulations for autonomous agents. Behaviours include arrive, seek, flee, evade, wander, path following, and flocking. Read the README of the Github link for more visualizations and information. Developed using p5.js.",
    links: [
      {
        href: "https://github.com/RazinReaz/Steering-behaviours",
        text: "Github",
      },
    ],
  },
  {
    imageSrc: "./assets/projects/asteroids/game_level_1.gif",
    imageAlt: "Asteroids",
    title: "Asteroids",
    tools: ["JavaScript", "p5.js"],
    description:
      "Top down 2D shooter based on the Atari game Asteroids that was developed without a game engine. 5th place prize winner at IEEE CS BUET GameJam 2023. Developed using p5.js.",
    links: [
      {
        href: "https://razinreaz.github.io/GameJam-2023-Asteroids/",
        text: "Play the Game!",
      },
      {
        href: "https://github.com/RazinReaz/GameJam-2023-Asteroids",
        text: "Github",
      },
      {
        href: "https://www.youtube.com/watch?v=dac8ezI2uDI",
        text: "Video",
      },
    ],
  },
  {
    imageSrc: "./assets/projects/game-of-life/2.gif",
    imageAlt: "Game of Life",
    title: "Conway's Game of Life",
    description:
      "Cellular Automaton simulation of Conway's Game of Life. Developed using p5.js.",
    links: [
      {
        href: "https://razinreaz.github.io/game-of-life/",
        text: "Try it Yourself!",
      },
      {
        href: "https://github.com/RazinReaz/game-of-life",
        text: "Github",
      },
    ],
  },
  {
    imageSrc: "./assets/projects/tworch/gaussian 5layer-10nn.gif",
    imageAlt: "Model fitting a 2D dataset",
    title: "Tworch",
    tools: ["Python", "Numpy", "Matplotlib"],
    description:
      "A simple machine learning library made in Python. Supports Feed forward neural network, Initializers (Xavier, He, LeCun), Optimizers (Adam, Momentum, RMSProp), model saving and loading, and visualization of the model fitting a 2D dataset.",
    links: [
      { href: "https://github.com/RazinReaz/Tworch", text: "Github" },
      {
        href: "https://github.com/RazinReaz/Tworch/tree/main/unravelling-black-box",
        text: "Visualization",
      },
    ],
  },
  {
    imageSrc: "./assets/projects/optimizers/all-demo-places.gif",
    imageAlt: "optimizers visualization",
    title: "Optimizer Visualization",
    tools: ["Python", "Vpython"],
    description:
      "An interactive visualization for the behaviours of machine learning optimizers. The optimizers will find the local/global minima using their own algorithm on a 2-dimensional loss plane. Made with Vpython.",
    links: [
      {
        href: "https://github.com/RazinReaz/Optimizers-Visualization",
        text: "Github",
      },
      {
        href: "https://www.youtube.com/watch?v=wnicogJJn1g",
        text: "Video",
      },
    ],
  },
  {
    imageSrc: "./assets/projects/em-visualized/6D_data_points-gmm-5.gif",
    imageAlt: "Using EM algorithm to optimize GMM",
    title: "Expectation Maximization Algorithm",
    tools: ["python", "numpy"],
    description:
      "Using EM algorithm to determine likelihood of Gaussian Mixture Model Parameters after applying dimensionality reduction on the dataset.",
    links: [
      {
        href: "https://github.com/RazinReaz/machine-learning-sessional/tree/main/offline-4-pca",
        text: "Github",
      },
    ],
  },
  //   {
  //     imageSrc: "",
  //     imageAlt: "",
  //     title: "",
  //     description: "",
  //     links: [
  //       {
  //         href: "",
  //         text: "",
  //       },
  //     ],
  //   },
];

function createCard(project) {
  const linksHtml = project.links
    .map(
      (link) =>
        `<a href="${link.href}" target="_blank" class="card-button">${link.text}</a>`
    )
    .join("\n");
  return `
        <div class="card">
            <div class="card-image">
                <img src="${project.imageSrc}" alt="${project.imageAlt}" class="project-image">
            </div>
            <div class="card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${linksHtml}
            </div>
        </div>
    `;
}

const projectsContainer = document.getElementById("projects-container");
projectsContainer.innerHTML = projects.map(createCard).join("");
