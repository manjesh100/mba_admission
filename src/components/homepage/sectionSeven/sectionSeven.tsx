import React from "react";
import CarouselSliderUser from "./carouselSliderUser";
import { EmblaOptionsType } from "embla-carousel";
import { popularServices } from "@/utils/constantData";
import Link from "next/link";
import { constImage } from "@/utils/constImage";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps"
  };
const SectionSeven: React.FC = () => {
  return (
    <>
      <div className="section_heading_2_line w-4/5 text-center mb-4 mt-12">Find talents to help you with School Selection, Essay Writing, GMAT Prep, and more.</div>
        <div className="section_heading_quote_2_line text-center mb-4">Ask a talent for help when you get stuck with nearly any topic surrounding the MBA college admission process, GMAT Prep and more.</div>
        <div className="container_width px-5">
            <div className="mt-16">
                <CarouselSliderUser slides={popularServices} options={OPTIONS} />
            </div>
            <div className="finde_talent_btn_sec">
                <Link className="default_red_btn" href={"/"}>Explore Marketplace</Link>
                <Link className="default_red_btn white_btn" href={"/"}>Become a Talent</Link>
            </div>
            <div className="study_and_earn_sec">
                <div className="left_sec">
                    <div className="title_heading">Study and earn money at the same time.</div>
                    <Link className="default_red_btn" href={"/"}>Become a Talent</Link>
                </div>
                <div className="right_sec">
                    <Image src={constImage.stydy_and_earn_vector_img} width={399} height={494} alt="" />
                </div>
            </div>
        </div>
    </>
  );
};

export default SectionSeven;