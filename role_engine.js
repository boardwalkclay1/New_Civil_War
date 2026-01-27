/* ROLE ENGINE – ADVANCED VERSION */
/* Converts full assessment → role number + category */

function calculateRole(formData) {
  const scores = {
    info: 0,       // Information Flow
    supplies: 0,   // Supplies & Resource Management
    logistics: 0,  // Logistics & Planning
    docs: 0,       // Documentation & Storytelling
    media: 0,      // Narrative & Media
    aid: 0         // Mutual Aid & Support
  };

  /* -----------------------------------------
     SKILLS
  ----------------------------------------- */
  (formData.skills || []).forEach(skill => {
    if (skill === "communication") scores.info += 2;
    if (skill === "logistics") scores.logistics += 2;
    if (skill === "writing") scores.docs += 2;
    if (skill === "media") scores.media += 2;
    if (skill === "repair") scores.aid += 2;
  });

  /* -----------------------------------------
     INTERESTS
  ----------------------------------------- */
  (formData.interests || []).forEach(int => {
    if (int === "history") scores.docs++;
    if (int === "fitness") scores.aid++;
    if (int === "community") scores.aid++;
    if (int === "mapping") scores.supplies++;
    if (int === "analysis") scores.logistics++;
  });

  /* -----------------------------------------
     FITNESS
  ----------------------------------------- */
  if (formData.exercise === "heavy") scores.aid += 2;
  if (formData.exercise === "moderate") scores.logistics++;

  /* -----------------------------------------
     SITUATIONAL RESPONSES
     These reveal instinctive role alignment.
  ----------------------------------------- */

  // Agent at door
  switch (formData.agent_door) {
    case "calm_boundary": scores.info += 2; break;
    case "document_and_verify": scores.docs += 2; break;
    case "immediate_compliance": scores.aid++; break;
    case "panic_withdraw": scores.media++; break;
  }

  // Witnessing arrest
  switch (formData.agent_arrest) {
    case "observe_and_document": scores.docs += 2; break;
    case "witness_support": scores.aid += 2; break;
    case "direct_confrontation": scores.media++; break;
    case "leave_immediately": scores.supplies++; break;
  }

  // Agent approaches you
  switch (formData.agent_approach) {
    case "ask_clarity_and_rights": scores.info += 2; break;
    case "limited_neutral_answers": scores.info++; break;
    case "overshare": scores.media++; break;
    case "shut_down": scores.supplies++; break;
  }

  // Crowd force scenario
  switch (formData.crowd_force) {
    case "help_people_exit": scores.aid += 2; break;
    case "document_from_safety": scores.docs += 2; break;
    case "medical_support": scores.aid += 2; break;
    case "confront_agents": scores.media++; break;
  }

  /* -----------------------------------------
     PRESSURE STYLE
  ----------------------------------------- */
  switch (formData.pressure_style) {
    case "calm_planner": scores.logistics += 2; break;
    case "protector": scores.aid += 2; break;
    case "messenger": scores.info += 2; break;
    case "witness": scores.docs += 2; break;
    case "withdraw": scores.media++; break;
  }

  /* -----------------------------------------
     CONTRIBUTION PREFERENCES
  ----------------------------------------- */
  (formData.contribution || []).forEach(c => {
    if (c === "frontline_support") scores.aid++;
    if (c === "remote_support") scores.info++;
    if (c === "education") scores.docs++;
    if (c === "logistics_backend") scores.logistics++;
    if (c === "creative_narrative") scores.media++;
  });

  /* -----------------------------------------
     DETERMINE CATEGORY
  ----------------------------------------- */
  const category = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  /* -----------------------------------------
     MAP CATEGORY → ROLE NUMBER
     (Your 15‑role system)
  ----------------------------------------- */
  const roleMap = {
    info: 1,       // Information Flow → Roles 1–3
    supplies: 4,   // Supplies → Roles 4–6
    logistics: 7,  // Logistics → Roles 7–9
    docs: 10,      // Documentation → Roles 10–11
    media: 12,     // Media → Roles 12–13
    aid: 14        // Mutual Aid → Roles 14–15
  };

  const roleNumber = roleMap[category];

  return { category, roleNumber };
}
