import { Route } from "../route";
import Home from "../../pages/home/home";

const home: Route = {
  key: "home",
  component: Home,
  path: "/",
  exact: true,
};

export default home;
