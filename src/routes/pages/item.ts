import Item from "../../pages/item";
import { Route } from "../route";

const item: Route = {
  key: "item",
  component: Item,
  path: "/item/:id",
  exact: true,
};

export default item;
