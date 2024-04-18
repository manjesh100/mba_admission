import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/common/config";
import { API_ENDPOINT } from "@/common/config";

export const faqAPI = createApi({
  reducerPath: "FAQ_API",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getFaqCategList: builder.query<any, void>({
      query: () => {
        return {
          url: API_ENDPOINT.COMMON.FAQ,
          method: "GET",
        };
      },
    }),
    getFaqDetails: builder.query<any, string>({
      query: (data: string) => {
        return {
          url: `${API_ENDPOINT.COMMON.FAQ_DETAILS}${data}`,
          method: "GET",
        }
      }
    }),
  }),
});

export const {
  useGetFaqCategListQuery, useGetFaqDetailsQuery
} = faqAPI;
