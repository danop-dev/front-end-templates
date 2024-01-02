import { api } from "@/store/api/apiConfig";
import { TLoginValues, TRegisterValues } from "@/types/user";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data: TRegisterValues) => {
        return {
          url: "/register",
          method: "POST",
          data,
        };
      },
    }),
    login: build.mutation({
      query: (data: TLoginValues) => {
        return {
          url: "/login",
          method: "POST",
          data,
        };
      },
    }),
    logout: build.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    user: build.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useUserQuery,
} = authApi;
