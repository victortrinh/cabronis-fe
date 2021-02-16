import { Route } from "../route";
import Wishlist from "../../pages/private/wishlist";

const wishlist: Route = {
  key: "wishlist",
  component: Wishlist,
  path: "/wishlist",
  needAuthentication: true,
  exact: true,
};

export default wishlist;
