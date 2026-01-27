/* PROFILE LOADER */

function loadProfile() {
  const role = Storage.load("role", null);
  const best = Storage.load("bestMile", null);
  const history = Storage.load("runHistory", []);
  const badges = Storage.load("badges", []);

  if (role) {
    document.getElementById("profileRoleName").textContent = role.name;
    document.getElementById("profileRoleNumber").textContent = role.number;
    document.getElementById("profileRoleCategory").textContent = role.category;
  }

  document.getElementById("profileBestTime").textContent =
    best ? best + " sec" : "—";

  if (history.length > 0) {
    document.getElementById("profileLastRun").textContent =
      history[history.length - 1].time + " sec";
  }

  const badgeList = document.getElementById("badgeList");
  badges.forEach(b => {
    const div = document.createElement("div");
    div.className = "badge badge-earned";
    div.textContent = b;
    badgeList.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", loadProfile);
