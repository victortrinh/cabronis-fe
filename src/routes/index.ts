import { Route } from "./route";

import account from "./pages/account";
import cart from "./pages/cart";
import faq from "./pages/faq";
import home from "./pages/home";
import item from "./pages/item";
import notFound from "./pages/notFound";
import shop from "./pages/shop";
import wishlist from "./pages/wishlist";
import signIn from "./pages/authentication/signIn";
import signUp from "./pages/authentication/signUp";

const routes: Route[] = [account, cart, faq, home, item, shop, signIn, signUp, wishlist, notFound];

export default routes;
