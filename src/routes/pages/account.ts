import { Route } from "../route";
import Account from "../../pages/account";

const account: Route = {
  key: "account",
  component: Account,
  path: "/account",
  exact: true,
};

export default account;
