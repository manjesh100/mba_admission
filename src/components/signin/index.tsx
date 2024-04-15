"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import CustomRadioButton from "@/utils/custom-components/CustomRadioButton";
import CustomCheckbox from "@/utils/custom-components/CustomCheckbox";
import Link from "next/link";
import Image from "next/image";
import { constImage } from "@/utils/constImage";
import { constURL } from "@/utils/constURL";
import { TLoginForm } from "@/utils/type";
import { validationSchema } from "@/utils/validationSchema";
import { useLoginUserMutation } from "@/ApiServices/login/loginAPI";
import { showToastSuccess, showToastError } from "@/utils/toast";
import { constantsKey } from "@/common/constantKey";

const SigninComponent: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState("buyer");
    const [isChecked, setIsChecked] = useState(false);
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.id);
    };
    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
    };
    const [ loginFormSubmit ] = useLoginUserMutation();
    const initalValues: TLoginForm =
    {
        email: '',
        password: '',
        user_type: '',
    }
    const { register, handleSubmit, formState: { errors } } = useForm<TLoginForm>({
        defaultValues: initalValues,
    });
    const onSubmit = async (data: TLoginForm) => {
        const payload = {
            email: data.email,
            password: data.password,
            user_type: selectedOption,
        }
        try {
            const response: any = await loginFormSubmit(payload);
            if (response?.data?.message === constantsKey.SUCCESS) {
                showToastSuccess("Login successfully!!");
                localStorage.setItem(constantsKey.ACCESS_TOKEN, response?.data?.data?.tokens?.access_token);
                localStorage.setItem(constantsKey.USER_NAME, `${response?.data?.data?.user_details?.first_name} ${response?.data?.data?.user_details?.last_name}`);
                window.location.href = constURL.BUYER_PROFILE;
            } else if (response?.error?.status === 400) {
                showToastError(response?.error?.data?.message);
            } else {
                showToastError("Something went rong!!");
            }
        } catch (error) {
            console.error("Mutation error:", error);
        }
    }
    return (
        <section className="sign_up_section">
            <div className="signin_signup_form_sec">
                <div className="form_title">Welcome Back, Sign In</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="user_type_section">
                        <CustomRadioButton
                            id="buyer"
                            name="Sign In as Buyer"
                            checked={selectedOption === "buyer"}
                            onChange={handleOptionChange}
                        />
                        <CustomRadioButton
                            id="seller"
                            name="Sign In as Seller"
                            checked={selectedOption === "seller"}
                            onChange={handleOptionChange}
                        />
                    </div>
                    <input type="emial" placeholder="Your email" className="txt_box_style" {...register("email", validationSchema.email)} />
                    <input type="password" placeholder="Password" className="txt_box_style" {...register("password", validationSchema.password)} />
                    <div className="flex flex-row justify-between">
                        <div>
                            <CustomCheckbox
                                id="checkbox1"
                                label="Remember Me"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                        <Link href={constURL.FORGOT_PASSWORD} className="forgot_password_link">Forgot password?</Link>
                    </div>
                    <button type="submit" className="default_maroon_btn">Sign In</button>
                    <div className="or_continue_txt">Or continue with your social media account</div>
                    <div className="social_media_login_sec">
                        <Image src={constImage.facebook_login_icon} width={149} height={54} alt="" />
                        <Image src={constImage.google_login_icon} width={149} height={54} alt="" />
                        <Image src={constImage.apple_login_icon} width={149} height={54} alt="" />
                        <Image src={constImage.linkedin_login_icon} width={149} height={54} alt="" />
                    </div>
                    <div className="user_suggestion_with_link">
                        <span>Don’t have an account?</span>
                        <Link href={constURL.REGISTER}>Sign Up</Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SigninComponent;