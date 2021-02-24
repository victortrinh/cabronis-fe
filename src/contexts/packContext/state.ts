import { Pack } from "../../api/pack";

export type PackContextState = Readonly<{
  packs: Pack[];
}>;

export const packContextState: PackContextState = {
  packs: [],
};
