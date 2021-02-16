import { Route } from "../route";
import Cart from "../../pages/public/cart";

const cart: Route = {
  key: "cart",
  component: Cart,
  path: "/cart",
  exact: true,
};

export default cart;
