/* CREDITS LOADER */

document.addEventListener("DOMContentLoaded", () => {
  const credits = [
    { title: "Concept & Design", name: "Clayvonte" },
    { title: "Development", name: "Modular, offline-first architecture" },
    { title: "Historical Research", name: "Public domain Civil War archives" }
  ];

  const container = document.getElementById("creditsList");
  if (!container) return;

  credits.forEach(c => {
    const div = document.createElement("div");
    div.className = "credit-item";
    div.innerHTML = `
      <h3>${c.title}</h3>
      <p>${c.name}</p>
    `;
    container.appendChild(div);
  });
});
