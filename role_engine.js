/* ROLE ENGINE */
/* Converts user answers → role number + category */

function calculateRole(formData) {
  const scores = {
    info: 0,
    supplies: 0,
    logistics: 0,
    docs: 0,
    media: 0,
    aid: 0
  };

  // Skills
  (formData.skills || []).forEach(skill => {
    if (skill === "communication") scores.info++;
    if (skill === "logistics") scores.logistics++;
    if (skill === "writing") scores.docs++;
    if (skill === "media") scores.media++;
    if (skill === "repair") scores.aid++;
  });

  // Interests
  (formData.interests || []).forEach(int => {
    if (int === "history") scores.docs++;
    if (int === "fitness") scores.aid++;
    if (int === "community") scores.aid++;
    if (int === "mapping") scores.supplies++;
    if (int === "analysis") scores.logistics++;
  });

  // Fitness
  if (formData.exercise === "heavy") scores.aid++;
  if (formData.exercise === "moderate") scores.logistics++;

  // Determine category
  const category = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  // Map category → role number
  const roleMap = {
    info: 1,
    supplies: 4,
    logistics: 7,
    docs: 10,
    media: 12,
    aid: 14
  };

  const roleNumber = roleMap[category];

  return { category, roleNumber };
}
