
const LANGUAGE_KEY = "language";

export const getLanguage = () => localStorage.getItem(LANGUAGE_KEY);

export const setLanguage = (language: string) => localStorage.setItem(LANGUAGE_KEY, language);
