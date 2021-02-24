import { Route } from "./route";

import account from "./pages/account";
import cart from "./pages/cart";
import faq from "./pages/faq";
import home from "./pages/home";
import item from "./pages/item";
import notFound from "./pages/notFound";
import shop from "./pages/shop";
import wishlist from "./pages/wishlist";
import users from "./pages/admin/users";
import signIn from "./pages/authentication/signIn";
import signUp from "./pages/authentication/signUp";
import addProduct from "./pages/seller/addProduct";
import sellable from "./pages/seller/sellable";

const routes: Route[] = [
  account,
  cart,
  faq,
  item,
  shop,
  signIn,
  signUp,
  wishlist,
  home,
  users,
  addProduct,
  sellable,
  notFound,
];

export default routes;
