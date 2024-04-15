"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { constURL } from "@/utils/constURL";
import { constImage } from "@/utils/constImage";
import Image from "next/image";
import LanguagePopup from "../modalPopup/languagePopup";
import { constantsKey } from "@/common/constantKey";

const Header = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const HandleRemovePopUp = () => setOpenPopup(false);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [userName, setUserName] = useState<string | null>(null);
    const nameDisplay: string[] | undefined = userName?.split(" ");

    useEffect(() => {
        setAccessToken(localStorage.getItem(constantsKey.ACCESS_TOKEN));
        setUserName(localStorage.getItem(constantsKey.USER_NAME));
    }, []);

    return (
        <>
         <div className="w-full mx-auto bg-white py-2 sticky top-0 z-10" id="header_section">
            <div className="container_width mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="header_left_sec">
                    <div className="header_logo">
                        <Link href={constURL.HOME}>
                            <Image src={constImage.logo} alt="EdPlatza" width={251} height={71} />
                        </Link>
                    </div>
                </div>
                <div className="header_mid_sec">
                    <ul className="header_navigation">
                        <li><Link href={constURL.MBA_ADMISSIONS}>MBA Admissions</Link></li>
                        <li><Link href={constURL.SELLER}>Become a Talent</Link></li>
                    </ul>
                </div>
                <div className="header_right_sec">
                    {/* <div className="search_btn_header">
                        <button type="button"><Image src={constImage.search_icon} width={16} height={16} alt="Search" /></button>
                    </div> */}
                    <div className="post_a_job_link"><Link href={"/"}>Post a Job</Link></div>
                    <div className="country_flag" onClick={() => setOpenPopup(true)}>
                        <Image src={constImage.uk_country_flag} alt="" />
                    </div>
                    {accessToken === undefined || accessToken === null ? (
                        <div className="header_sign_in_link mr-2 sm:mr-4">
                            <Link href={constURL.SIGNIN}>Sign in</Link>
                        </div>
                        ) : (
                        <div className="user_profile_circle">{nameDisplay?.map(item => item[0]).join("")}</div>
                    )}
                    <div className="header_playstore_icon"><Image src={constImage.playstore_icon} width={106} height={39} alt="Playstore" /></div>
                </div>
            </div>
        </div>
        <LanguagePopup openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
        </>
    );
};

export default Header;