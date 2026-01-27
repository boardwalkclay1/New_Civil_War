/* CATEGORIES LOADER */

document.addEventListener("DOMContentLoaded", () => {
  const categories = {
    "Information Flow": ["Signal Runner", "Verifier", "Coordinator"],
    "Supplies & Resource Management": ["Quartermaster", "Distributor", "Mapper"],
    "Logistics & Planning": ["Planner", "Analyst", "Navigator"],
    "Documentation & Storytelling": ["Chronicler", "Historian"],
    "Narrative & Media": ["Broadcaster", "Designer"],
    "Mutual Aid & Support": ["Helper", "Builder"]
  };

  const container = document.getElementById("categoryList");
  if (!container) return;

  Object.entries(categories).forEach(([cat, roles]) => {
    const div = document.createElement("div");
    div.className = "category-item";
    div.innerHTML = `
      <h3>${cat}</h3>
      <p>${roles.join(", ")}</p>
    `;
    container.appendChild(div);
  });
});
