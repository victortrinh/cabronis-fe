import Account from "../../pages/account";
import { Route } from "../route";

const account: Route = {
  key: "account",
  component: Account,
  path: "/account",
  exact: true,
};

export default account;
