/* THEME MANAGER */

const themeButtons = document.querySelectorAll("[data-theme]");
const themeLink = document.getElementById("themeStylesheet");

function applyTheme(themeFile) {
  themeLink.href = themeFile;
  Storage.save("theme", themeFile);
}

themeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    applyTheme(btn.dataset.theme);
  });
});

// Load saved theme
const savedTheme = Storage.load("theme");
if (savedTheme) applyTheme(savedTheme);
