import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constImage } from "@/utils/constImage";
import CarouselTestimonial from "./carouselTestimonial";
import { EmblaOptionsType } from "embla-carousel";
import { useGetTestiMonialsListQuery } from "@/ApiServices/testimonial/testimonial";

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
};
const SectionEight: React.FC = () => {
  const { data } = useGetTestiMonialsListQuery();
  return (
    <>
      <div className="container_width px-5">
        <div className="container_width flex flex-row items-center align-middle justify-between pt-16">
            <div className="section_heading basis-6/12 text-left mt-8">Our Blogs</div>
            <div className="basis-6/12 text-right">
                <Link href={"/"} className="default_red_btn">View all blogs</Link>
            </div>
        </div>
        <div className="mt-14">
          <div className="blog_list_row">
            <div className="blog_col_4">
                <div className="blog_img"><Image src={constImage.blog_img_1} width={448} height={310} alt="" /></div>
                <div className="blog_date">Jun 23, 2022</div>
                <div className="blog_title">Education as a way to grow above yourself</div>
                <div className="blog_type"><span>Education</span></div>
            </div>
            <div className="blog_col_4">
                <div className="blog_img"><Image src={constImage.blog_img_2} width={448} height={310} alt="" /></div>
                <div className="blog_date">Jun 23, 2022</div>
                <div className="blog_title">Education as a way to grow above yourself</div>
                <div className="blog_type"><span>Education</span></div>
            </div>
            <div className="blog_col_4">
                <div className="blog_img"><Image src={constImage.blog_img_3} width={448} height={310} alt="" /></div>
                <div className="blog_date">Jun 23, 2022</div>
                <div className="blog_title">Education as a way to grow above yourself</div>
                <div className="blog_type"><span>Education</span></div>
            </div>
          </div>
        </div>
        <div className="mt-36 mb-16">
            <div className="section_heading_2_line w-4/5 text-center mb-2">Testimonials</div>
            <div className="section_heading_quote_2_line text-center mb-4">Interdum et malesuada fames ac ante ipsum</div>
        </div>
        <CarouselTestimonial slides={data?.data?.testimonials?.records?.slice(1, 11)} options={OPTIONS} />
    </div>
    </>
  );
};

export default SectionEight;