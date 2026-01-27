/* HISTORY PAGE LOADER */

document.addEventListener("DOMContentLoaded", () => {
  const historyBlocks = [
    {
      title: "Signal & Communication Roles",
      text: "Signalers, telegraph operators, and couriers carried messages across dangerous terrain.",
      modern: "Signal Runner, Verifier, Coordinator"
    },
    {
      title: "Quartermasters & Supply Roles",
      text: "Quartermasters managed food, uniforms, tools, and transport.",
      modern: "Quartermaster, Distributor, Mapper"
    },
    {
      title: "Writers & Documenters",
      text: "Letters, diaries, and battlefield reports preserved the truth of events.",
      modern: "Chronicler, Historian"
    }
  ];

  const container = document.getElementById("historyContainer");
  if (!container) return;

  historyBlocks.forEach(block => {
    const div = document.createElement("div");
    div.className = "history-block";
    div.innerHTML = `
      <h2>${block.title}</h2>
      <p>${block.text}</p>
      <h3>Modern Interpretation</h3>
      <p>${block.modern}</p>
    `;
    container.appendChild(div);
  });
});
