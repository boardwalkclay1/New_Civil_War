/* ELEMENTS TEST */

const elementQuestions = [
  { q: "Metal used in wires", answer: "copper" },
  { q: "Element we breathe", answer: "oxygen" },
  { q: "Element in pencils", answer: "carbon" },
  { q: "Metal used in cans", answer: "aluminum" },
  { q: "Element in table salt", answer: "sodium" },
  { q: "Element symbol Fe", answer: "iron" },
  { q: "Element symbol Au", answer: "gold" },
  { q: "Element symbol Ag", answer: "silver" },
  { q: "Element used in chips", answer: "silicon" },
  { q: "Element in water", answer: "hydrogen" },
  { q: "Element in bones", answer: "calcium" },
  { q: "Element in balloons", answer: "helium" },
  { q: "Element in rust", answer: "iron" },
  { q: "Element in batteries", answer: "lithium" },
  { q: "Element symbol C", answer: "carbon" }
];

const engine = new TestEngine(elementQuestions, 15, "test_results.html");

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
