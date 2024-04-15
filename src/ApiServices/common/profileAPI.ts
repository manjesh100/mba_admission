import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/common/config";
import { API_ENDPOINT } from "@/common/config";
import { constantsKey } from "@/common/constantKey";

export const profileAPI = createApi({
  reducerPath: "PROFILE_API",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getProfile: builder.query<any, void>({
      query: () => {
        return {
          url: API_ENDPOINT.COMMON.PROFILE,
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem(constantsKey.ACCESS_TOKEN)}`,
          }
        };
      },
    }),
  }),
});

export const {
  useGetProfileQuery
} = profileAPI;
