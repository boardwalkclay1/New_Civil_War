/* ROLE LIST LOADER */
/* Injects all 15 roles into the All Roles page */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("roleList");
  if (!container) return;

  RoleDB.forEach(role => {
    const card = document.createElement("div");
    card.className = "role-card";

    const title = document.createElement("h2");
    title.textContent = `#${role.number} ${role.name}`;
    card.appendChild(title);

    const cat = document.createElement("p");
    cat.innerHTML = `<strong>Category:</strong> ${role.category}`;
    card.appendChild(cat);

    const desc = document.createElement("p");
    desc.textContent = role.description;
    card.appendChild(desc);

    container.insertBefore(card, container.lastElementChild);
  });
});
