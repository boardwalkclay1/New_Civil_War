/* LEGAL PAGE LOADER */

document.addEventListener("DOMContentLoaded", () => {
  const legalSections = [
    {
      title: "Purpose",
      text: "This app is for education, self-discovery, and civic understanding only."
    },
    {
      title: "Safety",
      text: "No real-world conflict, violence, or harmful actions are supported or encouraged."
    },
    {
      title: "Data",
      text: "All data is stored locally on your device. You control everything."
    }
  ];

  const container = document.getElementById("legalList");
  if (!container) return;

  legalSections.forEach(sec => {
    const div = document.createElement("div");
    div.className = "legal-item";
    div.innerHTML = `
      <h3>${sec.title}</h3>
      <p>${sec.text}</p>
    `;
    container.appendChild(div);
  });
});
