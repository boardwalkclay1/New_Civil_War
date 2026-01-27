/* REVIEW PAGE LOADER */

document.addEventListener("DOMContentLoaded", () => {
  const results = Storage.load("lastTestResults", null);
  if (!results) return;

  const list = document.getElementById("reviewList");

  results.missed.forEach(item => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `
      <p><strong>Question:</strong> ${item.q}</p>
      <p><strong>Correct Answer:</strong> ${item.answer}</p>
    `;
    list.appendChild(div);
  });
});
