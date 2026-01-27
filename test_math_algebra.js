/* ALGEBRA TEST */

const algebraQuestions = [
  { q: "Solve: x + 5 = 12", answer: 7 },
  { q: "Solve: 3x = 21", answer: 7 },
  { q: "Solve: x - 9 = 4", answer: 13 },
  { q: "Solve: 2x = 18", answer: 9 },
  { q: "Solve: x/3 = 5", answer: 15 },
  { q: "Solve: x + 12 = 20", answer: 8 },
  { q: "Solve: 4x = 28", answer: 7 },
  { q: "Solve: x - 3 = 11", answer: 14 },
  { q: "Solve: 5x = 45", answer: 9 },
  { q: "Solve: x + 9 = 15", answer: 6 },
  { q: "Solve: 7x = 49", answer: 7 },
  { q: "Solve: x - 6 = 2", answer: 8 },
  { q: "Solve: 9x = 81", answer: 9 },
  { q: "Solve: x/2 = 10", answer: 20 },
  { q: "Solve: x + 4 = 19", answer: 15 },
  { q: "Solve: 6x = 36", answer: 6 },
  { q: "Solve: x - 8 = 1", answer: 9 },
  { q: "Solve: 10x = 100", answer: 10 },
  { q: "Solve: x + 3 = 14", answer: 11 },
  { q: "Solve: 8x = 64", answer: 8 }
];

const engine = new TestEngine(algebraQuestions, 20, "test_results.html");

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
