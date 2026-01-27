/* SERVICE WORKER */

const CACHE_NAME = "civilwar-cache-v1";

const ASSETS = [
  "index.html",
  "manifest.json",

  /* CSS */
  "theme_default.css",
  "default_layout.css",
  "default_buttons.css",
  "default_scroll_loader.css",
  "default_cards.css",
  "default_forms.css",
  "default_test.css",
  "default_badges.css",
  "default_run.css",

  "theme_space.css",
  "space_layout.css",
  "space_buttons.css",
  "space_loader.css",
  "space_cards.css",

  /* JS CORE */
  "storage_manager.js",
  "theme_manager.js",
  "role_engine.js",
  "run_tracker.js",
  "test_engine.js",
  "badge_system.js",
  "profile_loader.js",

  /* JS TESTS */
  "test_math_arithmetic.js",
  "test_math_algebra.js",
  "test_math_geometry.js",
  "test_science_elements.js",
  "test_science_states.js",
  "test_science_combined.js",

  /* JS UTILITY */
  "review_loader.js",
  "test_results_loader.js",
  "share_card_generator.js",
  "run_history_loader.js",
  "data_export_import.js",
  "scroll_loader.js",
  "index_loader.js",
  "role_form_handler.js",
  "role_database.js",
  "role_finder.js",
  "settings_controller.js",
  "offline_handler.js",
  "glossary_loader.js",
  "categories_loader.js",
  "history_loader.js",
  "faq_loader.js",
  "credits_loader.js",
  "legal_loader.js",
  "theme_preview_controller.js",
  "scroll_test_controller.js",
  "app_bootstrap.js",

  /* HTML PAGES */
  "role_finder.html",
  "role_result.html",
  "run_tracker.html",
  "tests_home.html",
  "history.html",
  "profile.html",
  "test_math_arithmetic.html",
  "test_math_algebra.html",
  "test_math_geometry.html",
  "test_science_elements.html",
  "test_science_states.html",
  "test_science_combined.html",
  "test_results.html",
  "test_math_arithmetic_review.html",
  "test_math_algebra_review.html",
  "test_math_geometry_review.html",
  "test_science_elements_review.html",
  "test_science_states_review.html",
  "test_science_combined_review.html",
  "about.html",
  "settings.html",
  "scroll_loader.html",
  "theme_preview.html",
  "share_card.html",
  "error.html",
  "offline.html",
  "data_export.html",
  "faq.html",
  "credits.html",
  "glossary.html",
  "role_list.html",
  "categories.html",
  "run_history.html",
  "legal.html",

  /* ICONS */
  "icons/icon-192.png",
  "icons/icon-512.png"
];

/* INSTALL */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

/* ACTIVATE */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});

/* FETCH */
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return (
        cached ||
        fetch(event.request).catch(() => caches.match("offline.html"))
      );
    })
  );
});
