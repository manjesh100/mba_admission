import React from "react";
import { Tips } from "../utils";
import CardItem from "./cardItems";

const TipList = () => {
  return (
    <>
        <div className="blogBox mt-100">
          <div className="blogCategoryHeadingContainer mb-12">
            <div className="blogCategoryHeading">Tips</div>
            <div className="default_red_btn without_bg mt-0">View all category</div>
          </div>
          <div className="grid grid-cols-3 gap-7">
          {Tips.map((tip, index:number) => (
            index < 3 &&
              <CardItem items={tip} key={tip.id} />
          ))}
          </div>
        </div>
    </>
  );
};

export default TipList;
