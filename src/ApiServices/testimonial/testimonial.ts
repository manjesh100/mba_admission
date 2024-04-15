import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/common/config";
import { API_ENDPOINT } from "@/common/config";

export const testimonialsAPI = createApi({
  reducerPath: "TESTIMONIAlSA_API",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getTestiMonialsList: builder.query<any, void>({
      query: () => {
        return {
          url: API_ENDPOINT.COMMON.TESTIMONIAL,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetTestiMonialsListQuery } = testimonialsAPI;
