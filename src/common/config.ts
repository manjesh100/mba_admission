export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const S3_URL = process.env.NEXT_PUBLIC_S3_URL;

// eslint-disable-next-line import/no-anonymous-default-export
export const API_ENDPOINT = {
  AUTH: {
    LOGIN: '/app/auth/email-login',
    REGISTER: '/app/auth/register',
    VERIFY_OTP: '/app/auth/verify-temp-otp',
    RESEND_OTP: '/app/auth/resend-temp-otp',
    FORGOT_PASSWORD: '/app/auth/forgot-password',
    RESET_PASSWORD: '/app/auth/reset-password',
  },
  COMMON: {
    FAQ: '/app/master/faq-category-list?page=1',
    FAQ_DETAILS: '/app/faq/list?faq_category_id=',
    COUNTRY_LIST: '/app/master/country-list',
    TESTIMONIAL: '/app/testimonial/list?page=1&limit=100',
    POPULAR_SERVICES: 'app/service/list?service_type=popular&page=1&limit=100',
    OUR_ADVISORS: 'app/member/list?member_type=advisor',
    PROFILE: '/app/profile',
    SCHOOL_LIST: '/app/school/list?page=1&limit=100',
    CONTACT_DETAILS: '/app/contact/details',
    CONTACT_QUERY: '/common/query/save',
  },
};
