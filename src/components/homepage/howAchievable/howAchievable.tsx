"use client";
import React, { useState } from "react";
import { schoolTypeData, alumTypeData, studentTypeData } from "@/utils/constantData";
import { EmblaOptionsType } from "embla-carousel";
import TypeOneCarouselSlider from "./typeOneCarouselSlider";
import TypeTwoCarouselSlider from "./typeTwoCarouselSlider";
import TypeThreeCarouselSlider from "./typeThreeCarouselSlider";

const OPTIONS: EmblaOptionsType = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps"
  };
const HowAchievable: React.FC = () => {
    const [type1, setType1] = useState(true);
    const [type2, setType2] = useState(false);
    const [type3, setType3] = useState(false);

    const handleType1 = () => {
        setType1(true);
        setType2(false);
        setType3(false);
    };
    const handleType2 = () => {
        setType1(false);
        setType2(true);
        setType3(false);
    };
    const handleType3 = () => {
        setType1(false);
        setType2(false);
        setType3(true);
    };
  return (
    <>
      <div className="container_width px-5">
        <div className="mt-36 mb-16">
            <div className="section_heading_2_line w-4/5 text-center mb-2">How achievable is this? Take a look yourself!</div>
            <div className="flex flex-row justify-center">
                <ul className="tab_navigation_link">
                    <li className={type1 ? "active" : ""} onClick={handleType1}>School</li>
                    <li className={type2 ? "active" : ""} onClick={handleType2}>Alum</li>
                    <li className={type3 ? "active" : ""} onClick={handleType3}>Student</li>
                </ul>
            </div>
            <div className="how_achievable_carousel_container">
            {
                type1 && <TypeOneCarouselSlider slides={schoolTypeData} options={OPTIONS} />
            }
            {
                type2 && <TypeTwoCarouselSlider slides={alumTypeData} options={OPTIONS} />
            }
            {
                type3 && <TypeThreeCarouselSlider slides={studentTypeData} options={OPTIONS} />
            }
            </div>
        </div>
      </div>
    </>
  );
};

export default HowAchievable;