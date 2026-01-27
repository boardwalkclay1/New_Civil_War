/* ROLE FINDER CONTROLLER – ADVANCED */
/* Collects full form data → calculateRole → save → redirect */

document.getElementById("roleForm").addEventListener("submit", e => {
  e.preventDefault();

  const formData = getRoleFormData();
  const result = calculateRole(formData);

  const role = RoleDB.find(r => r.number === result.roleNumber);

  if (!role) {
    alert("Something went wrong assigning your role. Please try again.");
    return;
  }

  Storage.save("role", {
    name: role.name,
    number: result.roleNumber,
    category: role.category,
    description: role.description,
    rawCategoryKey: result.category,
    formData
  });

  window.location.href = "role_result.html";
});

/* -----------------------------------------
   FORM DATA EXTRACTION
----------------------------------------- */

function getRoleFormData() {
  const form = document.getElementById("roleForm");

  const getCheckedValues = name =>
    Array.from(form.querySelectorAll(`input[name="${name}"]:checked`))
      .map(i => i.value);

  const getRadioValue = name => {
    const el = form.querySelector(`input[name="${name}"]:checked`);
    return el ? el.value : null;
  };

  return {
    skills: getCheckedValues("skills"),
    interests: getCheckedValues("interests"),
    exercise: getRadioValue("exercise"),

    agent_door: getRadioValue("agent_door"),
    agent_arrest: getRadioValue("agent_arrest"),
    agent_approach: getRadioValue("agent_approach"),
    crowd_force: getRadioValue("crowd_force"),

    pressure_style: getRadioValue("pressure_style"),
    contribution: getCheckedValues("contribution")
  };
}
