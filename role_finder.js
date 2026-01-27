/* ROLE FINDER CONTROLLER – ADVANCED */

document.getElementById("roleForm").addEventListener("submit", e => {
  e.preventDefault();

  const formData = getRoleFormData(); // includes skills, interests, fitness, scenarios, etc.
  const result = calculateRole(formData); // returns { roleNumber, category }

  const role = RoleDB[result.roleNumber];

  const fullProfile = {
    name: role.name,
    number: result.roleNumber,
    category: role.category,
    description: role.description,

    skills: formData.skills || [],
    interests: formData.interests || [],
    exercise: formData.exercise || "none",
    height: formData.height || null,
    weight: formData.weight || null,

    agent_door: formData.agent_door || null,
    agent_arrest: formData.agent_arrest || null,
    agent_approach: formData.agent_approach || null,
    crowd_force: formData.crowd_force || null,
    pressure_style: formData.pressure_style || null,
    contribution: formData.contribution || []
  };

  Storage.save("role", fullProfile);

  window.location.href = "role_result.html";
});
