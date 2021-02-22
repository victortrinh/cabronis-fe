import { Route } from "../../route";
import Sellable from "../../../pages/private/seller/sellable";

const sellable: Route = {
  key: "sellable",
  component: Sellable,
  path: "/sellable",
  needAuthentication: true,
  role: 'seller'
};

export default sellable;
