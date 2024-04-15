"use client";
import React, { useState } from "react";
import CustomRadioButton from "@/utils/custom-components/CustomRadioButton";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRegisterUserMutation } from "@/ApiServices/signup/signupAPI";
import { useGetCountryListQuery } from "@/ApiServices/master/master";
import { constImage } from "@/utils/constImage";
import { constURL } from "@/utils/constURL";
import { TRegisterForm } from "@/utils/type";
import { validationSchema } from "@/utils/validationSchema";
import VerifyOtp from "./verifyOtp";
import { constantsKey } from "@/common/constantKey";
import { showToastError, showToastSuccess } from "@/utils/toast";

const RegisterComponent: React.FC = () => {
  const [otpVerifyBox, setOtpVerifyBox] = useState(false);
  const [selectedOption, setSelectedOption] = useState("buyer");
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.id);
  };
  const [addRegisterForm] = useRegisterUserMutation();
  const { data: countryList } = useGetCountryListQuery();
  const initalValues: TRegisterForm = {
    user_type: selectedOption,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    isd_code: 91,
    password: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TRegisterForm>({
    defaultValues: initalValues,
  });
  const isd_code = watch("isd_code");
  const password = watch("password");
  const phone = watch("phone");

  const onSubmit = async (data: TRegisterForm) => {
    const payload = {
      user_type: selectedOption,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: Number(data.phone),
      isd_code: Number(data.isd_code),
      password: data.password,
    };
    try {
      const response: any = await addRegisterForm(payload);
      console.log('response signup', response);
      if (response?.data?.message === constantsKey.SUCCESS) {
        showToastSuccess(`The OTP has sent to your mobile number: ${phone}`);
        setOtpVerifyBox(true);
        localStorage.setItem("signupAccesToken", response?.data?.data?.access_token);
      } else if (response?.error?.status === 400) {
        showToastError(response?.error?.data?.message);
      } else {
        showToastError("Something went rong!!");
      }
    } catch (error) {
      console.error("Mutation error:", error);
    }
  };

  return (
    <section className="sign_up_section">
      {otpVerifyBox ? (
        <VerifyOtp />
      ) : (
        <div className="signin_signup_form_sec">
          <div className="form_title">Create Your EdPlatza Account</div>
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
            <div className="colum_grid_2">
              <input
                type="name"
                placeholder="Your First Name"
                className="txt_box_style"
                {...register("first_name", validationSchema.first_name)}
              />
              <input
                type="name"
                placeholder="Your Last Name"
                className="txt_box_style"
                {...register("last_name", validationSchema.last_name)}
              />
            </div>
            <div className="error_msg">{errors.first_name?.message}</div>
            <div className="form_grouop">
              <input
                type="email"
                placeholder="Your email"
                className="txt_box_style"
                {...register("email", validationSchema.email)}
              />
              <div className="error_msg">{errors.email?.message}</div>
            </div>
            <div className="form_grouop">
              <input
                type="number"
                placeholder="Your Phone"
                className="txt_box_style phone_number"
                {...register("phone", validationSchema.phone)}
              />
              <select
                className="select_country_dropdown"
                {...register("isd_code", validationSchema.isd_code)}
              >
                {countryList?.data?.countries?.records?.map(
                  (item: any, i: number) => {
                    return (
                      <option key={`country_${i}`} value={item?.isd_code}>
                        {item?.iso_code}
                      </option>
                    );
                  }
                )}
              </select>
              <span className="isd_code_display">+{isd_code || 91}</span>
              <div className="error_msg">{errors.phone?.message}</div>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="txt_box_style"
              {...register("password", validationSchema.password)}
            />
            <div className="error_msg">{errors.password?.message}</div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="txt_box_style"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Password don't match",
              })}
            />
            <div className="error_msg">{errors.confirmPassword?.message}</div>
            <button type="submit" className="default_maroon_btn mt-0">
              Sign Up
            </button>
            <div className="or_continue_txt">
              Or continue with your social media account
            </div>
            <div className="social_media_login_sec">
              <Image
                src={constImage.facebook_login_icon}
                width={149}
                height={54}
                alt=""
              />
              <Image
                src={constImage.google_login_icon}
                width={149}
                height={54}
                alt=""
              />
              <Image
                src={constImage.apple_login_icon}
                width={149}
                height={54}
                alt=""
              />
              <Image
                src={constImage.linkedin_login_icon}
                width={149}
                height={54}
                alt=""
              />
            </div>
            <div className="user_suggestion_with_link">
              <span>Already have an account?</span>
              <Link href={constURL.SIGNIN}>Sign In</Link>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default RegisterComponent;
