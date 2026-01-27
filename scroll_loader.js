/* SCROLL / SPACE LOADER CONTROLLER */

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loading-screen");
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 2200);
});
