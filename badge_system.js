/* BADGE SYSTEM */

const BadgeSystem = {
  award(testName) {
    const badges = Storage.load("badges", []);

    if (!badges.includes(testName)) {
      badges.push(testName);
      Storage.save("badges", badges);
    }
  },

  has(testName) {
    const badges = Storage.load("badges", []);
    return badges.includes(testName);
  }
};
