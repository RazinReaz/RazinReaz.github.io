const achievements = [
  {
    imageSrc: "./assets/achievements/Razin_Reaz_Abedin_BioMed_Datathon.png",
    imageAlt: "BioMed Datathon",
    title: "Biomed Datathon, mHealth Lab, BME, BUET",
    description:
      "Created a CNN based model capable of predicting existance of valvular heart diseases (multilabel multiclass classification problem) from heart sounds. The dataset used was the BMD-HS dataset. Secured the runner up position in the competition.",
  },
  {
    imageSrc: "./assets/achievements/Razin_Reaz_Abedin_GameJam.png",
    imageAlt: "GameJam 2023, IEEE CS BUET",
    title: "GameJam 2023, IEEE CS BUET",
    description:
      "Created a top down shooter game based on \'Asteroids\'. The game was developed using p5.js and <b>secured the 5th place prize in the competition</b> (Among 50 competitors in the first round, and 15 in the final round).",
  },
];

function createCard(achievement) {
  return `
        <div class="card">
            <div class="card-image">
                <img src="${achievement.imageSrc}" alt="${achievement.imageAlt}" class="project-image">
            </div>
            <div class="card-content">
                <h3>${achievement.title}</h3>
                <p>${achievement.description}</p>
            </div>
        </div>
    `;
}
console.log(achievements);

const projectsContainer = document.getElementById("achievements-container");
projectsContainer.innerHTML = achievements.map(createCard).join("");
