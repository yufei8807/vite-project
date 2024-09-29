export default {
  set(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key: string) {
    return JSON.parse(localStorage.getItem(key) || "");
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};
