import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useVerifyOtpMutation, useResendOtpMutation } from "@/ApiServices/signup/signupAPI";
import { showToastSuccess, showToastError } from "@/utils/toast";
import { constURL } from "@/utils/constURL";
import { constantsKey } from "@/common/constantKey";

type TOtpDigit = {
  digit1: string;
  digit2: string;
  digit3: string;
  digit4: string;
};

const VerifyOtp: React.FC = () => {
  const [btnToggle, setBtnToggle] = useState(false);
  const [submitOtpForm] = useVerifyOtpMutation();
  const [handleResendAPI, resendOtpResponse] = useResendOtpMutation();
  const { register, handleSubmit, watch} = useForm<TOtpDigit>();

  const digit1 = watch("digit1");
  const digit2 = watch("digit2");
  const digit3 = watch("digit3");
  const digit4 = watch("digit4");

  const handleChange = (e: any) => {
    if (!isNaN(e.target.value) && e.target.value !== "") {
      if (e.target.name === "digit1") { document.getElementById("digit2")?.focus(); }
      else if (e.target.name === "digit2") { document.getElementById("digit3")?.focus(); }
      else if (e.target.name === "digit3") { document.getElementById("digit4")?.focus(); }
    }
  }

  const handleCallResendApi = async () => {
    try {
      const response: any = await handleResendAPI();
      if (response?.data?.message === constantsKey.SUCCESS) {
        showToastSuccess(response?.data?.message);
      } else if (response?.error?.status === 400) {
        showToastError(response?.error?.data?.message);
      }
    } catch (error) {
      console.error('POST API call failed:', error);
    }
  };

  const onSubmit: SubmitHandler<TOtpDigit> = async (value) => {
    const { digit1, digit2, digit3, digit4 } = value;
    submitOtpForm({
      otp: Number(`${digit1}${digit2}${digit3}${digit4}`),
    });
    try {
      const response: any = await submitOtpForm({ otp: Number(`${digit1}${digit2}${digit3}${digit4}`)});
      console.log('response signup', response);
      if (response?.data?.message === constantsKey.SUCCESS) {
        showToastSuccess("You have registered successfully!!");
        window.location.href = constURL.SIGNIN;
      } else if (response?.error?.status === 400) {
        showToastError(response?.error?.data?.message);
      } else {
        showToastError("Something went rong!!");
      }
    } catch (error) {
      console.error("Mutation error:", error);
    }
  };

  useEffect(() => {
    if (digit1 !== "" && digit2 !== "" && digit3 !== "" && digit4 !== "") {
      setBtnToggle(true);
    } else {
      setBtnToggle(false);
    }
  }, [digit1, digit2, digit3, digit4]);

  return (
    <div className="signin_signup_form_sec">
      <div className="verify_password_box">
        <div className="form_heading_1">Verify With OTP</div>
        <p className="para_txt_heading_2">We sent an OTP to +1-9000000000</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="otp_input_box_row">
            <input
              type="text"
              id="digit1"
              minLength={1}
              maxLength={1}
              className="otp_input_box_style"
              {...register("digit1", {
                onChange: (e) => handleChange(e)
              })}
            />
            <input
              type="text"
              id="digit2"
              minLength={1}
              maxLength={1}
              className="otp_input_box_style"
              {...register("digit2", {
                onChange: (e) => handleChange(e)
              })}
            />
            <input
              type="text"
              id="digit3"
              minLength={1}
              maxLength={1}
              className="otp_input_box_style"
              {...register("digit3", {
                onChange: (e) => handleChange(e)
              })}
            />
            <input
              type="text"
              id="digit4"
              minLength={1}
              maxLength={1}
              className="otp_input_box_style"
              {...register("digit4", {
                onChange: (e) => handleChange(e)
              })}
            />
          </div>
          <button type="submit" className="default_maroon_btn mt-0" disabled={btnToggle ? false : true}>
            Verify
          </button>
        </form>
        <div className="user_suggestion_with_link">
          <span>Didn’t receive the OTP?</span>
          <button type="button" onClick={handleCallResendApi}>Click To Resend</button>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;