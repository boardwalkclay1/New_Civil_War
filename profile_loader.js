/* ADVANCED PROFILE LOADER */

function loadProfile() {
  const role = Storage.load("role", null);
  const best = Storage.load("bestMile", null);
  const history = Storage.load("runHistory", []);
  const badges = Storage.load("badges", []);
  const notes = Storage.load("profileNotes", "");

  /* ---------------------------
     ROLE SUMMARY
  ----------------------------*/
  if (role) {
    document.getElementById("profileRoleName").textContent = role.name || "—";
    document.getElementById("profileRoleNumber").textContent = role.number || "—";
    document.getElementById("profileRoleCategory").textContent = role.category || "—";
    document.getElementById("profileRoleDescription").textContent = role.description || "—";
  }

  /* ---------------------------
     SKILLS & INTERESTS
  ----------------------------*/
  const skillsList = document.getElementById("profileSkills");
  const interestsList = document.getElementById("profileInterests");

  if (role?.skills) {
    role.skills.forEach(s => {
      const li = document.createElement("li");
      li.className = "pill";
      li.textContent = s;
      skillsList.appendChild(li);
    });
  }

  if (role?.interests) {
    role.interests.forEach(i => {
      const li = document.createElement("li");
      li.className = "pill";
      li.textContent = i;
      interestsList.appendChild(li);
    });
  }

  /* ---------------------------
     USER NOTES (editable)
  ----------------------------*/
  const notesBox = document.getElementById("profileCustomNotes");
  notesBox.value = notes;

  document.getElementById("saveProfileNotesBtn").onclick = () => {
    Storage.save("profileNotes", notesBox.value.trim());
    alert("Notes saved.");
  };

  /* ---------------------------
     SITUATIONAL RESPONSES
  ----------------------------*/
  document.getElementById("profileAgentDoor").textContent =
    role?.agent_door || "—";

  document.getElementById("profileAgentArrest").textContent =
    role?.agent_arrest || "—";

  document.getElementById("profileAgentApproach").textContent =
    role?.agent_approach || "—";

  document.getElementById("profileCrowdForce").textContent =
    role?.crowd_force || "—";

  document.getElementById("profilePressureStyle").textContent =
    role?.pressure_style || "—";

  /* Contribution preferences */
  const contribList = document.getElementById("profileContribution");
  if (role?.contribution) {
    role.contribution.forEach(c => {
      const li = document.createElement("li");
      li.className = "pill";
      li.textContent = c;
      contribList.appendChild(li);
    });
  }

  /* ---------------------------
     RUN STATS
  ----------------------------*/
  document.getElementById("profileBestTime").textContent =
    best ? best + " sec" : "—";

  if (history.length > 0) {
    const last = history[history.length - 1];
    document.getElementById("profileLastRun").textContent = last.time + " sec";
  }

  /* ---------------------------
     BADGES
  ----------------------------*/
  const badgeList = document.getElementById("badgeList");
  badges.forEach(b => {
    const div = document.createElement("div");
    div.className = "badge badge-earned";
    div.textContent = b;
    badgeList.appendChild(div);
  });

  /* ---------------------------
     ROLE TIPS (auto-generated)
  ----------------------------*/
  const tips = generateRoleTips(role);
  const tipsList = document.getElementById("roleTipsList");

  tips.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    tipsList.appendChild(li);
  });
}

/* ----------------------------------------
   ROLE TIP ENGINE (simple but expandable)
-----------------------------------------*/
function generateRoleTips(role) {
  if (!role) return ["No role data found."];

  const tips = [];

  // Category-based guidance
  switch (role.category) {
    case "Information Flow":
      tips.push("Stay calm and communicate clearly when others are overwhelmed.");
      tips.push("Focus on accuracy and avoid spreading unverified information.");
      break;

    case "Supplies & Resource Management":
      tips.push("Track resources carefully and keep simple logs.");
      tips.push("Help others understand where supplies are and how to access them.");
      break;

    case "Logistics & Planning":
      tips.push("Break big problems into smaller steps for your group.");
      tips.push("Use maps, timing, and structure to keep things moving smoothly.");
      break;

    case "Documentation & Storytelling":
      tips.push("Record events clearly and neutrally when possible.");
      tips.push("Help preserve important details others may overlook.");
      break;

    case "Narrative & Media":
      tips.push("Use visuals and stories to help people understand complex events.");
      tips.push("Stay ethical and avoid exaggeration or distortion.");
      break;

    case "Mutual Aid & Support":
      tips.push("Focus on supporting people directly and calmly.");
      tips.push("Stay aware of emotional needs and group morale.");
      break;
  }

  // Pressure style
  if (role.pressure_style === "calm_planner")
    tips.push("Your calm planning is a stabilizing force—lean into it.");

  if (role.pressure_style === "protector")
    tips.push("Your instinct to protect others is valuable—just stay aware of your limits.");

  if (role.pressure_style === "messenger")
    tips.push("You excel at relaying information—be the signal others rely on.");

  if (role.pressure_style === "witness")
    tips.push("Your observational clarity helps keep situations accountable.");

  if (role.pressure_style === "withdraw")
    tips.push("Your reflective nature helps you see patterns others miss.");

  return tips;
}

document.addEventListener("DOMContentLoaded", loadProfile);
