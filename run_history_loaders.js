/* RUN HISTORY LOADER */

document.addEventListener("DOMContentLoaded", () => {
  const history = Storage.load("runHistory", []);
  const list = document.getElementById("runHistoryList");

  history.forEach(run => {
    const div = document.createElement("div");
    div.className = "run-entry";
    div.innerHTML = `
      <p><strong>Time:</strong> ${run.time} sec</p>
      <p><strong>Date:</strong> ${new Date(run.date).toLocaleString()}</p>
    `;
    list.appendChild(div);
  });
});
