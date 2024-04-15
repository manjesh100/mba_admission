import { useForm } from "react-hook-form";
import { validationSchema } from "@/utils/validationSchema";
import { TResetPassword } from "@/utils/type";
import Link from "next/link";
import { constURL } from "@/utils/constURL"; 
import { useResetPasswordMutation } from "@/ApiServices/login/loginAPI";
import { showToastSuccess, showToastError } from "@/utils/toast";

const ResetPasswordPage = () => {
    const [ resetPasswordFormSubmit ] = useResetPasswordMutation();
    const initalValues: TResetPassword = {
        password: '',
        confirmPassword: ''
    }
    const { register, handleSubmit, formState: { errors }, watch } = useForm<TResetPassword>({
        defaultValues: initalValues,
    });
    const password = watch("password");
    const onSubmit = async (data: TResetPassword) => {
        const payload = {
            password: data.password,
            password_hash: `$2a$10$lgioJ6HB.7BzwO8pxFAAIuRYOTR7pidYCdlGa3DPDT4Llv4g8pwZ6`
        }
        try {
            const response: any = await resetPasswordFormSubmit(payload);
            if (response?.data?.message) {
                showToastSuccess("Password updated successfully");
            } else {
                showToastSuccess("something went wrong");
            }

        } catch (error) {
            console.error("Mutation error:", error);
        }  

    return (
        <section className="sign_up_section">
            <div className="signin_signup_form_sec reset_password_form">
                <div className="form_title">Set New Password</div>
                <p className="headin_quote">Your new password must be different to previously used passwords.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form_grouop">
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
                    </div>
                    <button type="submit" className="default_maroon_btn mt-0">Reset Password</button>
                </form>
                <div className="user_suggestion_with_link">
                    <Link href={constURL.SIGNIN}>Back To Log In</Link>
                </div>
            </div>
        </section>
    )
     
} 

} 

export default ResetPasswordPage;