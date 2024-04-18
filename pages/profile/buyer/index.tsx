import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import { constImage } from "@/utils/constImage";
import { useGetProfileQuery } from "@/ApiServices/common/profileAPI";

const BuyerProfilePage = () => {
    const { data } = useGetProfileQuery();
    return (
        <>
            <Breadcrumb />
            <section className="full_width_with_bg">
                <div className="container_width px-5">
                    <div className="buyer_profile_row">
                        <div className="byuer_profile_grid_1">
                            <div className="profile_img">
                                <Image src={constImage.user_default_icon} width={30} height={30} alt="" />
                            </div>
                            <div className="update_picture_icon">
                                <Image src={constImage.update_profile_img_icon} width={20} height={20} alt="" />
                                <span>Update Picture</span>
                            </div>
                            <div className="user_name">{`${data?.data?.user_info?.first_name || ''} ${data?.data?.user_info?.last_name || ''}`}</div>
                            <div className="message_btn_row">
                                <button type="button" className="message_btn">Message</button>
                            </div>
                            <ul className="social_media_ink">
                                <li><Link href="#"><Image src={constImage.facebook_icon} width={20} height={20} alt="" /></Link></li>
                                <li><Link href="#"><Image src={constImage.twitter_icon} width={20} height={20} alt="" /></Link></li>
                                <li><Link href="#"><Image src={constImage.instagram_icon} width={20} height={20} alt="" /></Link></li>
                                <li><Link href="#"><Image src={constImage.linked_icon} width={20} height={20} alt="" /></Link></li>
                            </ul>
                            <div className="member_from_txt">Member since Mar 14, 2024</div>
                        </div>
                        
                        <div className="byuer_profile_grid_2">
                            <div className="onboarding_heading_1 mb-4">About</div>
                            <p>My favorite question is what can I learn from this and I love meeting, learning from, and helping people. Over the past couple of years I have gone from completely burned out to living a life and working with intention on my own terms. I now work with individuals who could use a helping hand making sense of their own burnout. I will help you understand your unique strengths and be your biggest cheerleader as I teach you the growth process and how it can be applied to your own life and work. While most of my growth mentees see results within the first week, ongoing sessions prove to be extremely valuable for ongoing growth and support.</p>
                        </div>
                        <div className="byuer_profile_grid_3">
                            <div className="icon_with_text">
                                <Image src={constImage.location_icon} width={20} height={20} alt="" />
                                <span>London, UK</span>
                            </div>
                            <div className="icon_with_text">
                                <Image src={constImage.education_icon_on_profile} width={20} height={20} alt="" />
                                <span>English, Spanish</span>
                            </div>
                            <div className="icon_with_text">
                                <Image src={constImage.call_icon_on_profile} width={20} height={20} alt="" />
                                <span>+{data?.data?.user_info?.isd_code || ''}-{data?.data?.user_info?.phone || ''}</span>
                                <Image src={constImage.check_sign_icon} width={20} height={20} alt="" />
                            </div>
                            <div className="icon_with_text">
                                <Image src={constImage.email_icon_on_profile} width={20} height={20} alt="" />
                                <span>{data?.data?.user_info?.email || ''}</span>
                                <Image src={constImage.check_sign_icon} width={20} height={20} alt="" />
                            </div>
                            <div className="icon_with_text">
                                <Image src={constImage.date_icon_on_profile} width={20} height={20} alt="" />
                                <span>02-08-1996</span>
                            </div>
                            <div className="edit_your_profile">
                                <button type="button">
                                    <span>Edit your profile</span>
                                    <Image src={constImage.update_profile_img_icon} width={20} height={20} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BuyerProfilePage;