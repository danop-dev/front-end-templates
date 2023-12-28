import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.interceptors.request.use((request: any) => {
  // if (request.headers && localStorage.getItem("isAuthorized")) {
  //   request.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  //   request.headers["X-Authorization"] = `Bearer ${localStorage.getItem(
  //     "token"
  //   )}`;
  //   request.headers["Token"] = `${localStorage.getItem("token")}`;
  // }

  return request;
});

axios.interceptors.response.use((response: AxiosResponse) => {
  const token = response.headers.token as string;
  if (token !== undefined) {
    localStorage.setItem("token", token);
  }

  return response;
});

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });

      return {
        data: {
          ...result.data,
          status: result.status,
        },
      };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

const cacheTags: string[] = [];

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL_APP as string,
  }),
  tagTypes: cacheTags,
  endpoints: () => ({}),
});
