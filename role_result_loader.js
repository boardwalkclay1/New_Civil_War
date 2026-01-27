/* ROLE RESULT LOADER */

document.addEventListener("DOMContentLoaded", () => {
  const role = Storage.load("role", null);

  if (!role) return;

  document.getElementById("roleName").textContent = role.name;
  document.getElementById("roleNumber").textContent = "#" + role.number;
  document.getElementById("roleCategory").textContent = role.category;
  document.getElementById("roleDescription").textContent = role.description;
});
