"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "@/components/carouselButton/carouselButton";
import Image from "next/image";
import { TPopularServices } from "@/utils/type";

type PropType = {
  slides: TPopularServices[]
  options?: EmblaOptionsType
}

const SpecializedSlider: React.FC<PropType> = (props) => {
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
            {slides?.map((item, i: number) => (
              <div className="embla__slide" key={i}>
                <div>
                    <Image
                    className="embla__slide__img"
                    src={item.image}
                    alt="Your alt text"
                    />
                </div>
                <div className="specialized_content">
                  <div className="title_name">{item.title}</div>
                  <div className="title_desc">{item.descrip}</div>
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

export default SpecializedSlider;
