/* role_finder_logic.js */
/* Advanced logic shell for the Find Your Role page */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("roleFinderForm");
  if (!form) return;

  // Step/page handling is already wired in the HTML inline script,
  // but we still track completion here.
  initRoleFinderState();
  updateModuleStatus();
  wireAnswerTracking(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const state = AssessmentState.load();

    // Mark page 4 as complete when they submit
    state.roleFinder.page4 = true;
    state.roleFinder.attempts = (state.roleFinder.attempts || 0) + 1;
    state.attempts = (state.attempts || 0) + 1;
    AssessmentState.save(state);

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
    const updatedState = AssessmentState.load();

    // Calculate role (placeholder engine for now)
    const roleResult = calculateAdvancedRole(answers, updatedState);

    // Save role assignment
    Storage.save("roleAssignment", roleResult);

    // Mark role attempt in AssessmentState
    updatedState.roleFinder.lastResult = roleResult;
    AssessmentState.save(updatedState);

    // Reveal result section
    showRoleResult(roleResult);
  });
});

/* -----------------------------------------
   INITIALIZE ROLE FINDER STATE
----------------------------------------- */
function initRoleFinderState() {
  const state = AssessmentState.load();
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
    // Ensure flags exist
    state.roleFinder.page1 = !!state.roleFinder.page1;
    state.roleFinder.page2 = !!state.roleFinder.page2;
    state.roleFinder.page3 = !!state.roleFinder.page3;
    state.roleFinder.page4 = !!state.roleFinder.page4;
  }

  // Ensure global fields exist
  state.attempts = state.attempts || 0;
  state.lieFlags = state.lieFlags || 0;
  state.answerChangeFlags = state.answerChangeFlags || 0;

  // Ensure module objects exist
  state.math = state.math || { attempts: 0, bestScore: null };
  state.science = state.science || { attempts: 0, bestScore: null };
  state.reading = state.reading || { attempts: 0, bestScore: null };

  AssessmentState.save(state);
}

/* -----------------------------------------
   MODULE COMPLETION CHECK
----------------------------------------- */
function modulesComplete() {
  const s = AssessmentState.load();
  return (
    s.math && s.math.bestScore !== null &&
    s.science && s.science.bestScore !== null &&
    s.reading && s.reading.bestScore !== null // reading test will fill this later
  );
}

/* -----------------------------------------
   PAGE COMPLETION CHECK
----------------------------------------- */
function pagesComplete() {
  const s = AssessmentState.load();
  return (
    s.roleFinder &&
    s.roleFinder.page1 &&
    s.roleFinder.page2 &&
    s.roleFinder.page3 &&
    s.roleFinder.page4
  );
}

/* -----------------------------------------
   UPDATE MODULE + PAGE STATUS TEXT
----------------------------------------- */
function updateModuleStatus() {
  const el = document.getElementById("moduleStatus");
  if (!el) return;

  const s = AssessmentState.load();

  const mathDone = s.math.bestScore !== null ? "✔" : " ";
  const sciDone = s.science.bestScore !== null ? "✔" : " ";
  const readDone = s.reading.bestScore !== null ? "✔" : " ";

  const p1 = s.roleFinder.page1 ? "✔" : " ";
  const p2 = s.roleFinder.page2 ? "✔" : " ";
  const p3 = s.roleFinder.page3 ? "✔" : " ";
  const p4 = s.roleFinder.page4 ? "✔" : " ";

  el.textContent =
    `Modules completed: Math [${mathDone}], Science [${sciDone}], Reading [${readDone}] • ` +
    `Pages: 1 [${p1}], 2 [${p2}], 3 [${p3}], 4 [${p4}]`;
}

/* -----------------------------------------
   ANSWER TRACKING (for page flags + change flags)
----------------------------------------- */
let previousAnswers = {};

function wireAnswerTracking(form) {
  const state = AssessmentState.load();

  // Mark page completion when they leave each page via Next
  const next1 = document.getElementById("nextStep1");
  const next2 = document.getElementById("nextStep2");
  const next3 = document.getElementById("nextStep3");

  if (next1) {
    next1.addEventListener("click", () => {
      const s = AssessmentState.load();
      s.roleFinder.page1 = true;
      AssessmentState.save(s);
      updateModuleStatus();
    });
  }
  if (next2) {
    next2.addEventListener("click", () => {
      const s = AssessmentState.load();
      s.roleFinder.page2 = true;
      AssessmentState.save(s);
      updateModuleStatus();
    });
  }
  if (next3) {
    next3.addEventListener("click", () => {
      const s = AssessmentState.load();
      s.roleFinder.page3 = true;
      AssessmentState.save(s);
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

    const state = AssessmentState.load();
    const prev = previousAnswers[target.name];

    if (prev !== undefined && prev !== target.value) {
      state.answerChangeFlags = (state.answerChangeFlags || 0) + 1;
      AssessmentState.save(state);
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
  const state = AssessmentState.load();
  let flags = 0;

  // Pressure style vs check
  if (answers.pressure_style && answers.pressure_style_check) {
    if (answers.pressure_style !== answers.pressure_style_check) {
      flags++;
    }
  }

  // Example: high risk + slow decision speed is a mild inconsistency
  if (answers.risk === "high" && answers.decision_speed === "slow") {
    flags++;
  }

  // Example: says "help_others" but chooses "comply" in agent_door and "record" in crowd_force
  if (answers.pressure_style === "help_others") {
    if (answers.agent_door === "comply" && answers.crowd_force === "record") {
      flags++;
    }
  }

  state.lieFlags = (state.lieFlags || 0) + flags;
  AssessmentState.save(state);
}

/* -----------------------------------------
   ROLE ENGINE (PLACEHOLDER – YOU’LL DEEPEN THIS)
----------------------------------------- */
function calculateAdvancedRole(answers, state) {
  // This is a simple placeholder to give you a working pipeline.
  // You will later replace this with a deeper algorithm that uses:
  // - state.math.bestScore, state.science.bestScore, state.reading.bestScore
  // - answers.interests, answers.skills, answers.scenarios, etc.
  // - state.lieFlags, state.answerChangeFlags

  let roleNumber = 1;      // default
  let subcategoryCode = "A";

  // Example: strong mapping/nav interest -> navigation roles
  if (answers.interests.includes("mapping") || answers.skills.includes("navigation")) {
    roleNumber = 9; // e.g., Navigator/Scout
  }

  // Example: strong writing/history -> documentation roles
  if (answers.interests.includes("history") || answers.skills.includes("writing")) {
    roleNumber = 10; // e.g., Chronicler
  }

  // Example: strong first aid -> care roles
  if (answers.skills.includes("first_aid")) {
    roleNumber = 14; // e.g., Care / Mutual Aid
  }

  // Example: tech + analysis -> information roles
  if (answers.interests.includes("tech") && answers.interests.includes("analysis")) {
    roleNumber = 1; // e.g., Signal / Info Flow
  }

  // Subcategory based on skills
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
