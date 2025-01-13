// document.addEventListener("DOMContentLoaded", function () {
//   const sidebarContainer = document.getElementById("sidebar-container");
//   const sidebarKey = "sidebar-content";

//   // Check if sidebar content is in local storage
//   const cachedSidebar = localStorage.getItem(sidebarKey);
//   if (cachedSidebar) {
//     sidebarContainer.innerHTML = cachedSidebar;
//   } else {
//     // Fetch sidebar content and cache it
//     fetch("sidebar.html")
//       .then((response) => response.text())
//       .then((data) => {
//         sidebarContainer.innerHTML = data;
//         localStorage.setItem(sidebarKey, data);
//       })
//       .catch((error) => {
//         console.error("Error loading sidebar:", error);
//         sidebarContainer.innerHTML = "Error loading sidebar.";
//       });
//   }
// });
