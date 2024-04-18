"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton
} from "./carouselArrowsButtons";
import Image from "next/image";
import { TPopularServices } from "@/utils/type";
import { constImage } from "@/utils/constImage";
import Link from "next/link";

type PropType = {
  slides: TPopularServices[]
  options?: EmblaOptionsType
}

const CarouselSliderUser: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) {return;}
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index, i: number) => (
              <div className="embla__slide" key={i}>
                <div className="grid_box">
                  <div className="top_section">
                    <div><Image src={constImage.compare_icon} width={23} height={23} alt="" /></div>
                    <div><Image src={constImage.select_icon} width={23} height={23} alt="" /></div>
                  </div>
                  <div className="user_img">
                    <Image src={constImage.user_img} width={23} height={23} alt="" />
                  </div>
                  <div className="user_info_sec">
                    <div className="name_and_hours">
                      <div>
                        <div className="user_name"><Link href={"/"}>John Smith</Link></div>
                        <span>Top-rated seller</span>
                        <span>Consultant</span>
                      </div>
                      <div>
                        <div className="price_">$90</div>
                        <div className="time_type">/hr</div>
                      </div>
                    </div>
                    <div className="icon_with_content">
                      <Image src={constImage.location_icon} width={14} height={14} alt="" />
                      <span>London, UK</span>
                    </div>
                    <div className="icon_with_content">
                      <Image src={constImage.experience_icon} width={14} height={14} alt="" />
                      <span>5 years of experience</span>
                    </div>
                    <div className="icon_with_content">
                      <Image src={constImage.education_icon} width={14} height={14} alt="" />
                      <span>Harvard Business School</span>
                    </div>
                    <div className="tag_line_option">
                      <span>GMAT Prep</span>
                      <span>TOEFL Preperation Strategy</span>
                      <span>GRE  Preperation Strategy</span>
                    </div>
                    <div className="rating_section">
                      <div className="flex flex-row"><Image src={constImage.star_icon_1} width={18} height={18} alt="" /> (123 reviews)</div>
                      <div>34 projects completed</div>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel_buttons">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>
    </>
  );
};

export default CarouselSliderUser;
