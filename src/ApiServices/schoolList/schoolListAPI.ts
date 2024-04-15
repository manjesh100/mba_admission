import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/common/config";
import { API_ENDPOINT } from "@/common/config";

export const schoolListAPI = createApi({
  reducerPath: "SCHOOL_LIST_API",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getSchoolList: builder.query<any, void>({
      query: () => {
        return {
          url: API_ENDPOINT.COMMON.SCHOOL_LIST,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetSchoolListQuery } = schoolListAPI;
