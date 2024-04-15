"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
} from "@/components/carouselButton/carouselButton";
import Image from "next/image";
import { TOurAdvisors } from "@/utils/type";
import { constImage } from "@/utils/constImage";
import { S3_URL } from "@/common/config";
import { TOurAdvisorsResponse } from "@/utils/type";

type PropType = {
  slides: TOurAdvisorsResponse[];
  options?: EmblaOptionsType;
};

const OurAdviserSlider: React.FC<PropType> = (props) => {
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
            {slides?.map((item: TOurAdvisorsResponse, i: number) => (
              <div className="embla__slide" key={i}>
                <div className="our_advisors_grid">
                  <div className="advisor_img">
                    <Image
                      className="embla__slide__img"
                      style={{ borderRadius: "25px" }}
                      src={`${S3_URL}/${item?.profile_image?.file_path}/${item?.profile_image?.file_name}`}
                      alt="Your alt text"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-row justify-between mb-5">
                    <div className="name">
                      {item?.first_name} {item?.last_name}
                    </div>
                    <div className="user_type_icon">
                      <Image
                        src={constImage.advisor_title_icon}
                        width={100}
                        height={30}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="advisor_msg">{item?.info}</div>
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

export default OurAdviserSlider;
