/* role_finder_logic.js */
/* Hardened logic for the Find Your Role page */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("roleFinderForm");
  if (!form) return;

  safeInitAssessmentState();
  initRoleFinderState();
  updateModuleStatus();
  wireAnswerTracking(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const state = safeLoadState();

    // Mark page 4 as complete when they submit
    state.roleFinder.page4 = true;
    state.roleFinder.attempts = (state.roleFinder.attempts || 0) + 1;
    state.attempts = (state.attempts || 0) + 1;
    safeSaveState(state);

    // Check modules + pages
    if (!modulesComplete() || !pagesComplete()) {
      alert("You must complete all 4 pages and all required tests (Math, Science, Reading) before your role can be calculated.");
      updateModuleStatus();
      return;
    }

    // Gather all answers
    const answers = collectAnswers(form);

    // Update lie flags based on consistency
    applyLieDetection(answers);

    // Re‑load state after lie detection
    const updatedState = safeLoadState();

    // Calculate role (placeholder engine for now)
    const roleResult = calculateAdvancedRole(answers, updatedState);

    // Save role assignment into AssessmentState
    updatedState.roleFinder.lastResult = roleResult;
    updatedState.roleAssignment = roleResult;
    safeSaveState(updatedState);

    // Also mirror into localStorage for other pages if needed
    try {
      localStorage.setItem("roleAssignment", JSON.stringify(roleResult));
    } catch (e) {}

    // Reveal result section
    showRoleResult(roleResult);
  });
});

