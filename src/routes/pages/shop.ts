import { Route } from "../route";
import { Shop } from "../../pages/home/shop";

const shop: Route = {
  key: "shop",
  component: Shop,
  path: "/shop",
  exact: true,
};

export default shop;
