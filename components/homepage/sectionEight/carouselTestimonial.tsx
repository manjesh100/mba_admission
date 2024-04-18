"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { TTestimonialResponse } from "@/utils/type";
import { PrevButton, NextButton } from "@/components/carouselButton/carouselButton";
import Image from "next/image";
import { constImage } from "@/utils/constImage";

type PropType = {
  slides: TTestimonialResponse [];
  options?: EmblaOptionsType;
}

const CarouselTestimonial: React.FC<PropType> = (props) => {
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
            {slides?.map((item: TTestimonialResponse, i: number) => (
              <div className="embla__slide" key={i}>
                <div className="testimonial_grid_wrap">
                  <div className="quote_icon">
                    <Image
                      className="embla__slide__img"
                      src={constImage.testimonial_quote}
                      alt="Your alt text"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="testimonial_desc">“{item?.content}”</div>
                  <div className="user_name">{`${item?.first_name} ${item?.last_name}`}</div>
                  <div className="collage_name">{`${item?.school}`}</div>
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

export default CarouselTestimonial;
