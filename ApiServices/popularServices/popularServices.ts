import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/common/config";
import { API_ENDPOINT } from "@/common/config";

export const popularServicesAPI = createApi({
    reducerPath: "POPULAR_API",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (bulider) => ({
        getPopularServicesList: bulider.query<any, void>({
            query: () => {
                return {
                    url: API_ENDPOINT.COMMON.POPULAR_SERVICES,
                    method: "GET",
                };
            },
        }),
    }),
});

export const { useGetPopularServicesListQuery } = popularServicesAPI;