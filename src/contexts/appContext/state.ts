import { isPokemonStorage } from "../../storage/cardType";

export type AppContextState = Readonly<{
  loggedIn: boolean;
  isPokemon: boolean;
}>;

export const appContextState: AppContextState = {
  loggedIn: false,
  isPokemon: isPokemonStorage,
};
