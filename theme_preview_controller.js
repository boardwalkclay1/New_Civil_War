/* THEME PREVIEW CONTROLLER */

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-theme]");

  buttons.forEach(btn => {
    btn.onclick = () => {
      const theme = btn.dataset.theme;
      Storage.save("theme", theme);
      document.getElementById("themeStylesheet").href = theme;
      alert("Theme applied.");
    };
  });
});
