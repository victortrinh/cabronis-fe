import { del, get, set } from "idb-keyval";

export type Player = {
  name: string;
  score: number;
};

export type Game = {
  started: boolean;
  players: Player[];
};

const GAME_KEY = "game";

export const getGame = (): Promise<Game> => get<Game>(GAME_KEY);

export const setGame = (game: Game): Promise<void> => set(GAME_KEY, game);

export const deleteGame = (): Promise<void> => del(GAME_KEY);
