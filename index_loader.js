/* FULL APP INITIALIZER */
/* Loads theme, role, profile preview, badges, run stats, settings, history links, 
   PWA state, onboarding state, glossary progress, and more. 
   This is the real “boot brain” of the entire app. */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------
     1. APPLY THEME IMMEDIATELY
  ----------------------------------------- */
  const savedTheme = Storage.load("theme");
  if (savedTheme) {
    const themeLink = document.getElementById("themeStylesheet");
    if (themeLink) themeLink.href = savedTheme;
  }

  /* -----------------------------------------
     2. LOAD USER ROLE (for homepage preview)
  ----------------------------------------- */
  const role = Storage.load("role", null);
  if (role) {
    const rolePreview = document.getElementById("homeRolePreview");
    if (rolePreview) {
      rolePreview.textContent = `#${role.number} ${role.name}`;
    }
  }

  /* -----------------------------------------
     3. LOAD BADGES (for homepage badge strip)
  ----------------------------------------- */
  const badges = Storage.load("badges", []);
  const badgeStrip = document.getElementById("homeBadgeStrip");
  if (badgeStrip && badges.length) {
    badges.slice(0, 5).forEach(b => {
      const div = document.createElement("div");
      div.className = "badge badge-earned";
      div.textContent = b;
      badgeStrip.appendChild(div);
    });
  }

  /* -----------------------------------------
     4. LOAD RUN STATS (best time preview)
  ----------------------------------------- */
  const best = Storage.load("bestMile", null);
  const bestPreview = document.getElementById("homeBestTime");
  if (bestPreview) {
    bestPreview.textContent = best ? `${best} sec` : "—";
  }

  /* -----------------------------------------
     5. LOAD ONBOARDING STATE
  ----------------------------------------- */
  const onboardingDone = Storage.load("onboardingComplete", false);
  const onboardingBanner = document.getElementById("onboardingBanner");
  if (onboardingBanner && !onboardingDone) {
    onboardingBanner.style.display = "block";
  }

  /* -----------------------------------------
     6. LOAD SETTINGS (notifications, accessibility, etc.)
  ----------------------------------------- */
  const settings = Storage.load("settings", {});
  applySettings(settings);

  /* -----------------------------------------
     7. LOAD GLOSSARY PROGRESS
  ----------------------------------------- */
  const glossaryProgress = Storage.load("glossaryProgress", {});
  const glossaryIndicator = document.getElementById("glossaryProgressIndicator");
  if (glossaryIndicator) {
    const count = Object.keys(glossaryProgress).length;
    glossaryIndicator.textContent = `${count} terms viewed`;
  }

  /* -----------------------------------------
     8. LOAD HISTORY PAGE PROGRESS
  ----------------------------------------- */
  const historyProgress = Storage.load("historyProgress", {});
  const historyIndicator = document.getElementById("historyProgressIndicator");
  if (historyIndicator) {
    const count = Object.keys(historyProgress).length;
    historyIndicator.textContent = `${count} sections explored`;
  }

  /* -----------------------------------------
     9. LOAD ROLE FINDER PROGRESS
  ----------------------------------------- */
  const roleFinderProgress = Storage.load("roleFinderProgress", null);
  const roleFinderIndicator = document.getElementById("roleFinderIndicator");
  if (roleFinderIndicator && roleFinderProgress) {
    roleFinderIndicator.textContent = "In progress";
  }

  /* -----------------------------------------
     10. LOAD PWA INSTALL STATE
  ----------------------------------------- */
  const installed = Storage.load("pwaInstalled", false);
  const installBanner = document.getElementById("installBanner");
  if (installBanner && !installed) {
    installBanner.style.display = "block";
  }

  /* -----------------------------------------
     11. LOAD “CONTINUE WHERE YOU LEFT OFF”
  ----------------------------------------- */
  const lastPage = Storage.load("lastPage", null);
  const continueBtn = document.getElementById("continueBtn");
  if (continueBtn && lastPage) {
    continueBtn.style.display = "block";
    continueBtn.href = lastPage;
  }

  /* -----------------------------------------
     12. LOADER + APP REVEAL
  ----------------------------------------- */
  const loader = document.getElementById("loading-screen");
  const app = document.getElementById("app-content");

  setTimeout(() => {
    if (loader) loader.classList.add("fade-out");
    if (app) app.style.display = "block";
  }, 2200);

});

/* -----------------------------------------
   APPLY SETTINGS (notifications, accessibility)
----------------------------------------- */
function applySettings(settings) {
  if (settings.largeText) {
    document.body.classList.add("large-text");
  }
  if (settings.highContrast) {
    document.body.classList.add("high-contrast");
  }
  if (settings.reduceMotion) {
    document.body.classList.add("reduce-motion");
  }
}
