import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/common/config";
import { API_ENDPOINT } from "@/common/config";
import { TContactQuery } from "@/utils/type";

export const commonAPI = createApi({
  reducerPath: "COMMON_API",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getContactDetails: builder.query<any, void>({
      query: () => {
        return {
          url: API_ENDPOINT.COMMON.CONTACT_DETAILS,
          method: "GET",
        };
      },
    }),
    getlanguageList: builder.query<any, void>({
      query: () => {
        return {
          url: API_ENDPOINT.COMMON.LANGUAGE_LIST,
          method: "GET",
        };
      },
    }),
    contactQueryForm: builder.mutation<any, TContactQuery>({
      query: (payload) => {
        return {
          url: API_ENDPOINT.COMMON.CONTACT_QUERY,
          method: "POST",
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
  }),
});

export const {
  useGetContactDetailsQuery, useContactQueryFormMutation, useGetlanguageListQuery,
} = commonAPI;
