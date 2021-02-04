import { get, set } from "idb-keyval";

const LANGUAGE_KEY = "language";

export const getLanguage = (): Promise<string> => get<string>(LANGUAGE_KEY);

export const setLanguage = (language: string): Promise<void> =>
  set(LANGUAGE_KEY, language);
