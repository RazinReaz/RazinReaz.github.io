const achievements = [
  {
    imageSrc: "./assets/achievements/Razin_Reaz_Abedin_BioMed_Datathon.png",
    imageAlt: "BioMed Datathon",
    title: "Biomed Datathon, mHealth Lab, BME, BUET",
    place: "2nd place",
    description:
      "Created a CNN based model capable of predicting existance of valvular heart diseases (multilabel multiclass classification problem) from heart sounds. The dataset used was the BMD-HS dataset. Secured the runner up position in the competition.",
  },
  {
    imageSrc: "./assets/achievements/Razin_Reaz_Abedin_GameJam.png",
    imageAlt: "GameJam 2023, IEEE CS BUET",
    title: "GameJam 2023, IEEE CS BUET",
    place: "5th Place",
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
                <h4>${achievement.place}</h4>
                <p>${achievement.description}</p>
            </div>
        </div>
    `;
}

const achievementsContainer = document.getElementById("achievements-container");
achievementsContainer.innerHTML = achievements.map(createCard).join("");
