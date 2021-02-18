import { Route } from "../route";
import Item from "../../pages/public/item";

const item: Route = {
  key: "item",
  component: Item,
  path: "/item/:id"
};

export default item;
