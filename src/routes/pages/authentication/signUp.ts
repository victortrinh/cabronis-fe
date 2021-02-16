import { Route } from "../../route";
import SignUp from "../../../pages/authentication/signUp";

const signUp: Route = {
  key: "signUp",
  component: SignUp,
  path: "/signUp",
  exact: true,
};

export default signUp;
