/* GLOSSARY LOADER */

document.addEventListener("DOMContentLoaded", () => {
  const glossary = {
    "Role Number": "A unique identifier assigned to each civic role.",
    "Category": "One of six major civic domains.",
    "Badge": "A distinction earned by passing a test.",
    "Run Tracker": "Records your 1‑mile time and progress."
  };

  const container = document.getElementById("glossaryList");
  if (!container) return;

  Object.entries(glossary).forEach(([term, definition]) => {
    const div = document.createElement("div");
    div.className = "glossary-item";
    div.innerHTML = `<h3>${term}</h3><p>${definition}</p>`;
    container.appendChild(div);
  });
});
