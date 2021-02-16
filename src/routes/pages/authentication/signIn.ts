import { Route } from "../../route";
import SignIn from "../../../pages/authentication/signIn";

const signIn: Route = {
  key: "signIn",
  component: SignIn,
  path: "/signIn",
  exact: true,
};

export default signIn;
