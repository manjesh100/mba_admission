import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { faqAPI } from "./ApiServices/common/faq";
import { signupAPI } from "./ApiServices/signup/signupAPI";
import { masterAPI } from "./ApiServices/master/master";
import { loginAPI } from "./ApiServices/login/loginAPI";
import { testimonialsAPI } from "./ApiServices/testimonial/testimonial";
import { popularServicesAPI } from "./ApiServices/popularServices/popularServices";
import { ourAdvisorsAPI } from "./ApiServices/ourAdvisors/ourAdviser";
import { profileAPI } from "./ApiServices/common/profileAPI";
import { schoolListAPI } from "./ApiServices/schoolList/schoolListAPI";
import { commonAPI } from "./ApiServices/common/commonAPI";
import signupSliceReducer from "./ApiServices/signup/signupSlice";

export const store = configureStore({
  reducer: {
    [faqAPI.reducerPath]: faqAPI.reducer,
    [signupAPI.reducerPath]: signupAPI.reducer,
    [masterAPI.reducerPath]: masterAPI.reducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
    [testimonialsAPI.reducerPath]: testimonialsAPI.reducer,
    [popularServicesAPI.reducerPath]: popularServicesAPI.reducer,
    [ourAdvisorsAPI.reducerPath]: ourAdvisorsAPI.reducer,
    [profileAPI.reducerPath]: profileAPI.reducer,
    [schoolListAPI.reducerPath]: schoolListAPI.reducer,
    [commonAPI.reducerPath]: commonAPI.reducer,
    signup: signupSliceReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
        faqAPI.middleware,
        signupAPI.middleware,
        masterAPI.middleware,
        loginAPI.middleware,
        testimonialsAPI.middleware,
        popularServicesAPI.middleware,
        ourAdvisorsAPI.middleware,
        profileAPI.middleware,
        schoolListAPI.middleware,
        commonAPI.middleware,
    );
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
