"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "@/components/carouselButton/carouselButton";
import Image from "next/image";
import { TSchoolListResponse } from "@/utils/type";
import { S3_URL } from "@/common/config";

type PropType = {
  slides: TSchoolListResponse[]
  options?: EmblaOptionsType
}

const SchoolCarouselSlider: React.FC<PropType> = (props) => {
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

  console.log("S3_URL", S3_URL);
  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides?.map((item: TSchoolListResponse, i: number) => (
              <div className="embla__slide school_list" key={`p_services_${i}`}>
                <Link href={"/"}>
                    <div className="image_wrapwer">
                        <Image
                        className="embla__slide__img school_images"
                        style={{borderRadius: "25px"}}
                        src={`${S3_URL}/${item?.school_image?.file_path}/${item?.school_image?.file_name}`}
                        alt="Your alt text"
                        width={100}
                        height={100}
                        />
                    </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel_buttons scholl_list">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>
    </>
  );
};

export default SchoolCarouselSlider;
