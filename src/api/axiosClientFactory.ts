import axios from "axios";

import { authenticationToken } from "../storage/authentication";

import { env } from "./env";

export const getAxiosClient = () => {
  const client = axios.create({
    baseURL: env.baseUrl
  });

  client.interceptors.request.use(function(config) {
    const token = authenticationToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return client;
};
