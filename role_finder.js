<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Find Your Role – Advanced Assessment</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- MATRIX THEME -->
  <link id="themeStylesheet" rel="stylesheet" href="theme_space.css">

  <style>
    .step-indicator {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 20px;
    }
    .step-indicator span {
      padding: 6px 10px;
      border: 1px solid #00aaff;
      border-radius: 4px;
      font-size: 0.9rem;
    }
    .step-indicator .active {
      background: rgba(0, 40, 70, 0.9);
      box-shadow: 0 0 10px #00c8ff;
    }
    .rf-step { display: none; }
    .rf-step.active { display: block; }
    .rf-nav {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
    .rf-status {
      margin-top: 10px;
      font-size: 0.9rem;
      color: #6fbfff;
    }
    .section-subtitle {
      margin-top: 10px;
      font-size: 1rem;
      color: #8fd3ff;
      text-shadow: 0 0 6px #00c8ff;
    }
    .matrix-note {
      font-size: 0.9rem;
      opacity: 0.8;
      margin-top: 6px;
    }
  </style>
</head>

<body>

<!-- DASHBOARD ICON -->
<div id="dashboardIcon" class="dashboard-icon matrix-pulse">◎</div>

<!-- DASHBOARD PANEL -->
<div id="dashboardPanel" class="dashboard-panel">
  <h2>Assessment Dashboard</h2>
  <p id="dashAttempts"></p>
  <p id="dashLieFlags"></p>
  <p id="dashChangeFlags"></p>
  <p id="dashMath"></p>
  <p id="dashReading"></p>
  <p id="dashScience"></p>
  <p id="dashRole"></p>
</div>

<header>
  <h1>Find Your Role</h1>
  <p class="subtitle">
    This is the advanced assessment. It combines your tests, your choices, your behavior, and your skills into a single Role ID.
  </p>
</header>

<main id="app-content">

  <!-- SYSTEM EXPLANATION -->
  <section class="matrix-panel">
    <h2>How This System Works</h2>
    <p>
      This is not a personality quiz. This is a multi‑module civic assessment that determines your
      <strong>Role Number</strong> and <strong>Subcategory Letter</strong>.
    </p>

    <p class="section-subtitle">What the system analyzes:</p>
    <ul>
      <li><strong>Math, Science, and Reading tests</strong> – your baseline cognitive skills.</li>
      <li><strong>Interests and physical activity</strong> – where you naturally lean.</li>
      <li><strong>Scenario responses</strong> – how you act under pressure.</li>
      <li><strong>Specific skills</strong> – first aid, tech, logistics, media, etc.</li>
      <li><strong>Consistency checks</strong> – detects lies and answer shifts.</li>
      <li><strong>Behavioral patterns</strong> – how you operate in groups.</li>
    </ul>

    <p class="section-subtitle">What you receive:</p>
    <p>
      A <strong>Role ID</strong> like <code>1A</code> or <code>7C</code>.
    </p>

    <ul>
      <li><strong>Number (1–15)</strong> – your core civic role.</li>
      <li><strong>Letter (A–E)</strong> – your subcategory inside that role.</li>
    </ul>

    <p class="section-subtitle">Why this matters:</p>
    <p>
      In the future, communities will connect through these IDs. A neighborhood might say:
      “We need a <code>4B</code> and a <code>10A</code> today.”  
      Your ID becomes a way to plug into real networks of support and coordination.
    </p>

    <p class="rf-status" id="moduleStatus">
      Modules completed: Math [ ], Science [ ], Reading [ ] • Pages: 1 [ ], 2 [ ], 3 [ ], 4 [ ]
    </p>
  </section>

  <!-- REQUIRED MODULES -->
  <section class="matrix-panel">
    <h2>Required Skill Modules</h2>
    <p>These tests must be completed before your role can be calculated.</p>

    <a href="tests_home.html" class="menu-btn small">Go to Test Center</a>
    <a href="test_math_arithmetic.html" class="menu-btn small">Math Test</a>
    <a href="test_science_combined.html" class="menu-btn small">Science Test</a>
    <a href="#" class="menu-btn small disabled">Reading Test (Coming Soon)</a>

    <p class="matrix-note">
      Your scores are saved automatically. You cannot receive a role until all tests and all pages are complete.
    </p>
  </section>

  <!-- STEP INDICATOR -->
  <div class="step-indicator">
    <span id="stepDot1" class="active">Page 1</span>
    <span id="stepDot2">Page 2</span>
    <span id="stepDot3">Page 3</span>
    <span id="stepDot4">Page 4</span>
  </div>

  <!-- MULTI‑PAGE ROLE FINDER -->
  <form id="roleFinderForm">

    <!-- PAGE 1 -->
    <section id="rfStep1" class="matrix-panel rf-step active">
      <h2>Page 1 – Interests & Physical Activity</h2>

      <h3>Interests</h3>
      <p>Select everything that genuinely applies to you.</p>

      <label><input type="checkbox" name="interests" value="history"> History & Documentation</label>
      <label><input type="checkbox" name="interests" value="fitness"> Fitness & Physical Readiness</label>
      <label><input type="checkbox" name="interests" value="mapping"> Mapping & Navigation</label>
      <label><input type="checkbox" name="interests" value="media"> Media & Design</label>
      <label><input type="checkbox" name="interests" value="community"> Community Support</label>
      <label><input type="checkbox" name="interests" value="analysis"> Analysis & Strategy</label>
      <label><input type="checkbox" name="interests" value="tech"> Technology & Systems</label>
      <label><input type="checkbox" name="interests" value="leadership"> Leadership & Coordination</label>
      <label><input type="checkbox" name="interests" value="problem_solving"> Problem Solving</label>
      <label><input type="checkbox" name="interests" value="writing"> Writing & Communication</label>
      <label><input type="checkbox" name="interests" value="first_aid"> First Aid & Care</label>

      <h3>Physical Activity</h3>
      <p>On an average week, which describes you best?</p>

      <label><input type="radio" name="exercise" value="heavy"> Heavy – sports, lifting, running, intense work</label>
      <label><input type="radio" name="exercise" value="moderate"> Moderate – walking, light workouts</label>
      <label><input type="radio" name="exercise" value="low"> Low – mostly seated</label>

      <h3>Energy & Endurance</h3>
      <label><input type="radio" name="endurance" value="high"> High – I can stay active for long periods</label>
      <label><input type="radio" name="endurance" value="medium"> Medium – I can push myself when needed</label>
      <label><input type="radio" name="endurance" value="low"> Low – I prefer shorter tasks</label>

      <div class="rf-nav">
        <span></span>
        <button type="button" id="nextStep1" class="menu-btn small">Next</button>
      </div>
    </section>

    <!-- PAGE 2 -->
    <section id="rfStep2" class="matrix-panel rf-step">
      <h2>Page 2 – Pressure, Consistency, Ethics</h2>

      <h3>Under Pressure</h3>
      <label><input type="radio" name="pressure_style" value="calm_plan"> I stay calm and plan.</label>
      <label><input type="radio" name="pressure_style" value="move_fast"> I move fast.</label>
      <label><input type="radio" name="pressure_style" value="help_others"> I help others.</label>
      <label><input type="radio" name="pressure_style" value="document"> I document.</label>

      <h3>Consistency Check</h3>
      <label><input type="radio" name="pressure_style_check" value="calm_plan"> I think before acting.</label>
      <label><input type="radio" name="pressure_style_check" value="move_fast"> I act before thinking.</label>
      <label><input type="radio" name="pressure_style_check" value="help_others"> I help first.</label>
      <label><input type="radio" name="pressure_style_check" value="document"> I capture details.</label>

      <h3>Ethics</h3>
      <label><input type="radio" name="ethics" value="protect_people"> Protect people</label>
      <label><input type="radio" name="ethics" value="protect_truth"> Protect truth</label>
      <label><input type="radio" name="ethics" value="protect_self"> Protect self</label>
      <label><input type="radio" name="ethics" value="protect_order"> Protect order</label>

      <h3>Risk Tolerance</h3>
      <label><input type="radio" name="risk" value="high"> High – I take risks when needed</label>
      <label><input type="radio" name="risk" value="medium"> Medium – I balance risk and caution</label>
      <label><input type="radio" name="risk" value="low"> Low – I avoid unnecessary risks</label>

      <h3>Decision Speed</h3>
      <label><input type="radio" name="decision_speed" value="fast"> Fast – I decide quickly</label>
      <label><input type="radio" name="decision_speed" value="balanced"> Balanced – I think then act</label>
      <label><input type="radio" name="decision_speed" value="slow"> Slow – I prefer to analyze deeply</label>

      <div class="rf-nav">
        <button type="button" id="prevStep2" class="menu-btn small">Back</button>
        <button type="button" id="nextStep2" class="menu-btn small">Next</button>
      </div>
    </section>

    <!-- PAGE 3 -->
    <section id="rfStep3" class="matrix-panel rf-step">
      <h2>Page 3 – Skills, Tools, Tech</h2>

      <h3>Skills</h3>
      <label><input type="checkbox" name="skills" value="first_aid"> First Aid</label>
      <label><input type="checkbox" name="skills" value="computer"> Computer Skills</label>
      <label><input type="checkbox" name="skills" value="radio"> Radio / Comms</label>
      <label><input type="checkbox" name="skills" value="writing"> Writing / Documentation</label>
      <label><input type="checkbox" name="skills" value="design"> Design / Media</label>
      <label><input type="checkbox" name="skills" value="logistics"> Logistics / Planning</label>
      <label><input type="checkbox" name="skills" value="teaching"> Teaching / Training</label>
      <label><input type="checkbox" name="skills" value="mechanical"> Mechanical / Tools</label>
      <label><input type="checkbox" name="skills" value="navigation"> Navigation / Mapping</label>
      <label><input type="checkbox" name="skills" value="analysis"> Analysis / Strategy</label>

      <h3>Tech Comfort</h3>
      <label><input type="radio" name="tech_comfort" value="high"> High</label>
      <label><input type="radio" name="tech_comfort" value="medium"> Medium</label>
      <label><input type="radio" name="tech_comfort" value="low"> Low</label>

      <h3>Tool Familiarity</h3>
      <label><input type="checkbox" name="tools" value="gps"> GPS / Mapping Apps</label>
      <label><input type="checkbox" name="tools" value="camera"> Camera / Recording Tools</label>
      <label><input type="checkbox" name="tools" value="first_aid_kit"> First Aid Kit</label>
      <label><input type="checkbox" name="tools" value="radio_tools"> Radios / Scanners</label>
      <label><input type="checkbox" name="tools" value="software"> Software Tools</label>

      <div class="rf-nav">
        <button type="button" id="prevStep3" class="menu-btn small">Back</button>
        <button type="button" id="nextStep3" class="menu-btn small">Next</button>
      </div>
    </section>

    <!-- PAGE 4 -->
    <section id="rfStep4" class="matrix-panel rf-step">
      <h2>Page 4 – Scenarios & Group Behavior</h2>

      <h3>Agents at the Door</h3>
      <label><input type="radio" name="agent_door" value="boundary"> Set boundaries</label>
      <label><input type="radio" name="agent_door" value="document"> Document</label>
      <label><input type="radio" name="agent_door" value="comply"> Comply</label>
      <label><input type="radio" name="agent_door" value="call_support"> Call support</label>

      <h3>Crowd & Force</h3>
      <label><input type="radio" name="crowd_force" value="guide"> Guide people</label>
      <label><input type="radio" name="crowd_force" value="record"> Record</label>
      <label><input type="radio" name="crowd_force" value="aid"> Provide aid</label>
      <label><input type="radio" name="crowd_force" value="signal"> Relay signals</label>

      <h3>Group Behavior</h3>
      <label><input type="radio" name="group_role" value="organizer"> Organizer</label>
      <label><input type="radio" name="group_role" value="support"> Support</label>
      <label><input type="radio" name="group_role" value="scout"> Scout</label>
      <label><input type="radio" name="group_role" value="recorder"> Recorder</label>

      <h3>Role ID System</h3>
      <p>
        Once all four pages and all tests are complete, the system will assign you a
        <strong>Role ID</strong> like <code>
