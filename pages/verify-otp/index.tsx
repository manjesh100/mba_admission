import { constImage } from "@/utils/constImage";
import { constURL } from "@/utils/constURL";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const VerifyMobileOtp: React.FC = () => {
  return (
    <section className="sign_up_section">
            
                <div className="signin_signup_form_sec">
                  <div className="verify_otp_form">
                    <div className="form_title">Verify with OTP</div>
                    <div className="otp_sent_message">We sent an OTP to +1-9000000000</div>
                    <form>
                        <div className="otp_input_box_sec">
                          <input type="text" maxLength={1} className="otp_text_box" />
                          <input type="text" className="otp_text_box" />
                          <input type="text" className="otp_text_box" />
                          <input type="text" className="otp_text_box" />
                        </div>
                        <div className="colum_grid_2">
                            <button type="submit" className="default_maroon_btn mt-0">Verify</button>
                        </div>
                        <div className="dont_receive_txt">
                          <span>Didn’t receive the OTP?</span>
                          <button type="button">Click to resend</button>
                        </div>
                        <div className="back_to_signin">
                          <Image src={constImage.back_arrow_sign} width={24} height={23} alt="" />
                          <Link href={constURL.REGISTER} className="">Back To Sign Up</Link>
                        </div>
                    </form>
                    </div>
                </div>
        </section>
  );
};

export default VerifyMobileOtp;