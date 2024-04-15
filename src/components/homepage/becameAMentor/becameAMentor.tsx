import React from "react";
import { constImage } from "@/utils/constImage";
import Link from "next/link";
import Image from "next/image";

const BecameAMentor: React.FC = () => {
  return (
    <>
      <div className="container_width px-5">
        <div className="advetisment_grid_2">
            <div className="box">Advertisement<br />Section</div>
            <div className="box">Advertisement<br />Section</div>
        </div>
            <div className="study_and_earn_sec pink_gradiant">
                <div className="right_sec">
                    <Image src={constImage.become_a_mentor} width={399} height={494} alt="" />
                </div>
                <div className="left_sec">
                    <div className="title_heading">Sign up to become mentor!</div>
                    <Link className="default_red_btn" href={"/"}>Become a Mentor</Link>
                </div>
                
            </div>
        </div>
    </>
  );
};

export default BecameAMentor;