/* -----------------------------------------
   SAFE WRAPPERS AROUND AssessmentState
----------------------------------------- */
function safeLoadState() {
  if (typeof AssessmentState !== "undefined" && AssessmentState.load) {
    return AssessmentState.load();
  }
  // Fallback: localStorage
  try {
    const raw = localStorage.getItem("assessmentState");
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function safeSaveState(state) {
  if (typeof AssessmentState !== "undefined" && AssessmentState.save) {
    AssessmentState.save(state);
    return;
  }
  // Fallback: localStorage
  try {
    localStorage.setItem("assessmentState", JSON.stringify(state));
  } catch (e) {}
}

function safeInitAssessmentState() {
  const s = safeLoadState();
  if (!s.math) s.math = { attempts: 0, bestScore: null };
  if (!s.science) s.science = { attempts: 0, bestScore: null };
  if (!s.reading) s.reading = { attempts: 0, bestScore: null };
  if (!s.typing) s.typing = { attempts: 0, bestScore: null };
  if (!s.roleFinder) s.roleFinder = {};
  if (typeof s.attempts !== "number") s.attempts = 0;
  if (typeof s.lieFlags !== "number") s.lieFlags = 0;
  if (typeof s.answerChangeFlags !== "number") s.answerChangeFlags = 0;
  safeSaveState(s);
}

/* -----------------------------------------
   INITIALIZE ROLE FINDER STATE
----------------------------------------- */
function initRoleFinderState() {
  const state = safeLoadState();
  if (!state.roleFinder) {
    state.roleFinder = {
      attempts: 0,
      page1: false,
      page2: false,
      page3: false,
      page4: false,
      lastResult: null
    };
  } else {
    state.roleFinder.attempts = state.roleFinder.attempts || 0;
    state.roleFinder.page1 = !!state.roleFinder.page1;
    state.roleFinder.page2 = !!state.roleFinder.page2;
    state.roleFinder.page3 = !!state.roleFinder.page3;
    state.roleFinder.page4 = !!state.roleFinder.page4;
    state.roleFinder.lastResult = state.roleFinder.lastResult || null;
  }

  safeSaveState(state);
}

/* -----------------------------------------
   MODULE COMPLETION CHECK
----------------------------------------- */
function modulesComplete() {
  const s = safeLoadState();
  return (
    s.math && s.math.bestScore !== null &&
    s.science && s.science.bestScore !== null &&
    s.reading && s.reading.bestScore !== null
  );
}

/* -----------------------------------------
   PAGE COMPLETION CHECK
----------------------------------------- */
function pagesComplete() {
  const s = safeLoadState();
  const rf = s.roleFinder || {};
  return !!(rf.page1 && rf.page2 && rf.page3 && rf.page4);
}

/* -----------------------------------------
   UPDATE MODULE + PAGE STATUS TEXT
----------------------------------------- */
function updateModuleStatus() {
  const el = document.getElementById("moduleStatus");
  if (!el) return;

  const s = safeLoadState();
  const rf = s.roleFinder || {};

  const mathDone = s.math && s.math.bestScore !== null ? "✔" : " ";
  const sciDone = s.science && s.science.bestScore !== null ? "✔" : " ";
  const readDone = s.reading && s.reading.bestScore !== null ? "✔" : " ";

  const p1 = rf.page1 ? "✔" : " ";
  const p2 = rf.page2 ? "✔" : " ";
  const p3 = rf.page3 ? "✔" : " ";
  const p4 = rf.page4 ? "✔" : " ";

  el.textContent =
    `Modules completed: Math [${mathDone}], Science [${sciDone}], Reading [${readDone}] • ` +
    `Pages: 1 [${p1}], 2 [${p2}], 3 [${p3}], 4 [${p4}]`;
}

/* -----------------------------------------
   ANSWER TRACKING (for page flags + change flags)
----------------------------------------- */
let previousAnswers = {};

function wireAnswerTracking(form) {
  const next1 = document.getElementById("nextStep1");
  const next2 = document.getElementById("nextStep2");
  const next3 = document.getElementById("nextStep3");

  if (next1) {
    next1.addEventListener("click", () => {
      const s = safeLoadState();
      if (!s.roleFinder) s.roleFinder = {};
      s.roleFinder.page1 = true;
      safeSaveState(s);
      updateModuleStatus();
    });
  }
  if (next2) {
    next2.addEventListener("click", () => {
      const s = safeLoadState();
      if (!s.roleFinder) s.roleFinder = {};
      s.roleFinder.page2 = true;
      safeSaveState(s);
      updateModuleStatus();
    });
  }
  if (next3) {
    next3.addEventListener("click", () => {
      const s = safeLoadState();
      if (!s.roleFinder) s.roleFinder = {};
      s.roleFinder.page3 = true;
      safeSaveState(s);
      updateModuleStatus();
    });
  }

  // Track answer changes for key fields
  form.addEventListener("change", (e) => {
    const target = e.target;
    if (!target.name) return;

    const keyNames = [
      "pressure_style",
      "pressure_style_check",
      "ethics",
      "agent_door",
      "crowd_force",
      "group_role"
    ];

    if (!keyNames.includes(target.name)) return;

    const s = safeLoadState();
    const prev = previousAnswers[target.name];

    if (prev !== undefined && prev !== target.value) {
      s.answerChangeFlags = (s.answerChangeFlags || 0) + 1;
      safeSaveState(s);
    }

    previousAnswers[target.name] = target.value;
  });
}

/* -----------------------------------------
   COLLECT ALL ANSWERS FROM FORM
----------------------------------------- */
function collectAnswers(form) {
  const data = new FormData(form);

  function getAll(name) {
    return data.getAll(name);
  }
  function getOne(name) {
    return data.get(name) || null;
  }

  return {
    interests: getAll("interests"),
    exercise: getOne("exercise"),
    endurance: getOne("endurance"),

    pressure_style: getOne("pressure_style"),
    pressure_style_check: getOne("pressure_style_check"),
    ethics: getOne("ethics"),
    risk: getOne("risk"),
    decision_speed: getOne("decision_speed"),

    skills: getAll("skills"),
    tech_comfort: getOne("tech_comfort"),
    tools: getAll("tools"),

    agent_door: getOne("agent_door"),
    crowd_force: getOne("crowd_force"),
    group_role: getOne("group_role")
  };
}

/* -----------------------------------------
   LIE DETECTION / CONSISTENCY CHECK
----------------------------------------- */
function applyLieDetection(answers) {
  const state = safeLoadState();
  let flags = 0;

  if (answers.pressure_style && answers.pressure_style_check) {
    if (answers.pressure_style !== answers.pressure_style_check) {
      flags++;
    }
  }

  if (answers.risk === "high" && answers.decision_speed === "slow") {
    flags++;
  }

  if (answers.pressure_style === "help_others") {
    if (answers.agent_door === "comply" && answers.crowd_force === "record") {
      flags++;
    }
  }

  state.lieFlags = (state.lieFlags || 0) + flags;
  safeSaveState(state);
}

/* -----------------------------------------
   ROLE ENGINE (PLACEHOLDER – YOU’LL DEEPEN THIS)
----------------------------------------- */
function calculateAdvancedRole(answers, state) {
  let roleNumber = 1;
  let subcategoryCode = "A";

  if (answers.interests.includes("mapping") || answers.skills.includes("navigation")) {
    roleNumber = 9;
  }

  if (answers.interests.includes("history") || answers.skills.includes("writing")) {
    roleNumber = 7; // Chronicler
  }

  if (answers.skills.includes("first_aid")) {
    roleNumber = 14;
  }

  if (answers.interests.includes("tech") && answers.interests.includes("analysis")) {
    roleNumber = 1;
  }

  if (answers.skills.includes("computer")) subcategoryCode = "B";
  if (answers.skills.includes("radio")) subcategoryCode = "C";
  if (answers.skills.includes("design")) subcategoryCode = "D";
  if (answers.skills.includes("logistics")) subcategoryCode = "E";

  return {
    roleNumber,
    subcategoryCode,
    roleId: `${roleNumber}${subcategoryCode}`
  };
}

/* -----------------------------------------
   SHOW ROLE RESULT ON PAGE
----------------------------------------- */
function showRoleResult(roleResult) {
  const section = document.getElementById("roleResultSection");
  const text = document.getElementById("roleResultText");
  if (!section || !text) return;

  text.textContent =
    `Your current Role ID is ${roleResult.roleId}. ` +
    `Number ${roleResult.roleNumber} is your core role. ` +
    `Letter ${roleResult.subcategoryCode} is your subcategory inside that role. ` +
    `You can view more details on your Profile and in the Subcategories page.`;

  section.style.display = "block";
}
