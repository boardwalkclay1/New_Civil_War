/* FULL APP INITIALIZER – MATRIX TERMINAL MODE */
/* Boots theme, role, badges, stats, settings, progress, PWA state,
   onboarding, and triggers Matrix loading effects. */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------
     1. APPLY THEME IMMEDIATELY (Matrix default)
  ----------------------------------------- */
  const savedTheme = Storage.load("theme");
  const themeLink = document.getElementById("themeStylesheet");

  if (themeLink) {
    themeLink.href = savedTheme || "theme_space.css"; // Matrix theme as default
  }

  /* -----------------------------------------
     2. LOAD USER ROLE PREVIEW
  ----------------------------------------- */
  const role = Storage.load("role", null);
  const rolePreview = document.getElementById("homeRolePreview");

  if (role && rolePreview) {
    rolePreview.textContent = `#${role.number} ${role.name}`;
  }

  /* -----------------------------------------
     3. LOAD BADGES
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
     4. LOAD RUN STATS
  ----------------------------------------- */
  const best = Storage.load("bestMile", null);
  const bestPreview = document.getElementById("homeBestTime");

  if (bestPreview) {
    bestPreview.textContent = best ? `${best} sec` : "—";
  }

  /* -----------------------------------------
     5. ONBOARDING BANNER
  ----------------------------------------- */
  const onboardingDone = Storage.load("onboardingComplete", false);
  const onboardingBanner = document.getElementById("onboardingBanner");

  if (onboardingBanner && !onboardingDone) {
    onboardingBanner.style.display = "block";
  }

  /* -----------------------------------------
     6. SETTINGS (Accessibility, Motion, Contrast)
  ----------------------------------------- */
  const settings = Storage.load("settings", {});
  applySettings(settings);

  /* -----------------------------------------
     7. GLOSSARY PROGRESS
  ----------------------------------------- */
  const glossaryProgress = Storage.load("glossaryProgress", {});
  const glossaryIndicator = document.getElementById("glossaryProgressIndicator");

  if (glossaryIndicator) {
    glossaryIndicator.textContent = `${Object.keys(glossaryProgress).length} terms viewed`;
  }

  /* -----------------------------------------
     8. HISTORY PROGRESS
  ----------------------------------------- */
  const historyProgress = Storage.load("historyProgress", {});
  const historyIndicator = document.getElementById("historyProgressIndicator");

  if (historyIndicator) {
    historyIndicator.textContent = `${Object.keys(historyProgress).length} sections explored`;
  }

  /* -----------------------------------------
     9. ROLE FINDER PROGRESS
  ----------------------------------------- */
  const roleFinderProgress = Storage.load("roleFinderProgress", null);
  const roleFinderIndicator = document.getElementById("roleFinderIndicator");

  if (roleFinderIndicator && roleFinderProgress) {
    roleFinderIndicator.textContent = "In progress";
  }

  /* -----------------------------------------
     10. PWA INSTALL STATE
  ----------------------------------------- */
  const installed = Storage.load("pwaInstalled", false);
  const installBanner = document.getElementById("installBanner");

  if (installBanner && !installed) {
    installBanner.style.display = "block";
  }

  /* -----------------------------------------
     11. CONTINUE WHERE YOU LEFT OFF
  ----------------------------------------- */
  const lastPage = Storage.load("lastPage", null);
  const continueBtn = document.getElementById("continueBtn");

  if (continueBtn && lastPage) {
    continueBtn.style.display = "block";
    continueBtn.href = lastPage;
  }

  /* -----------------------------------------
     12. MATRIX LOADING SCREEN + REVEAL
  ----------------------------------------- */
  const loader = document.getElementById("loading-screen");
  const app = document.getElementById("app-content");

  // Trigger Matrix rain burst if present
  if (window.matrixRainBurst) {
    setTimeout(() => window.matrixRainBurst(), 600);
  }

  // Fade out loader
  setTimeout(() => {
    if (loader) loader.classList.add("fade-out");
    if (app) app.style.display = "block";
  }, 2200);

});

/* -----------------------------------------
   APPLY SETTINGS (Accessibility)
----------------------------------------- */
function applySettings(settings) {
  if (settings.largeText) document.body.classList.add("large-text");
  if (settings.highContrast) document.body.classList.add("high-contrast");
  if (settings.reduceMotion) document.body.classList.add("reduce-motion");
}
