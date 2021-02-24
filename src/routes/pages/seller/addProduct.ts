import { Route } from "../../route";
import AddProduct from "../../../pages/private/seller/addProduct";

const addProduct: Route = {
  key: "addProduct",
  component: AddProduct,
  path: "/addProduct",
  needAuthentication: true,
  role: "seller",
};

export default addProduct;
