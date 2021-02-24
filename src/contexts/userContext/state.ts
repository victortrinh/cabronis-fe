import { User } from "../../api/user";

export type UserContextState = Readonly<{
  users: User[];
}>;

export const userContextState: UserContextState = {
  users: [],
};
