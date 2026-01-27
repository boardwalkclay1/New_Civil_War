/* COMBINED SCIENCE TEST */

const combinedQuestions = [
  { q: "Water boils into a ___", answer: "gas" },
  { q: "Metal used in electronics", answer: "copper" },
  { q: "Ice melts into ___", answer: "liquid" },
  { q: "Element symbol O", answer: "oxygen" },
  { q: "Steam is a ___", answer: "gas" },
  { q: "Element in balloons", answer: "helium" },
  { q: "Freezing makes a ___", answer: "solid" },
  { q: "Element symbol H", answer: "hydrogen" },
  { q: "Plasma has very high ___", answer: "energy" },
  { q: "Salt contains ___", answer: "sodium" },
  { q: "Condensation forms ___", answer: "liquid" },
  { q: "Element symbol Fe", answer: "iron" },
  { q: "Dry ice turns into ___", answer: "gas" },
  { q: "Element in bones", answer: "calcium" },
  { q: "Fire is closest to ___", answer: "plasma" },
  { q: "Element symbol C", answer: "carbon" },
  { q: "Snow is frozen ___", answer: "water" },
  { q: "Metal used in cans", answer: "aluminum" },
  { q: "Liquids take shape of ___", answer: "container" },
  { q: "Element used in chips", answer: "silicon" }
];

const engine = new TestEngine(combinedQuestions, 20, "test_results.html");

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
    `Question ${engine.index + 1} of 20`;
}

updateQuestion();
