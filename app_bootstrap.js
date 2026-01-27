/* GLOBAL APP BOOTSTRAP */
/* Runs on every page */

document.addEventListener("DOMContentLoaded", () => {
  // Apply saved theme
  const savedTheme = Storage.load("theme");
  if (savedTheme) {
    const link = document.getElementById("themeStylesheet");
    if (link) link.href = savedTheme;
  }

  // Log environment
  console.log("App initialized. Theme:", savedTheme || "default");
});
