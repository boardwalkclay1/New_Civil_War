/* STATES OF MATTER TEST */

const stateQuestions = [
  { q: "Ice is a ___", answer: "solid" },
  { q: "Steam is a ___", answer: "gas" },
  { q: "Water is a ___", answer: "liquid" },
  { q: "Fire is closest to ___", answer: "plasma" },
  { q: "Melting turns solid → ___", answer: "liquid" },
  { q: "Boiling turns liquid → ___", answer: "gas" },
  { q: "Freezing turns liquid → ___", answer: "solid" },
  { q: "Condensation turns gas → ___", answer: "liquid" },
  { q: "Plasma has extremely high ___", answer: "energy" },
  { q: "Dry ice sublimates into ___", answer: "gas" },
  { q: "Clouds are tiny ___ droplets", answer: "liquid" },
  { q: "Snow is frozen ___", answer: "water" },
  { q: "Steam contains ___ energy", answer: "high" },
  { q: "Solids have ___ shape", answer: "fixed" },
  { q: "Liquids take the shape of their ___", answer: "container" }
];

const engine = new TestEngine(stateQuestions, 15, "test_results.html");

document.getElementById("submitAnswerBtn").onclick = () => {
  const ans = document.getElementById("answerInput").value;
  engine.submit(ans);
  updateQuestion();
};

function updateQuestion() {
  const q = engine.current();
  if (!q) return;
  document.getElementById("questionText").textContent = q.q;
  document.getElementById("progressText").textContent =
    `Question ${engine.index + 1} of 15`;
}

updateQuestion();
