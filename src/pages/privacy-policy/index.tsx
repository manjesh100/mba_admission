"use client";
import { useState } from "react";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";

const PrivacyPolicyPage = () => {
    const [activeItem, setActiveItem] = useState<string>("Privacy Policy");

    const handleFaqCliick = (itemName: string, itemId: string) => {
        setActiveItem(itemName);
    };

    const privacyList = [
        {
            _id: "001",
            privacy_title: "Privacy Policy"
        },
        {
            _id: "002",
            privacy_title: "Information Collection"
        },
        {
            _id: "003",
            privacy_title: "EdPlatza Virtual Patent Marking"
        },
        {
            _id: "004",
            privacy_title: "API Terms of Use"
        },
        {
            _id: "005",
            privacy_title: "Nondiscrimination Statement"
        }
    ];
    return (
        <>
            <Breadcrumb />
            <br />
            <br />
            <div className="container_width px-5">
                <div className="faq_section">
                    <div className="faq_left">&nbsp;</div>
                    <div className="faq_right">
                        <div className="legal_privacy_heading">Legal Privacy Policy</div>
                    </div>
                </div>
                <div className="faq_section">
                    <div className="faq_left privacy_and_terms">
                        <ul>
                            {privacyList.map((item: any, index: any) => {
                                return (
                                    <li
                                        key={index}
                                        className={activeItem === item.privacy_title ? "active" : ""}
                                        onClick={(e) =>
                                            handleFaqCliick(item?.privacy_title, item?._id)
                                        }
                                    >
                                        {item.privacy_title}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="faq_right">
                        <div className="privacy_type_heading">{activeItem}</div>
                        {
                            activeItem === "Privacy Policy" && (
                                <div className="content_section">
                                    <div>This Privacy Policy tells you <strong>EdPlatza Global Inc.s (“EdPlatza”)</strong> policies and procedures for the collection, use, and disclosure of information through www.edplatza.com (“Site”). It includes websites, features, applications, widgets, or online services owned or controlled by EdPlatza and that post a link to this Privacy Policy (together with the Site, the “Service”). It also includes any information EdPlatza collects offline in connection with the Service.
                                        <p>This Privacy Policy describes the choices available to you for the use of, your access to, and how to update and correct your personal information . This Privacy Policy incorporates by reference the EdPlatza Global Data Processing Agreement.</p>
                                        <p>Note that we combine the information we collect from you from the Site, through the Service generally, or offline.
                                        If you have an unresolved privacy or data use concern that we have not addressed to your satisfaction, please contact our U.S.-based third-party dispute resolution provider free at https://organization_name.com.
                                        Certain features or services referenced in this Privacy Policy may not be offered on the Service at all times. Please also review our Terms of Service, which governs your use of the Service, and which is accessible at https://www.edplatza.com/legal/terms/.</p>
                                        <p>We’ve provided short summaries in this Privacy Policy (in italics throughout) to help you understand what information we collect, how we use it, and what choices or rights you may have. While these summaries help explain some of these concepts in a simple and clear way, we encourage you to read the entire Privacy Policy to understand our data practices.</p>
                                    </div>
                                </div>
                            )
                        }
                        {
                            activeItem === "Information Collection" && (
                                <div className="content_section">
                                    <div>
                                        <p>This Privacy Policy describes the choices available to you for the use of, your access to, and how to update and correct your personal information . This Privacy Policy incorporates by reference the EdPlatza Global Data Processing Agreement.</p>
                                        <p>Note that we combine the information we collect from you from the Site, through the Service generally, or offline.
                                        If you have an unresolved privacy or data use concern that we have not addressed to your satisfaction, please contact our U.S.-based third-party dispute resolution provider free at https://organization_name.com.
                                        Certain features or services referenced in this Privacy Policy may not be offered on the Service at all times. Please also review our Terms of Service, which governs your use of the Service, and which is accessible at https://www.edplatza.com/legal/terms/.</p>
                                        <p>We’ve provided short summaries in this Privacy Policy (in italics throughout) to help you understand what information we collect, how we use it, and what choices or rights you may have. While these summaries help explain some of these concepts in a simple and clear way, we encourage you to read the entire Privacy Policy to understand our data practices.</p>
                                        <p>This Privacy Policy tells you <strong>EdPlatza Global Inc.s (“EdPlatza”)</strong> policies and procedures for the collection, use, and disclosure of information through www.edplatza.com (“Site”). It includes websites, features, applications, widgets, or online services owned or controlled by EdPlatza and that post a link to this Privacy Policy (together with the Site, the “Service”). It also includes any information EdPlatza collects offline in connection with the Service.</p>
                                    </div>
                                </div>
                            )
                        }
                        {
                            activeItem === "EdPlatza Virtual Patent Marking" && (
                                <p>Note that we combine the information we collect from you from the Site, through the Service generally, or offline.
                                If you have an unresolved privacy or data use concern that we have not addressed to your satisfaction, please contact our U.S.-based third-party dispute resolution provider free at https://organization_name.com.
                                Certain features or services referenced in this Privacy Policy may not be offered on the Service at all times. Please also review our Terms of Service, which governs your use of the Service, and which is accessible at https://www.edplatza.com/legal/terms/.</p>
                            )
                        }
                        {
                            activeItem === "API Terms of Use" && (
                                <p>We’ve provided short summaries in this Privacy Policy (in italics throughout) to help you understand what information we collect, how we use it, and what choices or rights you may have. While these summaries help explain some of these concepts in a simple and clear way, we encourage you to read the entire Privacy Policy to understand our data practices.</p>
                            )
                        }
                        {
                            activeItem === "Nondiscrimination Statement" && (
                                <p>Note that we combine the information we collect from you from the Site, through the Service generally, or offline.
                                If you have an unresolved privacy or data use concern that we have not addressed to your satisfaction, please contact our U.S.-based third-party dispute resolution provider free at https://organization_name.com.
                                Certain features or services referenced in this Privacy Policy may not be offered on the Service at all times. Please also review our Terms of Service, which governs your use of the Service, and which is accessible at https://www.edplatza.com/legal/terms/.</p>
                            )
                        }
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </>
    );
};

export default PrivacyPolicyPage;
