/* INDEX PAGE INITIALIZER */

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = Storage.load("theme");
  if (savedTheme) {
    document.getElementById("themeStylesheet").href = savedTheme;
  }

  // Hide loader after animation
  const loader = document.getElementById("loading-screen");
  const app = document.getElementById("app-content");

  setTimeout(() => {
    if (loader) loader.classList.add("fade-out");
    if (app) app.style.display = "block";
  }, 2000);
});
