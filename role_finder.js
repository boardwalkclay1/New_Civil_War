/* ROLE FINDER CONTROLLER */

document.getElementById("roleForm").addEventListener("submit", e => {
  e.preventDefault();

  const formData = getRoleFormData();
  const result = calculateRole(formData);

  const role = RoleDB[result.roleNumber];

  Storage.save("role", {
    name: role.name,
    number: result.roleNumber,
    category: role.category,
    description: role.description
  });

  window.location.href = "role_result.html";
});
