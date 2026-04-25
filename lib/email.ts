export const isValidEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export const POPUP_STORAGE_KEY = "lym_popup_v1";

export const markPopupSeen = () => {
  try {
    localStorage.setItem(POPUP_STORAGE_KEY, String(Date.now()));
  } catch {
    /* no-op */
  }
};

export const wasPopupSeenRecently = (days = 7) => {
  try {
    const v = localStorage.getItem(POPUP_STORAGE_KEY);
    if (!v) return false;
    const age = Date.now() - Number(v);
    return age < 1000 * 60 * 60 * 24 * days;
  } catch {
    return false;
  }
};
