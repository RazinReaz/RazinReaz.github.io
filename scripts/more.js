const hobbies = [
    {
      link: "https://itch.io/jam/buet-cse-fest-2023-game-jam/results",
      img: "./assets/more/gamejam1.jpg",
      alt: "Game Jam BUET CSE Fest 2023",
      text: "I co-led the Inter University Game Jam event of BUET CSE Fest 2023!"
    },
    {
      link: "https://www.youtube.com/watch?v=Os5yeavDblk&t=555",
      img: "./assets/more/localoca.JPG",
      alt: "Flash Mob 2023",
      text: "Danced with tons of enthusiastic people to Loca Loca!"
    },
    {
      link: "https://www.instagram.com/olokkho/",
      img: "./assets/more/olokkho2.jpg",
      alt: "instagram",
      text: "I like to take photographs. Here is my instagram!"
    },
    {
      link: "https://www.youtube.com/watch?v=WaajOqOC4PA",
      img: "https://img.youtube.com/vi/WaajOqOC4PA/hqdefault.jpg",
      alt: "",
      text: "I was part of a Rock Band called Return Zero!"
    },
    {
      link: "https://youtu.be/3Y7SQm_T_yk?si=irw04tRECtbqA6im",
      img: "https://img.youtube.com/vi/3Y7SQm_T_yk/hqdefault.jpg",
      alt: "The Zombies",
      text: 'Our class was named "The Zombies" After this dance performance of Thriller and Everybody!'
    },
    {
      link: "https://www.facebook.com/reel/838644994515069",
      img: "assets/more/mohanogori.jpg",
      alt: "Priyo Mohanogori",
      text: "A trailer that I am especially proud of making. An event I am especially proud of being a part of."
    },
    {
      link: "https://www.youtube.com/watch?v=0ENVNEGGTyY",
      img: "https://img.youtube.com/vi/0ENVNEGGTyY/hqdefault.jpg",
      alt: "Hymn for the Weekend Instrumental",
      text: "You can't see me but I am playing the Keyboard here with these amazing bunch of musicians!"
    },
    {
      link: "https://www.youtube.com/watch?v=JSP3lsmvgtE",
      img: "https://img.youtube.com/vi/JSP3lsmvgtE/hqdefault.jpg",
      alt: "Priyo Prangon",
      text: "I co-composed, sang, and edited this stop motion music video commemorating my college days."
    }
  ];
  
function renderHobbies() {
    const container = document.getElementById("hobbies-container");
    if (!container) return;
    container.innerHTML = hobbies.map(hobby => `
      <div class="link-card">
        <div class="video-container">
          <a href="${hobby.link}" target="_blank">
            <img src="${hobby.img}" alt="${hobby.alt}" class="thumbnail" loading="lazy"/>
          </a>
        </div>
        <p><br />${hobby.text}</p>
      </div>
    `).join('');
  }
  
document.addEventListener("DOMContentLoaded", renderHobbies);