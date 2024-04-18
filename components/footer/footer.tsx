"use client";
import Link from "next/link";
import { useState } from "react";
import { constImage } from "@/utils/constImage";
import Image from "next/image";
import LanguagePopup from "../modalPopup/languagePopup";
import { constURL } from "@/utils/constURL";

const Footer = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const HandleRemovePopUp = () => setOpenPopup(false);
    return (
        <div className="container_width mx-auto px-5 py-1 lg:px-10 xl:px-20">
            <div className="flex flex-col lg:flex-row lg:py-4 lg:pb-12 lg:pt-12">
                <div className="lg:w-10/12">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-3/12 mb-6 lg:mb-0">
                            <div className="footer_logo_sec">
                                <Image className="m-auto footer_logo" src={constImage.footer_logo} alt="EdPlatza" width={250} height={157} />
                            </div>
                            <div className="flex w-250 gap-3 items-center justify-center mt-6">
                                <div className="follow_us_title">Follow Us</div>
                                <Link href={"/"} className="social_media_icon"><Image src={constImage.facebook_icon} width={20} height={16} alt="Facebook" /></Link>
                                <Link href={"/"} className="social_media_icon"><Image src={constImage.twitter_icon} width={20} height={20} alt="Twitter" /></Link>
                                <Link href={"/"} className="social_media_icon"><Image src={constImage.instagram_icon} width={20} height={20} alt="Instagram" /></Link>
                                <Link href={"/"} className="social_media_icon"><Image src={constImage.linked_icon} width={20} height={20} alt="LinkedIn" /></Link>
                            </div>
                        </div>
                        <div className="lg:w-3/12 mb-6 lg:mb-0">
                            <div className="footer_link_title">About</div>
                            <ul className="footer_link">
                                <li><Link href={constURL.CAREERS}>Careers</Link></li>
                                <li><Link href={"/"}>Press</Link></li>
                                <li><Link href={constURL.CONTACT}>Contact Us</Link></li>
                                <li><Link href={constURL.FAQ}>FAQs</Link></li>
                            </ul>
                        </div>
                        <div className="lg:w-3/12 mb-6 lg:mb-0">
                            <div className="footer_link_title">Marketplace</div>
                            <ul className="footer_link">
                                <li><Link href={constURL.SERVICES}>Services</Link></li>
                            </ul>
                        </div>
                        <div className="lg:w-3/12 mb-6 lg:mb-0">
                            <div className="footer_link_title">Resources</div>
                            <ul className="footer_link">
                                <li><Link href={constURL.BLOG}>Blog</Link></li>
                                <li><Link href={"/"}>Converters</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/12 mb-6 lg:mb-0">
                    <div className="footer_link_title">Apps</div>
                    <div className="mt-6 mb-5">
                        <Image src={constImage.app_qr_code} width={100} height={100} alt="QR Code" />
                    </div>
                    <div className="footer_app_link"><Link href={"/"} className="app_store_link"><Image src={constImage.apple_app_icon} width={20} height={20} alt="iOS App" /> iOS App</Link></div>
                    <div className="footer_app_link"><Link href={"/"} className="app_store_link"><Image src={constImage.android_app_icon} width={22} height={22} alt="Android App" /> Android App</Link></div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center py-4 last_footer_sec">
                <div className="lg:w-6/12 mb-4 lg:mb-0">
                    <div className="flex justify-start lg:justify-center items-center lg:gap-8">
                        <div className="last_footer_left">
                            <div>© EdPlatza. 2022. All rights reserved.</div>
                            <Link href={constURL.TERMS_AND_CONDITIONS}>Terms & Conditions</Link>
                            <Link href={constURL.PRIVACY_POLICY}>Privacy Policy</Link>
                            <Link href={"/"}>Site Map</Link>
                        </div>
                    </div>
                </div>
                <div className="lg:w-6/12 flex justify-center lg:justify-end">
                    <div className="last_footer_right" onClick={() => setOpenPopup(true)}>
                        <ul className="footer_language_list">
                            <li><Image src={constImage.world_icon} width={17} height={17} alt="World Icon" /> Poland</li>
                            <li>English (US)</li>
                            <li>$ (USD)</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Assuming `openPopup` and `HandleRemovePopUp` are defined */}
            <LanguagePopup openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
        </div>
    );
};

export default Footer;