/* TEST RESULTS LOADER */

document.addEventListener("DOMContentLoaded", () => {
  const results = Storage.load("lastTestResults", null);
  if (!results) return;

  const score = Math.round((results.correct / results.total) * 100);

  document.getElementById("testScore").textContent = score + "%";

  const status = score >= 70 ? "Passed" : "Failed";
  document.getElementById("testStatus").textContent = status;

  // Determine badge name
  const badgeName = Storage.load("currentTestBadge", null);

  if (status === "Passed" && badgeName) {
    BadgeSystem.award(badgeName);
    document.getElementById("testBadge").textContent = badgeName;
  } else {
    document.getElementById("testBadge").textContent = "None";
  }
});
