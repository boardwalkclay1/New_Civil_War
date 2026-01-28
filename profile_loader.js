document.addEventListener("DOMContentLoaded", () => {
  loadProfile();
  wireThemeButtons();
  wireNotesSave();
});

/* LOAD PROFILE DATA */
function loadProfile() {
  const role = Storage.load("role", null);
  const best = Storage.load("bestMile", null);
  const history = Storage.load("runHistory", []);
  const badges = Storage.load("badges", []);
  const notes = Storage.load("customNotes", "");

  // ROLE
  if (role) {
    document.getElementById("profileRoleName").textContent = role.name;
    document.getElementById("profileRoleNumber").textContent = role.number;
    document.getElementById("profileRoleCategory").textContent = role.category;
    document.getElementById("profileRoleDescription").textContent = role.description;
  }

  // SKILLS
  const skillsList = document.getElementById("profileSkills");
  (role?.skills || []).forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    skillsList.appendChild(li);
  });

  // INTERESTS
  const interestsList = document.getElementById("profileInterests");
  (role?.interests || []).forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    interestsList.appendChild(li);
  });

  // NOTES
  document.getElementById("profileCustomNotes").value = notes;

  // RUN STATS
  document.getElementById("profileBestTime").textContent = best ? best + " sec" : "—";
  document.getElementById("profileLastRun").textContent =
    history.length > 0 ? history[history.length - 1].time + " sec" : "—";

  // BADGES
  const badgeList = document.getElementById("badgeList");
  badges.forEach(b => {
    const div = document.createElement("div");
    div.className = "badge badge-earned";
    div.textContent = b;
    badgeList.appendChild(div);
  });
}

/* SAVE NOTES */
function wireNotesSave() {
  const btn = document.getElementById("saveProfileNotesBtn");
  btn.addEventListener("click", () => {
    const notes = document.getElementById("profileCustomNotes").value.trim();
    Storage.save("customNotes", notes);
    btn.textContent = "Saved!";
    setTimeout(() => (btn.textContent = "Save Notes"), 1200);
  });
}

/* THEME SWITCHING */
function wireThemeButtons() {
  const buttons = document.querySelectorAll("[data-theme]");
  const themeLink = document.getElementById("themeStylesheet");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme");
      themeLink.href = theme;
      Storage.save("theme", theme);
    });
  });

  // Load saved theme
  const savedTheme = Storage.load("theme", null);
  if (savedTheme) themeLink.href = savedTheme;
}
