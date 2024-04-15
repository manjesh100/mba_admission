import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/common/config";
import { API_ENDPOINT } from "@/common/config";

export const masterAPI = createApi({
  reducerPath: "MASTER_API",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getCountryList: builder.query<any, void>({
      query: () => {
        return {
          url: API_ENDPOINT.COMMON.COUNTRY_LIST,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetCountryListQuery
} = masterAPI;
