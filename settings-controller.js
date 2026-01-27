/* SETTINGS CONTROLLER */

document.addEventListener("DOMContentLoaded", () => {
  const resetBtn = document.getElementById("resetDataBtn");

  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm("Reset all local data?")) {
        Storage.resetAll();
        alert("All data cleared.");
      }
    };
  }
});
