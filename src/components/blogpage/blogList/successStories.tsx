import Image from "next/image";
import React from "react";
import { constImage } from "@/utils/constImage";

const SuccessStories = () => {
  return (
    <>
        <div className="blogBox mt-100">
          <div className="blogCategoryHeadingContainer mb-12">
            <div className="blogCategoryHeading">Success Stories</div>
            <div className="default_red_btn without_bg mt-0">View all category</div>
          </div>

          <div className="grid grid-cols-7 gap-7">
            <div className="successImageBox col-span-3">
              <Image src={constImage.successStoryImage} alt="image" width="420" height="42" />
            </div>
            <div className="successStoryContainer col-span-4">
              <div className="successStoryDate">Jun 23, 2022</div>
              <div className="successStoryTitle">Education as a way to grow above yourself</div>
              <div className="successStoryTags"><span className="tags">Success stories</span></div>
              <div className="successStoryContent">
                Nearly 40% of Americans frequently worry about their personal information getting stolen by computer hackers, a recent Gallup poll revealed. It’s no wonder: Cyber attacks and data breaches regularly make news headlines. How easy would it be for criminals to hack your website and steal sensitive information about you and your customers? Penetration testing could help you find out.
              </div>
              <div className="successUserContainer">
                <div className="successUserImage">
                  <Image src={constImage.sampleBlogUser} alt="" width="42" height="42" />
                </div>
                <div className="successUserName">Jane Smith</div>
              </div>
            </div>
          </div>

        </div>
    </>
  );
};

export default SuccessStories;
