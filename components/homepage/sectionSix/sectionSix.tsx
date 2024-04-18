import React from "react";
import { constImage } from "@/utils/constImage";
import Image from "next/image";
import Link from "next/link";

const SectionSix: React.FC = () => {
    return (
        <>
            <div className="text-center mb-4 mt-32">
                <div className="section_heading">How it works</div>
                <div className="section_heading_quote mb-4">Get insights you never get by just watching a course or reading blog posts.</div>
                <div className="container_width mx-auto flex flex-col md:flex-row items-start pt-7 px-5">
                    <div className="md:w-1/3 text-left py-4 how_it_works">
                        <div className="icon_img"><Image src={constImage.how_it_works_icon_1} alt="" width={70} height={70} /></div>
                        <div className="title_heading mt-4">1. Find the right curator</div>
                        <p className="mt-2">It is important that you pick one which is the right fit, as an MBA is a significant investment of time and money.</p>
                    </div>
                    <div className="md:w-1/3 text-left py-4 how_it_works">
                        <div className="icon_img"><Image src={constImage.how_it_works_icon_2} alt="" width={70} height={70} /></div>
                        <div className="title_heading mt-4">2. Pay for the training program</div>
                        <p className="mt-2">Choosing a school and program is a very personal decision that will come down to a confluence of factors such as intended career path.</p>
                    </div>
                    <div className="md:w-1/3 text-left py-4 how_it_works">
                        <div className="icon_img"><Image src={constImage.how_it_works_icon_3} alt="" width={70} height={70} /></div>
                        <div className="title_heading mt-4">3. Receive an acceptance letter and enjoy</div>
                        <p className="mt-2">MBA programs for working managers also have a variety of names and formats. The most common are the part-time MBA and Executive MBA.</p>
                    </div>
                </div>
                <div className="container_width mx-auto flex flex-col md:flex-row items-center pt-20 px-5">
                    <div className="w-full getting_an_mba_sec">
                        <Image className="w-full" src={constImage.getting_an_mba_bg} width={1400} height={571} alt="" />
                        <div className="getting_an_mba_content text-center mt-6 md:text-left">
                            <div className="title_heading">Getting an MBA without a GMAT/TOEFL is possible with our help</div>
                            <div className="heading_quote mt-2">Contact us and we will help you find the best option</div>
                            <div className="contact_btn mt-4"><Link className="default_red_btn" href="/">Contact us</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionSix;