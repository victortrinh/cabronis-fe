const DARK_MODE_ON_KEY = "darkModeOn";

export const isDarkMode = (): boolean => localStorage.getItem(DARK_MODE_ON_KEY) === "true";

export const setDarkMode = (darkModeOn: boolean) => localStorage.setItem(DARK_MODE_ON_KEY, darkModeOn.toString());
