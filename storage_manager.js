/* STORAGE MANAGER */
/* Handles saving + loading all local data safely */

const Storage = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  load(key, fallback = null) {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;

    try {
      return JSON.parse(raw);
    } catch (err) {
      console.warn(`Storage.load(): Invalid JSON for key "${key}". Resetting it.`, raw);
      localStorage.removeItem(key);
      return fallback;
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  resetAll() {
    localStorage.clear();
  }
};
