import { get, set } from "idb-keyval";

const DARK_MODE_ON_KEY = "darkModeOn";

export const getDarkMode = (): Promise<boolean> =>
  get<boolean>(DARK_MODE_ON_KEY);

export const setDarkMode = (darkModeOn: boolean): Promise<void> =>
  set(DARK_MODE_ON_KEY, darkModeOn);
