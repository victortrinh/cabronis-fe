const IS_POKEMON_KEY = "isPokemon";

export const isPokemonStorage: boolean =
  localStorage.getItem(IS_POKEMON_KEY) === "true";

export const setIsPokemonStorage = (isPokemon: boolean) =>
  localStorage.setItem(IS_POKEMON_KEY, isPokemon.toString());
