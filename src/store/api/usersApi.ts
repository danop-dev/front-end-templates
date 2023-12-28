import { api } from "@/store/api/apiConfig";
import { IUserData } from "@/types/user";

const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserById: build.query<IUserData, number>({
      query: (id) => {
        return {
          url: `/user/${id}`,
          method: "GET",
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetUserByIdQuery } = usersApi;
