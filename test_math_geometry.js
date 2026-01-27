/* GEOMETRY TEST */

const geometryQuestions = [
  { q: "Area of a 5×4 rectangle", answer: 20 },
  { q: "Perimeter of a 6×3 rectangle", answer: 18 },
  { q: "Area of a triangle (base 10, height 4)", answer: 20 },
  { q: "Circumference of circle (r=7, π=3.14)", answer: 43.96 },
  { q: "Area of circle (r=3, π=3.14)", answer: 28.26 },
  { q: "Sum of angles in a triangle", answer: 180 },
  { q: "Right angle measure", answer: 90 },
  { q: "Area of square (side 9)", answer: 81 },
  { q: "Perimeter of square (side 8)", answer: 32 },
  { q: "Volume of cube (side 3)", answer: 27 },
  { q: "Area of 10×10 square", answer: 100 },
  { q: "Perimeter of 10×10 square", answer: 40 },
  { q: "Area of triangle (b=6, h=8)", answer: 24 },
  { q: "Angle in straight line", answer: 180 },
  { q: "Area of circle (r=5)", answer: 78.5 },
  { q: "Volume of cube (side 4)", answer: 64 },
  { q: "Perimeter of 12×4 rectangle", answer: 32 },
  { q: "Area of 12×4 rectangle", answer: 48 },
  { q: "Area of triangle (b=12, h=6)", answer: 36 },
  { q: "Circumference (r=10)", answer: 62.8 }
];

const engine = new TestEngine(geometryQuestions, 20, "test_results.html");

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
