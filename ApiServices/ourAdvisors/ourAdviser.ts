import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/common/config";
import { API_ENDPOINT } from "@/common/config";

export const ourAdvisorsAPI = createApi({
  reducerPath: "ADVISOR_API",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getAdvisorList: builder.query<any, void>({
      query: () => {
        return {
          url: API_ENDPOINT.COMMON.OUR_ADVISORS,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAdvisorListQuery } = ourAdvisorsAPI;
