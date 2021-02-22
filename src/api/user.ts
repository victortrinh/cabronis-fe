import { getAxiosClient } from "./axiosClientFactory";

const client = getAxiosClient();

export type User = {
  email: string;
}

export type LoginData = User & {
  password: string;
};

export type RegisterData = LoginData & {
    first_name: string;
    last_name: string;
};

export type UserChangePassword = LoginData & {
    current_password: string;
    confirm_password: string;
};

const baseAuthURL = "/api/auth";
const baseUserURL = "/api/user";

export class AuthenticationAPI {
  async login(data: LoginData) {
    return this.perform("post", `${baseAuthURL}/login`, data);
  }

  async changePassword(data: UserChangePassword) {
    return this.perform("post", `${baseUserURL}/changePassword`, data);
  }

  async registerUser(data: RegisterData) {
    return this.perform("post", `${baseUserURL}/register`, data);
  }

  async perform(method: any, resource: any, data: LoginData | UserChangePassword | RegisterData | null = null) {
    return client({
      method,
      url: resource,
      data
    }).then(
      (resp: any) => ({ isError: false, response: resp.data }),
      (error: any) => ({
          isError: true,
          response: error.response?.data?.message ?? "Error with back-end"
        })
    );
  }
}