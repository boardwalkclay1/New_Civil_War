/* reading_test.js */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("readingForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    let score = 0;

    if (data.get("q1") === "b") score++;
    if (data.get("q2") === "b") score++;

    saveReadingScore(score);

    window.location.href = "reading_test_review.html?score=" + score;
  });
});

function saveReadingScore(score) {
  const state = AssessmentState.load();

  state.reading.attempts++;
  state.reading.bestScore = Math.max(state.reading.bestScore || 0, score);
  state.attempts++;

  AssessmentState.save(state);
}
