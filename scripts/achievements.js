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

function createAchievementCard(achievement) {
  return `
        <div class="card">
            <div class="card__image">
                <img data-src="${achievement.imageSrc}" alt="${achievement.imageAlt}" class="project-image" loading="lazy">
            </div>
            <div class="card__content">
                <h3 class="card__title">${achievement.title}</h3>
                <h4 class="card__subtitle">${achievement.place}</h4>
                <p class="card__text">${achievement.description}</p>
            </div>
        </div>
    `;
}

// Lazy loading implementation for achievement images
function setupAchievementLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('achievement-image-loaded');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '100px 0px',
        threshold: 0.01
    });

    // Observe all achievement images
    document.querySelectorAll('.project-image').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const achievementsContainer = document.getElementById("achievements-container");
    if (achievementsContainer) {
        achievementsContainer.innerHTML = achievements.map(createAchievementCard).join("");
        
        // Setup lazy loading
        setupAchievementLazyLoading();
    }
});
