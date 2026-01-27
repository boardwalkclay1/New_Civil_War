/* ARITHMETIC TEST */

const arithmeticQuestions = [
  { q: "12 + 7", answer: 19 },
  { q: "9 × 6", answer: 54 },
  { q: "45 - 18", answer: 27 },
  { q: "8 × 8", answer: 64 },
  { q: "100 - 37", answer: 63 },
  { q: "6 + 14", answer: 20 },
  { q: "9 × 9", answer: 81 },
  { q: "50 - 22", answer: 28 },
  { q: "7 × 3", answer: 21 },
  { q: "15 + 12", answer: 27 },
  { q: "18 - 9", answer: 9 },
  { q: "6 × 4", answer: 24 },
  { q: "30 + 25", answer: 55 },
  { q: "90 - 45", answer: 45 },
  { q: "11 × 5", answer: 55 },
  { q: "14 + 6", answer: 20 },
  { q: "72 ÷ 8", answer: 9 },
  { q: "5 × 12", answer: 60 },
  { q: "100 ÷ 4", answer: 25 },
  { q: "3 × 15", answer: 45 }
];

const engine = new TestEngine(arithmeticQuestions, 20, "test_results.html");

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
