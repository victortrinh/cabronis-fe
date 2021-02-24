import { getAxiosClient } from "./axiosClientFactory";

const client = getAxiosClient();

export type User = {
  user_id?: string;
  first_name?: string;
  last_name?: string;
  email: string;
  roles?: string;
  password?: string;
};

export type UserChangePassword = {
  user_id: string;
  email: string;
  current_password: string;
  password: string;
  confirm_password: string;
};

const baseAuthURL = "/api/auth";
const baseUserURL = "/api/user";

export class AuthenticationAPI {
  async login(data: User) {
    return this.perform("post", `${baseAuthURL}/login`, data);
  }

  async changePassword(data: UserChangePassword) {
    return this.perform("post", `${baseUserURL}/changePassword`, data);
  }

  async registerUser(data: User) {
    return this.perform("post", `${baseUserURL}/register`, data);
  }

  async getRoles() {
    return this.perform("get", `${baseUserURL}/roles`);
  }

  async getUsers() {
    return this.perform("get", `${baseUserURL}/`);
  }

  async perform(method: any, resource: any, data: User | null = null) {
    return client({
      method,
      url: resource,
      data,
    }).then(
      (resp: any) => ({ isError: false, response: resp.data }),
      (error: any) => ({
        isError: true,
        response: error.response?.data?.message ?? "Error with back-end",
      })
    );
  }
}
