import Cart from "../../pages/cart";
import { Route } from "../route";

const cart: Route = {
  key: "cart",
  component: Cart,
  path: "/cart",
  exact: true,
};

export default cart;
