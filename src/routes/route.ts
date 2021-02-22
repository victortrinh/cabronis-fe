import { RouteProps } from "react-router-dom";

export type Route = RouteProps & {
  key: string;
  needAuthentication?: boolean;
  role?: 'admin' | 'seller';
};
