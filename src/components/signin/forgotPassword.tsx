import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useForgotPasswordMutation } from "@/ApiServices/login/loginAPI";
import { constURL } from "@/utils/constURL";
import { TForgotPassword } from "@/utils/type";
import { validationSchema } from "@/utils/validationSchema";
import { showToastError } from "@/utils/toast";

const ForgotPassword: React.FC = () => {
    const [ forgotSubmit, data ] = useForgotPasswordMutation();
    const forgotResponse: any = data;
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<TForgotPassword>({
        defaultValues: {
            email: '',
        },
    });
    const email = watch("email");
    const onSubmit = async (data: TForgotPassword) => {
        forgotSubmit({
            email: data.email,
        });
        try {
            const response: any = await forgotSubmit({email: data.email});
            if (response?.error?.status === 400) {
                showToastError(response?.error?.data?.message);
            }
        } catch (error) {
            console.error("Mutation error:", error);
        }
    };
    return (
        <section className="sign_up_section">
                <div className="signin_signup_form_sec">
                    {
                        forgotResponse?.status === 'fulfilled' && <div className="succes_message">{data?.data?.message} ({email})</div>
                    }
                    
                    <div className="form_title">Forgot Password?</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="emial" placeholder="Your email" className="txt_box_style" {...register("email", validationSchema.email)} />
                        <div className="error_msg">{errors.email?.message}</div>
                        <div className="colum_grid_2">
                            <button type="submit" className="default_maroon_btn mt-0">Reset Password</button>
                            <Link href={constURL.SIGNIN} className="default_maroon_btn mt-0 without_bg">Back To Sign In</Link>
                        </div>
                    </form>
                </div>
        </section>
    );
};

export default ForgotPassword;