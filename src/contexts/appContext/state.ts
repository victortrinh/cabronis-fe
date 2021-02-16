export type AppContextState = Readonly<{
  loggedIn: boolean;
}>;

export const appContextState: AppContextState = {
  loggedIn: false
};
