import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/common/config";
import { API_ENDPOINT } from "@/common/config";
import { TLoginForm } from "@/utils/type";

export const loginAPI = createApi({
  reducerPath: "LOGIN_API",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<any, TLoginForm>({
      query: (payload) => {
        return {
          url: `${API_ENDPOINT.AUTH.LOGIN}`,
          method: "POST",
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      }
    }),
    forgotPassword: builder.mutation<any, any>({
      query: (payload) => {
        return {
          url: `${API_ENDPOINT.AUTH.FORGOT_PASSWORD}`,
          method: "POST",
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      }
    }),
    resetPassword:builder.mutation<any, any>({
      query:(payload)=>{
        return{
           url: `${API_ENDPOINT.AUTH.RESET_PASSWORD}`,
           method:"POST",
           body:payload,
           headers:{
            'Content-type': 'application/json; charset=UTF-8',
           },
        }
      }
    }),
  }),
});

export const {
  useLoginUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = loginAPI;
