import React from "react";
import Link from "next/link";
import OurAdviserSlider from "./ourAdviserSlider";
import { EmblaOptionsType } from "embla-carousel";
import { ourAdvisors } from "@/utils/constantData";
import { useGetAdvisorListQuery } from "@/ApiServices/ourAdvisors/ourAdviser";
import { TOurAdvisorsResponse } from "@/utils/type";

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
};

const OurAdviser: React.FC = () => {
  const { data }= useGetAdvisorListQuery();
  const advisorList: TOurAdvisorsResponse[] = data?.data?.members?.records;
  return (
    <div className="container_width mx-auto px-5">
      {/* Section Heading and Button */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-8 md:pt-16">
        <div className="section_heading text-left mb-4 md:mb-0 md:mt-8 md:basis-1/2">
          Our Advisors
        </div>
        <div className="text-right md:text-right md:w-1/2">
          <Link className="default_red_btn" href={"/"}>
            See all advisors
          </Link>
        </div>
      </div>

      {/* Slider Component */}
      <div className="mt-14">
        <OurAdviserSlider slides={advisorList} options={OPTIONS} />
      </div>
    </div>
  );
};

export default OurAdviser;
