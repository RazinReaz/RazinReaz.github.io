

function toggleMenu() {
  const navList = document.querySelector(".nav-list");
  const menuIcon = document.querySelector(".menu-icon");

  navList.classList.toggle("show");
  menuIcon.classList.toggle("active"); // Add this line
}
