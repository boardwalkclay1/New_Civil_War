/* subcategory_loader.js */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const roleNum = parseInt(params.get("role"));
  const subCode = params.get("sub");

  if (!roleNum || !subCode) {
    document.getElementById("subcatTitle").textContent = "Invalid Subcategory";
    return;
  }

  const role = RoleDB.find(r => r.number === roleNum);
  if (!role) return;

  const sub = role.subcategories.find(s => s.code === subCode);
  if (!sub) return;

  document.getElementById("subcatTitle").textContent =
    `#${role.number}${sub.code} — ${role.name} (${sub.name})`;

  document.getElementById("subcatSubtitle").textContent =
    `${role.category} → ${sub.name}`;

  document.getElementById("subcatDescription").textContent =
    sub.description || "No description available.";

  const skillsList = document.getElementById("subcatSkills");
  sub.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  document.getElementById("subcatImpact").textContent =
    sub.impact || "Impact description coming soon.";

  const trainingList = document.getElementById("subcatTraining");
  (sub.training || []).forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    trainingList.appendChild(li);
  });
});
