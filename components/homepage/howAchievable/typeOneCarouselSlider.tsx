"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "@/components/carouselButton/carouselButton";
import Image from "next/image";
import { TOurAdvisors } from "@/utils/type";
import { constImage } from "@/utils/constImage";

type PropType = {
  slides: TOurAdvisors[]
  options?: EmblaOptionsType
}

const TypeOneCarouselSlider: React.FC<PropType> = (props) => {
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
            {slides.map((item, i: number) => (
              <div className="embla__slide" key={i}>
                <div className="our_advisors_grid without_border">
                    <div className="advisor_img"><Image className="embla__slide__img" src={item.url} width={280} height={350} alt="Your alt text" /></div>
                    <div className="flex flex-row justify-between mb-5">
                        <div className="date_txt">Jun 23, 2022</div>
                        <div className="user_type_icon"><Image src={constImage.advisor_title_icon} width={100} height={30} alt="" /></div>
                    </div>
                    <div className="title_">{item.name}</div>
                    <div className="description_">The student loan debt crisis raises many questions like - where does all of that college debt come from and how did the US manage to accumulate $1.6 trillion in student loan debt? Why does the student loan program keep becoming more and more expensive?</div>
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

export default TypeOneCarouselSlider;
