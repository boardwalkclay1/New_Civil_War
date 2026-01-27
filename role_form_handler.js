/* ROLE FORM HANDLER */

function getRoleFormData() {
  const form = document.getElementById("roleForm");
  const data = new FormData(form);

  const skills = data.getAll("skills");
  const interests = data.getAll("interests");

  return {
    skills,
    interests,
    exercise: data.get("exercise"),
    height: data.get("height"),
    weight: data.get("weight")
  };
}
