/* roles.js */
/* Full Role Database with Subcategories, Skills, Impact, Training */

const RoleDB = [

  /* ---------------------------------------------------------
     1. INFORMATION FLOW
  --------------------------------------------------------- */
  {
    number: 1,
    name: "Signal Runner",
    category: "Information Flow",
    subcategories: [
      {
        code: "A",
        name: "Rapid Communication",
        description: "Moves information quickly under pressure and keeps groups aligned.",
        skills: ["radio basics", "signal apps", "dispatch timing"],
        impact: "Prevents confusion and keeps operations synchronized.",
        training: ["Math: Speed Drills", "Science: Reaction Time", "Comms Basics"]
      },
      {
        code: "B",
        name: "Digital Communications",
        description: "Handles encrypted channels, digital relays, and secure messaging.",
        skills: ["encryption", "OPSEC", "network basics"],
        impact: "Protects information integrity and prevents leaks.",
        training: ["Cyber Basics", "Reading: Technical Manuals"]
      },
      {
        code: "C",
        name: "Field Relay",
        description: "Carries messages physically when digital systems fail.",
        skills: ["route planning", "endurance", "situational awareness"],
        impact: "Ensures communication continuity during outages.",
        training: ["Navigation Basics", "Fitness Module"]
      },
      {
        code: "D",
        name: "Signal Analyst",
        description: "Monitors patterns in communication flow.",
        skills: ["pattern recognition", "data logging"],
        impact: "Detects misinformation and anomalies early.",
        training: ["Math: Pattern Recognition", "Science: Systems"]
      },
      {
        code: "E",
        name: "Network Coordinator",
        description: "Links multiple communication groups together.",
        skills: ["coordination", "multi‑channel management"],
        impact: "Creates unified communication networks.",
        training: ["Leadership Basics", "Comms Integration"]
      }
    ]
  },

  /* ---------------------------------------------------------
     2. VERIFIER
  --------------------------------------------------------- */
  {
    number: 2,
    name: "Verifier",
    category: "Information Flow",
    subcategories: [
      {
        code: "A",
        name: "Fact Checker",
        description: "Validates information accuracy.",
        skills: ["research", "cross‑checking"],
        impact: "Prevents misinformation spread.",
        training: ["Reading: Comprehension", "Research Basics"]
      },
      {
        code: "B",
        name: "Source Auditor",
        description: "Evaluates credibility of sources.",
        skills: ["source analysis", "bias detection"],
        impact: "Strengthens information reliability.",
        training: ["Critical Thinking", "Media Literacy"]
      },
      {
        code: "C",
        name: "Document Verifier",
        description: "Checks authenticity of documents.",
        skills: ["document analysis", "metadata review"],
        impact: "Prevents forged or altered records.",
        training: ["Forensics Basics"]
      },
      {
        code: "D",
        name: "Field Verifier",
        description: "Confirms events by direct observation.",
        skills: ["observation", "note‑taking"],
        impact: "Provides ground‑truth verification.",
        training: ["Observation Drills"]
      },
      {
        code: "E",
        name: "Pattern Verifier",
        description: "Detects inconsistencies in data streams.",
        skills: ["pattern recognition"],
        impact: "Identifies manipulation attempts.",
        training: ["Math: Patterns"]
      }
    ]
  },

  /* ---------------------------------------------------------
     3. COORDINATOR
  --------------------------------------------------------- */
  {
    number: 3,
    name: "Coordinator",
    category: "Information Flow",
    subcategories: [
      {
        code: "A",
        name: "Task Coordinator",
        description: "Assigns tasks and keeps teams aligned.",
        skills: ["task management", "communication"],
        impact: "Prevents duplication and confusion.",
        training: ["Leadership Basics"]
      },
      {
        code: "B",
        name: "Time Coordinator",
        description: "Manages timing and sequencing.",
        skills: ["scheduling", "timing"],
        impact: "Ensures operations run smoothly.",
        training: ["Math: Time Management"]
      },
      {
        code: "C",
        name: "Cross‑Team Coordinator",
        description: "Links multiple teams together.",
        skills: ["multi‑team communication"],
        impact: "Creates unified group action.",
        training: ["Comms Integration"]
      },
      {
        code: "D",
        name: "Logistics Coordinator",
        description: "Coordinates supplies and movement.",
        skills: ["logistics", "planning"],
        impact: "Ensures resources reach where needed.",
        training: ["Logistics Basics"]
      },
      {
        code: "E",
        name: "Crisis Coordinator",
        description: "Manages operations during emergencies.",
        skills: ["calm under pressure", "rapid planning"],
        impact: "Stabilizes chaotic situations.",
        training: ["Crisis Response"]
      }
    ]
  },

  /* ---------------------------------------------------------
     4. QUARTERMASTER
  --------------------------------------------------------- */
  {
    number: 4,
    name: "Quartermaster",
    category: "Supplies & Resource Management",
    subcategories: [
      {
        code: "A",
        name: "Inventory Keeper",
        description: "Tracks supplies and equipment.",
        skills: ["inventory", "organization"],
        impact: "Prevents shortages.",
        training: ["Logistics Basics"]
      },
      {
        code: "B",
        name: "Resource Allocator",
        description: "Distributes supplies fairly.",
        skills: ["fairness", "planning"],
        impact: "Ensures equitable access.",
        training: ["Ethics Module"]
      },
      {
        code: "C",
        name: "Supply Runner",
        description: "Moves supplies between groups.",
        skills: ["navigation", "endurance"],
        impact: "Keeps operations supplied.",
        training: ["Fitness Module"]
      },
      {
        code: "D",
        name: "Procurement Specialist",
        description: "Finds and acquires needed resources.",
        skills: ["sourcing", "negotiation"],
        impact: "Expands group capability.",
        training: ["Resource Acquisition"]
      },
      {
        code: "E",
        name: "Storage Manager",
        description: "Organizes storage and access.",
        skills: ["organization"],
        impact: "Prevents loss and waste.",
        training: ["Storage Systems"]
      }
    ]
  },

  /* ---------------------------------------------------------
     5–15 (ALL REMAINING ROLES)
     I will generate the full set for you next if you want.
  --------------------------------------------------------- */

];
