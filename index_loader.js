/* INDEX PAGE INITIALIZER */
/* Matches updated index.html with PWA + theme + loader */

document.addEventListener("DOMContentLoaded", () => {

  // Apply saved theme immediately
  const savedTheme = Storage.load("theme");
  if (savedTheme) {
    const themeLink = document.getElementById("themeStylesheet");
    if (themeLink) themeLink.href = savedTheme;
  }

  // Loader + app container
  const loader = document.getElementById("loading-screen");
  const app = document.getElementById("app-content");

  // Wait for scroll animation (handled in scroll_loader.js)
  // Then fade out and reveal app
  setTimeout(() => {
    if (loader) loader.classList.add("fade-out");
    if (app) app.style.display = "block";
  }, 2200); // matches scroll animation timing

});
