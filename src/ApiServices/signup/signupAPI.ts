import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/common/config";
import { API_ENDPOINT } from "@/common/config";
import { TRegisterForm, TVerifyOtp } from "@/utils/type";
import { constantsKey } from "@/common/constantKey";

export const signupAPI = createApi({
  reducerPath: "SIGNUP_API",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<any, TRegisterForm>({
      query: (payload) => {
        return {
          url: `${API_ENDPOINT.AUTH.REGISTER}`,
          method: "POST",
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      }
    }),
    verifyOtp: builder.mutation<any, TVerifyOtp>({
      query: (payload) => {
        return {
          url: `${API_ENDPOINT.AUTH.VERIFY_OTP}`,
          method: "POST",
          body: payload,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("signupAccesToken")}`,
          }
        }
      }
    }),
    resendOtp: builder.mutation<any, void>({
      query: () => {
        return {
          url: `${API_ENDPOINT.AUTH.RESEND_OTP}`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("signupAccesToken")}`,
          }
        }
      }
    }),
  }),
});

export const {
  useRegisterUserMutation, useVerifyOtpMutation, useResendOtpMutation
} = signupAPI;
