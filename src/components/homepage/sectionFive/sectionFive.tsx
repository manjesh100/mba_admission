import React from "react";
import Link from "next/link";
import PopularServicesCarouselSlider from "./carouselSlider";
import { EmblaOptionsType } from "embla-carousel";
import { useGetPopularServicesListQuery } from "@/ApiServices/popularServices/popularServices";
import { TPopularServicesResponse } from "@/utils/type";
import { constURL } from "@/utils/constURL";

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: "auto",
  containScroll: "trimSnaps"
};

const SectionFive: React.FC = () => {
  const { data } = useGetPopularServicesListQuery();
  const popularServiceResponse: TPopularServicesResponse[] = data?.data?.services?.records;
  return (
    <div className="container_width px-5">
        <div className="flex flex-row items-center justify-between pt-16">
            <div className="section_heading basis-6/12 text-left mt-8">Popular Services</div>
            <div className="basis-6/12 text-right">
                <Link href={constURL.SERVICES} className="default_red_btn">See All Services</Link>
            </div>
        </div>
        <div className="mt-14">
          <PopularServicesCarouselSlider slides={popularServiceResponse} options={OPTIONS} />
        </div>
    </div>
  );
};

export default SectionFive;