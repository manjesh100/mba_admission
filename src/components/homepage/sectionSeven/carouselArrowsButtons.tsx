import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { constImage } from "@/utils/constImage";

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="prev_btn_carousel"
      type="button"
      {...restProps}
    >
      <Image src={constImage.carousel_left_arrow} alt="" />
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="next_btn_carousel"
      type="button"
      {...restProps}
    >
      <Image src={constImage.carousel_right_arrow} alt="" />
      {children}
    </button>
  );
};
