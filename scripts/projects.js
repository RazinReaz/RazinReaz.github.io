const projects = [
  {
    imageSrc: "./assets/projects/raytracing/8%20spheres/output.gif",
    imageAlt: "Ray-Tracing",
    title: "Ray-Tracing",
    tools: ["C++", "OpenGL"],
    description:
      "An image generating computer graphics pipeline capable of creating ray-traced images of spheres, pyramids, and cubes with diffuse, specular, and reflective components. Developed using C++ and OpenGL.",
    links: [
      {
        href: "https://github.com/RazinReaz/RazinReazCSE410-Computer-Graphics/tree/master/offline-4-raytracing",
        text: "Code",
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
    imageSrc: "./assets/projects/asteroids/game_level_1.gif",
    imageAlt: "Asteroids",
    title: "Asteroids",
    tools: ["JavaScript", "p5.js"],
    description:
      "Top down 2D shooter based on the Atari game Asteroids. 5th place prize winner at IEEE CS BUET GameJam 2023. Developed using p5.js.",
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
  //   {
  //     imageSrc: "./assets/projects/ray-casting/demo.gif",
  //     imageAlt: "Ray Casting",
  //     title: "Ray Casting",
  //     description:
  //       "An interactive 3D world where you can traverse a customisable map. Developed using p5.js.",
  //     links: [
  //       {
  //         href: " razinreaz.github.io/raycasting-3D/ ",
  //         text: "Try it Yourself!"
  //       },
  //       {
  //         href: "https://github.com/RazinReaz/raycasting-3D",
  //         text: "GitHub",
  //       },
  //      
  //     ],
  //   },
  {
    imageSrc: "./assets/projects/ragdoll/demo.gif",
    imageAlt: "Ragdoll",
    title: "Ragdoll Simulation",
    tools: ["JavaScript", "p5.js"],
    description: "Ragdoll interacting with gravity and a ball. Developed using p5.js.",
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
    const toolsHtml = project.tools.map((tool) => `<li>${tool}</li>`).join("");
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
