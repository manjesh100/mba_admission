export type TPopularServices = {
    image: string;
    url: string;
    title?: string;
    descrip?: string;
}
export type TOurAdvisors = {
    name: string;
    url: string;
}
export type TRegisterForm = {
    user_type: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: number | string,
    isd_code: number | string,
    password:string,
    confirmPassword?: string,
}
export type TVerifyOtp = {
    otp: number
}
export type TResetPassword = {
    password: string,
    confirmPassword?: string,
}
export type TLoginForm = {
    email: string,
    password: string,
    user_type: string,
}
export type TForgotPassword = {
    email: string,
}
export type TTestimonialResponse = {
    _id: string,
    first_name: string,
    last_name: string,
    content: string,
    occupation: string,
    school: string,
}
export type TOurAdvisorsResponse = {
    designation: string,
    first_name: string,
    last_name: string,
    info: string,
    member_type: string,
    profile_image: {
        file_name: string,
        file_path: string,
        _id: string,
    },
    social_links?: {
        facebook: string,
        instagram: string,
        linkedin: string,
        twitter: string,
        _id: string,
    }
}
export type TPopularServicesResponse = {
    description: string,
    heading: string,
    service: string,
    service_type: string,
    service_image: {
        file_name: string,
        file_path: string,
        _id: string,
    },
    tags?: {
        tag: string,
        _id: string,
    }
}
export type TSchoolListResponse = {
    school: string,
    school_image: {
        file_name: string,
        file_path: string,
        _id: string,
    },
}

export type TContactQuery = {
    first_name: string,
    last_name: string,
    email: string,
    isd_code: number | null,
    phone: number | null,
    message: string,
}