/* ROLE LIST LOADER – ADVANCED VERSION */
/* Injects all 15 roles with subcategories, modern meaning, and filters */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("roleList");
  const filterSelect = document.getElementById("roleCategoryFilter");

  if (!container) return;

  /* -----------------------------------------
     POPULATE CATEGORY FILTER
  ----------------------------------------- */
  const categories = [...new Set(RoleDB.map(r => r.category))];

  if (filterSelect) {
    const allOpt = document.createElement("option");
    allOpt.value = "all";
    allOpt.textContent = "All Categories";
    filterSelect.appendChild(allOpt);

    categories.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      filterSelect.appendChild(opt);
    });

    filterSelect.addEventListener("change", () => {
      renderRoles(filterSelect.value);
    });
  }

  /* -----------------------------------------
     RENDER ROLES
  ----------------------------------------- */
  function renderRoles(filterCategory = "all") {
    container.innerHTML = ""; // clear existing

    RoleDB.forEach(role => {
      if (filterCategory !== "all" && role.category !== filterCategory) return;

      const card = document.createElement("div");
      card.className = "role-card matrix-panel";

      /* TITLE */
      const title = document.createElement("h2");
      title.textContent = `#${role.number} ${role.name}`;
      card.appendChild(title);

      /* CATEGORY */
      const cat = document.createElement("p");
      cat.innerHTML = `<strong>Category:</strong> ${role.category}`;
      card.appendChild(cat);

      /* SUBCATEGORY */
      const sub = document.createElement("p");
      sub.innerHTML = `<strong>Subcategory:</strong> ${role.subcategory}`;
      card.appendChild(sub);

      /* DESCRIPTION */
      const desc = document.createElement("p");
      desc.textContent = role.description;
      card.appendChild(desc);

      /* MODERN MEANING */
      const modern = document.createElement("p");
      modern.className = "modern-meaning";
      modern.innerHTML = `<strong>Modern Meaning:</strong> ${getModernMeaning(role)}`;
      card.appendChild(modern);

      /* LINKS */
      const links = document.createElement("div");
      links.className = "role-links";

      links.innerHTML = `
        <a href="history.html" class="menu-btn small">Historical Examples</a>
        <a href="glossary.html" class="menu-btn small">Glossary</a>
      `;

      card.appendChild(links);

      container.appendChild(card);
    });
  }

  /* -----------------------------------------
     MODERN MEANING ENGINE
  ----------------------------------------- */
  function getModernMeaning(role) {
    switch (role.number) {
      case 1: return "You move information fast — group chats, alerts, coordination, real‑time updates.";
      case 2: return "You verify facts, check sources, and prevent misinformation in your circles.";
      case 3: return "You connect people, organize communication, and keep everyone aligned.";
      case 4: return "You track supplies, gear, tools, and make sure nothing is missing.";
      case 5: return "You distribute resources fairly — food, water, equipment, tasks.";
      case 6: return "You understand routes, maps, safe paths, and spatial flow.";
      case 7: return "You break chaos into steps and create structure under pressure.";
      case 8: return "You see patterns, risks, and opportunities before others do.";
      case 9: return "You guide movement, timing, and navigation in real‑world situations.";
      case 10: return "You record events, take notes, document what happened, and preserve truth.";
      case 11: return "You connect past and present, giving context and meaning to events.";
      case 12: return "You shape messages, visuals, and communication for groups.";
      case 13: return "You design visuals, layouts, and media that clarify and inspire.";
      case 14: return "You provide direct support, grounding, and care during stress.";
      case 15: return "You build structures — physical, social, or emotional — that help communities survive.";
      default: return "This role contributes to group resilience in modern civic life.";
    }
  }

  /* INITIAL RENDER */
  renderRoles();
});
