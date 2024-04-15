"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
} from "@/components/carouselButton/carouselButton";
import Image from "next/image";
import { TPopularServicesResponse } from "@/utils/type";
import { constImage } from "@/utils/constImage";
import { S3_URL } from "@/common/config";

type PropType = {
  slides: TPopularServicesResponse[];
  options?: EmblaOptionsType;
};

const PopularServicesCarouselSlider: React.FC<PropType> = (props) => {
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
    if (!emblaApi) {
      return;
    }
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides?.map((item: TPopularServicesResponse, i: number) => (
              <div className="embla__slide" key={`p_services_${i}`}>
                <div className="slider_services_content_sec">
                  <p className="description">{item?.service}</p>
                  <h2 className="service_heading">{item?.heading}</h2>
                </div>
                <Image
                  className="embla__slide__img"
                  style={{ borderRadius: "25px" }}
                  src={`${S3_URL}/${item?.service_image?.file_path}/${item?.service_image?.file_name}`}
                  alt="Your alt text"
                  width={100}
                  height={100}
                />
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

export default PopularServicesCarouselSlider;
