/* roles.js */
/* Full 15‑Role Database with Subcategories, Skills, Impact, Training */

const RoleDB = [

  /* ---------------------------------------------------------
     1. SIGNAL RUNNER – INFORMATION FLOW
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
     2. VERIFIER – INFORMATION FLOW
  --------------------------------------------------------- */
  {
    number: 2,
    name: "Verifier",
    category: "Information Flow",
    subcategories: [
      {
        code: "A",
        name: "Fact Checker",
        description: "Validates information accuracy before it spreads.",
        skills: ["research", "cross‑checking"],
        impact: "Prevents misinformation from taking root.",
        training: ["Reading: Comprehension", "Research Basics"]
      },
      {
        code: "B",
        name: "Source Auditor",
        description: "Evaluates credibility and bias of sources.",
        skills: ["source analysis", "bias detection"],
        impact: "Strengthens trust in shared information.",
        training: ["Critical Thinking", "Media Literacy"]
      },
      {
        code: "C",
        name: "Document Verifier",
        description: "Checks authenticity of documents and records.",
        skills: ["document analysis", "metadata review"],
        impact: "Prevents forged or altered records from being used.",
        training: ["Forensics Basics"]
      },
      {
        code: "D",
        name: "Field Verifier",
        description: "Confirms events by direct observation on the ground.",
        skills: ["observation", "note‑taking"],
        impact: "Provides ground‑truth verification.",
        training: ["Observation Drills"]
      },
      {
        code: "E",
        name: "Pattern Verifier",
        description: "Detects inconsistencies in data streams and reports.",
        skills: ["pattern recognition"],
        impact: "Identifies manipulation attempts early.",
        training: ["Math: Patterns", "Data Basics"]
      }
    ]
  },

  /* ---------------------------------------------------------
     3. COORDINATOR – INFORMATION FLOW
  --------------------------------------------------------- */
  {
    number: 3,
    name: "Coordinator",
    category: "Information Flow",
    subcategories: [
      {
        code: "A",
        name: "Task Coordinator",
        description: "Assigns tasks and keeps teams aligned on priorities.",
        skills: ["task management", "communication"],
        impact: "Prevents duplication and confusion.",
        training: ["Leadership Basics", "Planning 101"]
      },
      {
        code: "B",
        name: "Time Coordinator",
        description: "Manages timing, sequencing, and deadlines.",
        skills: ["scheduling", "time awareness"],
        impact: "Ensures operations run on schedule.",
        training: ["Math: Time Management"]
      },
      {
        code: "C",
        name: "Cross‑Team Coordinator",
        description: "Links multiple teams and roles together.",
        skills: ["multi‑team communication", "conflict resolution"],
        impact: "Creates unified group action.",
        training: ["Comms Integration", "Facilitation Basics"]
      },
      {
        code: "D",
        name: "Logistics Coordinator",
        description: "Coordinates supplies, routes, and resource movement.",
        skills: ["logistics", "planning"],
        impact: "Ensures resources reach where they’re needed.",
        training: ["Logistics Basics", "Mapping & Routes"]
      },
      {
        code: "E",
        name: "Crisis Coordinator",
        description: "Manages operations during emergencies and high stress.",
        skills: ["calm under pressure", "rapid planning"],
        impact: "Stabilizes chaotic situations.",
        training: ["Crisis Response", "Scenario Drills"]
      }
    ]
  },

  /* ---------------------------------------------------------
     4. QUARTERMASTER – SUPPLIES & RESOURCES
  --------------------------------------------------------- */
  {
    number: 4,
    name: "Quartermaster",
    category: "Supplies & Resource Management",
    subcategories: [
      {
        code: "A",
        name: "Inventory Keeper",
        description: "Tracks supplies, equipment, and usage.",
        skills: ["inventory", "organization"],
        impact: "Prevents shortages and waste.",
        training: ["Logistics Basics", "Spreadsheet Skills"]
      },
      {
        code: "B",
        name: "Resource Allocator",
        description: "Distributes supplies fairly and strategically.",
        skills: ["fairness", "prioritization"],
        impact: "Ensures equitable access to limited resources.",
        training: ["Ethics Module", "Resource Planning"]
      },
      {
        code: "C",
        name: "Supply Runner",
        description: "Moves supplies between locations and teams.",
        skills: ["navigation", "endurance"],
        impact: "Keeps operations physically supplied.",
        training: ["Fitness Module", "Route Planning"]
      },
      {
        code: "D",
        name: "Procurement Specialist",
        description: "Finds and acquires needed resources.",
        skills: ["sourcing", "negotiation"],
        impact: "Expands group capability under constraints.",
        training: ["Resource Acquisition", "Community Networking"]
      },
      {
        code: "E",
        name: "Storage Manager",
        description: "Organizes storage, access, and safety.",
        skills: ["organization", "safety awareness"],
        impact: "Prevents loss, damage, and confusion.",
        training: ["Storage Systems", "Safety Basics"]
      }
    ]
  },

  /* ---------------------------------------------------------
     5. SCOUT – TERRAIN & ROUTES
  --------------------------------------------------------- */
  {
    number: 5,
    name: "Scout",
    category: "Terrain & Movement",
    subcategories: [
      {
        code: "A",
        name: "Urban Scout",
        description: "Navigates city blocks, alleys, and infrastructure.",
        skills: ["urban navigation", "observation"],
        impact: "Finds safe routes and vantage points in dense areas.",
        training: ["City Mapping", "Situational Awareness"]
      },
      {
        code: "B",
        name: "Trail Scout",
        description: "Navigates parks, trails, and natural terrain.",
        skills: ["trail reading", "compass use"],
        impact: "Opens safe paths through natural environments.",
        training: ["Topographic Maps", "Outdoor Basics"]
      },
      {
        code: "C",
        name: "Advance Scout",
        description: "Moves ahead of groups to check conditions.",
        skills: ["stealth", "quick reporting"],
        impact: "Prevents groups from walking into danger.",
        training: ["Recon Drills", "Radio Basics"]
      },
      {
        code: "D",
        name: "Route Designer",
        description: "Designs primary and backup routes.",
        skills: ["planning", "map analysis"],
        impact: "Ensures multiple options when conditions change.",
        training: ["Route Planning", "Risk Assessment"]
      },
      {
        code: "E",
        name: "Checkpoint Scout",
        description: "Monitors key intersections and choke points.",
        skills: ["observation", "timing"],
        impact: "Keeps track of movement and flow.",
        training: ["Observation Drills", "Timing & Logs"]
      }
    ]
  },

  /* ---------------------------------------------------------
     6. WATCHER – OBSERVATION & MONITORING
  --------------------------------------------------------- */
  {
    number: 6,
    name: "Watcher",
    category: "Observation & Monitoring",
    subcategories: [
      {
        code: "A",
        name: "Street Watcher",
        description: "Observes public spaces and records patterns.",
        skills: ["discreet observation", "note‑taking"],
        impact: "Provides early warning of changes or threats.",
        training: ["Observation Drills", "Legal Basics"]
      },
      {
        code: "B",
        name: "Crowd Watcher",
        description: "Monitors crowd behavior and movement.",
        skills: ["pattern recognition", "situational awareness"],
        impact: "Identifies escalation points early.",
        training: ["Crowd Dynamics", "De‑escalation Basics"]
      },
      {
        code: "C",
        name: "Checkpoint Watcher",
        description: "Monitors checkpoints, entrances, and exits.",
        skills: ["attention to detail", "logging"],
        impact: "Tracks who and what moves through key points.",
        training: ["Log Keeping", "Observation"]
      },
      {
        code: "D",
        name: "Digital Watcher",
        description: "Monitors digital channels for signals and trends.",
        skills: ["feed monitoring", "keyword tracking"],
        impact: "Spots digital shifts that affect the ground.",
        training: ["Media Monitoring", "Data Basics"]
      },
      {
        code: "E",
        name: "Pattern Watcher",
        description: "Connects small observations into larger patterns.",
        skills: ["analysis", "synthesis"],
        impact: "Turns raw observation into actionable insight.",
        training: ["Analysis 101", "Pattern Recognition"]
      }
    ]
  },

  /* ---------------------------------------------------------
     7. CHRONICLER – DOCUMENTATION & MEMORY
  --------------------------------------------------------- */
  {
    number: 7,
    name: "Chronicler",
    category: "Documentation & Memory",
    subcategories: [
      {
        code: "A",
        name: "Field Chronicler",
        description: "Documents events on the ground in real time.",
        skills: ["note‑taking", "timestamping"],
        impact: "Creates accurate records of what actually happened.",
        training: ["Field Notes", "Time Logging"]
      },
      {
        code: "B",
        name: "Archive Builder",
        description: "Organizes documents, media, and records.",
        skills: ["archiving", "categorization"],
        impact: "Preserves memory for future use and defense.",
        training: ["Archiving Basics", "Metadata"]
      },
      {
        code: "C",
        name: "Story Chronicler",
        description: "Turns events into clear narratives.",
        skills: ["writing", "editing"],
        impact: "Helps communities understand their own history.",
        training: ["Narrative Writing", "Reading: History"]
      },
      {
        code: "D",
        name: "Evidence Chronicler",
        description: "Captures and preserves evidence for accountability.",
        skills: ["chain of custody", "secure storage"],
        impact: "Supports legal and public defense efforts.",
        training: ["Evidence Handling", "Legal Basics"]
      },
      {
        code: "E",
        name: "Timeline Chronicler",
        description: "Builds timelines of events and decisions.",
        skills: ["timeline building", "cross‑referencing"],
        impact: "Shows how actions and outcomes connect.",
        training: ["Timeline Tools", "Analysis 101"]
      }
    ]
  },

  /* ---------------------------------------------------------
     8. CARTOGRAPHER – MAPS & SPACE
  --------------------------------------------------------- */
  {
    number: 8,
    name: "Cartographer",
    category: "Maps & Spatial Intelligence",
    subcategories: [
      {
        code: "A",
        name: "Street Mapper",
        description: "Builds and updates local street maps.",
        skills: ["map drawing", "GPS use"],
        impact: "Gives groups accurate navigation tools.",
        training: ["Mapping Basics", "GPS Skills"]
      },
      {
        code: "B",
        name: "Risk Mapper",
        description: "Maps risk zones, safe zones, and choke points.",
        skills: ["risk assessment", "spatial analysis"],
        impact: "Helps groups avoid danger and plan routes.",
        training: ["Risk Mapping", "Observation"]
      },
      {
        code: "C",
        name: "Resource Mapper",
        description: "Maps resources like water, clinics, and safe spaces.",
        skills: ["surveying", "data logging"],
        impact: "Connects people to what they need.",
        training: ["Survey Basics", "Community Mapping"]
      },
      {
        code: "D",
        name: "Dynamic Mapper",
        description: "Updates maps in real time as conditions change.",
        skills: ["fast updates", "coordination"],
        impact: "Keeps maps alive and accurate.",
        training: ["Live Mapping Tools", "Comms Integration"]
      },
      {
        code: "E",
        name: "Historical Mapper",
        description: "Connects current maps to historical events.",
        skills: ["history reading", "spatial storytelling"],
        impact: "Shows how past and present overlap in space.",
        training: ["History Mapping", "Reading: Local History"]
      }
    ]
  },

  /* ---------------------------------------------------------
     9. NAVIGATOR – MOVEMENT & GUIDANCE
  --------------------------------------------------------- */
  {
    number: 9,
    name: "Navigator",
    category: "Movement & Guidance",
    subcategories: [
      {
        code: "A",
        name: "Route Navigator",
        description: "Guides groups along safe routes.",
        skills: ["map reading", "wayfinding"],
        impact: "Reduces confusion and risk during movement.",
        training: ["Route Planning", "Navigation Basics"]
      },
      {
        code: "B",
        name: "Evac Navigator",
        description: "Designs and leads evacuation routes.",
        skills: ["risk assessment", "crowd guidance"],
        impact: "Moves people out of danger efficiently.",
        training: ["Evacuation Planning", "Crowd Dynamics"]
      },
      {
        code: "C",
        name: "Night Navigator",
        description: "Specializes in low‑visibility navigation.",
        skills: ["night awareness", "stealth"],
        impact: "Keeps movement safe when visibility is low.",
        training: ["Night Movement", "Light Discipline"]
      },
      {
        code: "D",
        name: "Transit Navigator",
        description: "Uses public transit and systems for movement.",
        skills: ["transit maps", "timing"],
        impact: "Optimizes movement using existing infrastructure.",
        training: ["Transit Systems", "Time Management"]
      },
      {
        code: "E",
        name: "Micro‑Navigator",
        description: "Guides within buildings and tight spaces.",
        skills: ["indoor mapping", "spatial memory"],
        impact: "Prevents people from getting lost in complex structures.",
        training: ["Building Layouts", "Fire Exit Mapping"]
      }
    ]
  },

  /* ---------------------------------------------------------
     10. MEDIATOR – RELATIONSHIPS & TENSION
  --------------------------------------------------------- */
  {
    number: 10,
    name: "Mediator",
    category: "Relationships & Tension Management",
    subcategories: [
      {
        code: "A",
        name: "Conflict Mediator",
        description: "Helps people de‑escalate and resolve disputes.",
        skills: ["listening", "neutral language"],
        impact: "Prevents fractures inside the community.",
        training: ["Conflict Resolution", "De‑escalation Basics"]
      },
      {
        code: "B",
        name: "Bridge Builder",
        description: "Connects groups that don’t trust each other.",
        skills: ["empathy", "translation"],
        impact: "Builds alliances across divides.",
        training: ["Facilitation", "Cultural Literacy"]
      },
      {
        code: "C",
        name: "Authority Mediator",
        description: "Stands between community and authorities.",
        skills: ["boundary setting", "rights knowledge"],
        impact: "Protects people while communicating clearly.",
        training: ["Legal Basics", "Rights Education"]
      },
      {
        code: "D",
        name: "Internal Mediator",
        description: "Handles internal group tensions quietly.",
        skills: ["discretion", "trust‑building"],
        impact: "Keeps teams functional under stress.",
        training: ["Team Dynamics", "Listening Skills"]
      },
      {
        code: "E",
        name: "Youth Mediator",
        description: "Works specifically with younger people.",
        skills: ["youth communication", "patience"],
        impact: "Keeps younger members engaged and safe.",
        training: ["Youth Work Basics", "Mentorship"]
      }
    ]
  },

  /* ---------------------------------------------------------
     11. EDUCATOR – TRAINING & SKILL‑BUILDING
  --------------------------------------------------------- */
  {
    number: 11,
    name: "Educator",
    category: "Training & Skill‑Building",
    subcategories: [
      {
        code: "A",
        name: "Skills Trainer",
        description: "Teaches practical skills to others.",
        skills: ["instruction", "demonstration"],
        impact: "Raises the baseline capacity of the group.",
        training: ["Teaching Basics", "Lesson Planning"]
      },
      {
        code: "B",
        name: "Study Guide",
        description: "Helps people understand complex topics.",
        skills: ["simplifying concepts", "patience"],
        impact: "Makes advanced knowledge accessible.",
        training: ["Reading: Technical Texts", "Tutoring Skills"]
      },
      {
        code: "C",
        name: "Onboarding Guide",
        description: "Welcomes and orients new members.",
        skills: ["orientation", "clear explanation"],
        impact: "Helps people plug in quickly and confidently.",
        training: ["Onboarding Design", "Communication"]
      },
      {
        code: "D",
        name: "Workshop Builder",
        description: "Designs and runs group trainings.",
        skills: ["facilitation", "group management"],
        impact: "Builds shared understanding and practice.",
        training: ["Workshop Design", "Facilitation"]
      },
      {
        code: "E",
        name: "Youth Educator",
        description: "Focuses on teaching younger members.",
        skills: ["youth engagement", "adaptable teaching"],
        impact: "Builds the next generation of skilled members.",
        training: ["Youth Education", "Mentorship"]
      }
    ]
  },

  /* ---------------------------------------------------------
     12. SIGNAL DOCUMENTARIST – MEDIA & EVIDENCE
  --------------------------------------------------------- */
  {
    number: 12,
    name: "Signal Documentarist",
    category: "Media & Evidence",
    subcategories: [
      {
        code: "A",
        name: "Video Documentarist",
        description: "Captures video evidence safely and clearly.",
        skills: ["framing", "stability", "context capture"],
        impact: "Provides visual proof for defense and history.",
        training: ["Video Basics", "Evidence Handling"]
      },
      {
        code: "B",
        name: "Photo Documentarist",
        description: "Uses still images to document events.",
        skills: ["composition", "timing"],
        impact: "Captures key moments with clarity.",
        training: ["Photography Basics", "Metadata Awareness"]
      },
      {
        code: "C",
        name: "Audio Documentarist",
        description: "Records sound, voices, and ambient audio.",
        skills: ["mic placement", "noise control"],
        impact: "Preserves testimony and soundscapes.",
        training: ["Audio Basics", "Interview Skills"]
      },
      {
        code: "D",
        name: "Editor & Curator",
        description: "Edits and curates media into coherent sets.",
        skills: ["editing", "selection"],
        impact: "Turns raw media into usable evidence.",
        training: ["Editing Basics", "Story Structure"]
      },
      {
        code: "E",
        name: "Secure Uploader",
        description: "Safely transfers media to secure archives.",
        skills: ["OPSEC", "secure transfer"],
        impact: "Protects sources and preserves evidence.",
        training: ["Digital Security", "Secure Uploads"]
      }
    ]
  },

  /* ---------------------------------------------------------
     13. TECH STEWARD – SYSTEMS & INFRASTRUCTURE
  --------------------------------------------------------- */
  {
    number: 13,
    name: "Tech Steward",
    category: "Systems & Infrastructure",
    subcategories: [
      {
        code: "A",
        name: "Device Steward",
        description: "Keeps devices functional and updated.",
        skills: ["basic repair", "software updates"],
        impact: "Prevents tech failures during critical moments.",
        training: ["Device Basics", "Maintenance Routines"]
      },
      {
        code: "B",
        name: "Network Steward",
        description: "Maintains local networks and connections.",
        skills: ["network setup", "troubleshooting"],
        impact: "Keeps communication channels alive.",
        training: ["Networking Basics", "Mesh Concepts"]
      },
      {
        code: "C",
        name: "Data Steward",
        description: "Organizes and protects data.",
        skills: ["backup", "encryption"],
        impact: "Prevents data loss and exposure.",
        training: ["Backup Strategies", "Encryption Basics"]
      },
      {
        code: "D",
        name: "Tool Steward",
        description: "Manages shared digital tools and accounts.",
        skills: ["account management", "access control"],
        impact: "Prevents lockouts and confusion.",
        training: ["Access Management", "Password Hygiene"]
      },
      {
        code: "E",
        name: "Local‑First Steward",
        description: "Keeps systems working offline and locally.",
        skills: ["offline tools", "sync awareness"],
        impact: "Reduces dependence on external platforms.",
        training: ["Local‑First Tools", "Resilience Design"]
      }
    ]
  },

  /* ---------------------------------------------------------
     14. CARE ANCHOR – HEALTH & SUPPORT
  --------------------------------------------------------- */
  {
    number: 14,
    name: "Care Anchor",
    category: "Health & Support",
    subcategories: [
      {
        code: "A",
        name: "First Aid Anchor",
        description: "Provides immediate physical care.",
        skills: ["CPR", "wound care", "basic triage"],
        impact: "Reduces harm and stabilizes injuries.",
        training: ["First Aid Certification", "CPR Training"]
      },
      {
        code: "B",
        name: "Emotional Anchor",
        description: "Provides emotional grounding and listening.",
        skills: ["active listening", "calm presence"],
        impact: "Helps people stay steady under stress.",
        training: ["Peer Support Basics", "Stress Awareness"]
      },
      {
        code: "C",
        name: "Resource Anchor",
        description: "Connects people to food, water, and shelter.",
        skills: ["resource mapping", "referral"],
        impact: "Meets basic needs quickly.",
        training: ["Mutual Aid Basics", "Resource Networks"]
      },
      {
        code: "D",
        name: "Check‑In Anchor",
        description: "Keeps track of who is okay and who isn’t.",
        skills: ["check‑in routines", "record keeping"],
        impact: "Prevents people from slipping through cracks.",
        training: ["Check‑In Systems", "Contact Trees"]
      },
      {
        code: "E",
        name: "Recovery Anchor",
        description: "Supports people after intense events.",
        skills: ["follow‑up", "referrals"],
        impact: "Helps communities heal and reset.",
        training: ["Recovery Practices", "Community Care"]
      }
    ]
  },

  /* ---------------------------------------------------------
     15. COMMUNITY WEAVER – CONNECTION & NETWORKS
  --------------------------------------------------------- */
  {
    number: 15,
    name: "Community Weaver",
    category: "Connection & Networks",
    subcategories: [
      {
        code: "A",
        name: "Connector",
        description: "Introduces people and groups who should know each other.",
        skills: ["networking", "memory for people"],
        impact: "Builds dense, resilient social networks.",
        training: ["Community Mapping", "Relationship Building"]
      },
      {
        code: "B",
        name: "Event Weaver",
        description: "Organizes gatherings, meetings, and spaces.",
        skills: ["event planning", "logistics"],
        impact: "Creates physical spaces for connection.",
        training: ["Event Planning Basics", "Space Setup"]
      },
      {
        code: "C",
        name: "Bridge Weaver",
        description: "Connects different communities or neighborhoods.",
        skills: ["cross‑community communication"],
        impact: "Spreads knowledge and support across boundaries.",
        training: ["Cultural Literacy", "Facilitation"]
      },
      {
        code: "D",
        name: "Signal Weaver",
        description: "Connects information networks with real people.",
        skills: ["translation", "communication"],
        impact: "Ensures signals reach the right humans.",
        training: ["Comms Basics", "Storytelling"]
      },
      {
        code: "E",
        name: "Long‑Term Weaver",
        description: "Builds relationships that last beyond crises.",
        skills: ["trust‑building", "consistency"],
        impact: "Creates durable, long‑term community fabric.",
        training: ["Long‑Term Organizing", "Mutual Aid History"]
      }
    ]
  }

];
