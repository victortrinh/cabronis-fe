import { Route } from "../../route";
import Users from "../../../pages/private/admin/users";

const users: Route = {
  key: "users",
  component: Users,
  path: "/users",
  needAuthentication: true,
  role: 'admin'
};

export default users;
