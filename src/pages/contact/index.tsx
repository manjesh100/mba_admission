import { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import { useGetContactDetailsQuery } from "@/ApiServices/common/commonAPI";
import { constImage } from "@/utils/constImage";
import { useGetCountryListQuery } from "@/ApiServices/master/master";
import { useContactQueryFormMutation } from "@/ApiServices/common/commonAPI";
import { TContactQuery } from "@/utils/type";
import { showToastError, showToastSuccess } from "@/utils/toast";
import { constantsKey } from "@/common/constantKey";


const ContactPage = () => {
    const [btnToggle, setBtnToggle] = useState(false);
    const { data: contactResponse } = useGetContactDetailsQuery();
    const { data: countryList } = useGetCountryListQuery();
    const [contactQueryForm] = useContactQueryFormMutation();
    
    const initialValues: TContactQuery = {
        first_name: "",
        last_name: "",
        email: "",
        isd_code: 91,
        phone: null,
        message: "",
    }
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<TContactQuery>({
        defaultValues: initialValues,
    });
    const isd_code = watch("isd_code");
    const first_name = watch("first_name");
    const last_name = watch("last_name");
    const phone = watch("phone");
    const message = watch("message");
    const email = watch("email");

    const onSubmit = async (value: TContactQuery) => {
        const payload = {
            first_name: value.first_name,
            last_name: value.last_name,
            email: value.email,
            isd_code: Number(value.isd_code),
            phone: Number(value.phone),
            message: value.message,
        }
        try {
          const response: any = await contactQueryForm(payload);
          if (response?.data?.message === constantsKey.SUCCESS) {
            showToastSuccess("Your query has been submitted!!");
          } else if (response?.error?.status === 400) {
            showToastError(response?.error?.data?.message);
          } else {
            showToastError("Something went rong!!");
          }
        } catch (error) {
          console.error("Mutation error:", error);
        }
    }

    useEffect(() => {
        if(last_name !== "" && email !== "" && message !== "" && phone !== null){
            setBtnToggle(true);
        } else {
            setBtnToggle(false);
        }
    }, [email, first_name, last_name, message, phone]);
    
    return (
        <>
        <Breadcrumb />
        <section className="full_width light_red_gray">
            <div className="container_width py-20 px-5">
                <div className="section_heading pb-16 text-center">Get in Touch</div>
                <div className="what_we_offer_sec row_1">
                    <div className="grid_3_">
                    <div className="image_icon"><Image src={constImage.what_we_offer_icon_1} width={50} height={50} alt="" /></div>
                    <div className="paragraph_2">Phone Number</div>
                    <div className="heading_1 orange">{contactResponse?.data?.contact_details?.phone || ''}</div>
                    </div>
                    <div className="grid_3_">
                    <div className="image_icon"><Image src={constImage.what_we_offer_icon_1} width={50} height={50} alt="" /></div>
                    <div className="paragraph_2">Email</div>
                    <div className="heading_1 orange">{contactResponse?.data?.contact_details?.email || ''}</div>
                    </div>
                    <div className="grid_3_">
                    <div className="image_icon"><Image src={constImage.what_we_offer_icon_1} width={50} height={50} alt="" /></div>
                    <div className="paragraph_2">Address</div>
                    <div className="heading_1 orange">{`${contactResponse?.data?.contact_details?.address?.line_01 || ''} ${contactResponse?.data?.contact_details?.address?.city || ''} ${contactResponse?.data?.contact_details?.address?.state || ''} ${contactResponse?.data?.contact_details?.address?.pin_code || ''}`}</div>
                    </div>
                </div>
            </div>
        </section>
        <section className="sign_up_section">
            <div className="signin_signup_form_sec">
                <div className="form_title">Leave Us a Message</div>
                <div className="or_continue_txt">Our team will try to get back to you within next few hours with an answer.</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="colum_grid_2">
                        <input type="text" placeholder="Your First Name" className="txt_box_style" {...register("first_name")} />
                        <input type="text" placeholder="Your Last Name" className="txt_box_style" {...register("last_name")} />
                    </div>
                    <div className="colum_grid_2">
                        <div className="form_group">
                            <input type="email" placeholder="Your email" className="txt_box_style" {...register("email")} />
                        </div>
                        <div className="form_group">
                            <input
                                type="number"
                                placeholder="Your Phone"
                                className="txt_box_style phone_number"
                                {...register("phone")}
                            />
                            <select
                                className="select_country_dropdown"
                                {...register("isd_code")}
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
                        </div>
                    </div>
                    {/* <select name="" id="" className="select_dropdown">
                        <option value="" selected>Select Theme</option>
                        <option value="">Message Theme</option>
                    </select> */}
                    <textarea id="" rows={5} className="textarea_style" placeholder="Write your message here" {...register("message")} />
                    <button type="submit" className="default_maroon_btn" disabled={btnToggle ? false : true}>Send Message</button>
                </form>
            </div>
        </section>
        </>
    );
};

export default ContactPage;