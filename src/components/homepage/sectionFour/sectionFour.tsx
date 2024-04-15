import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import SchoolCarouselSlider from "./schoolCarouselSlider";
import { useGetSchoolListQuery } from "@/ApiServices/schoolList/schoolListAPI";
import { TSchoolListResponse } from "@/utils/type";

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: "auto",
  containScroll: "trimSnaps"
};
const SectionFour: React.FC = () => {
  const { data } = useGetSchoolListQuery();
  const schoolList: TSchoolListResponse[] = data?.data?.schools?.records;
  console.log('schoolList', data);
  return (
    <div className="container_width flex flex-row items-center pt-16 px-5">
        <SchoolCarouselSlider slides={schoolList} options={OPTIONS} />
    </div>
  );
};

export default SectionFour;