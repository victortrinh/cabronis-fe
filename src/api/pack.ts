import { getAxiosClient } from "./axiosClientFactory";
import { Sellable } from "./sellable";

const client = getAxiosClient();

export type Pack = Sellable & {
  pack_id?: string;
};

const baseURL = "/api/pack";

export class PackAPI {
  async getAll() {
    return this.perform("get", `${baseURL}/all`);
  }

  async upload(data: any) {
    return this.performImage("post", "/api/image/save", data);
  }

  async perform(method: any, resource: any, data: Pack | null = null) {
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

  async performImage(method: any, resource: any, data: any) {
    return client({
      method,
      url: resource,
      data,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(
      (resp: any) => ({ isError: false, response: resp.data }),
      (error: any) => ({
        isError: true,
        response: error.response?.data?.message ?? "Error with back-end",
      })
    );
  }
}
