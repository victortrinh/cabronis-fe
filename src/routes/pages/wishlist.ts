import { Route } from "../route";
import Wishlist from "../../pages/wishlist";

const wishlist: Route = {
  key: "wishlist",
  component: Wishlist,
  path: "/wishlist",
  exact: true,
};

export default wishlist;
