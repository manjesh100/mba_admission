import React from "react";
import { BlogListByCategory } from "../utils";
import CardItem from "./cardItems";

const BlogList = () => {
  return (
    <>
        {BlogListByCategory.map(category => (
            <div key={category.id} className="blogBox mt-100">
              <div className="blogCategoryHeadingContainer mb-12">
                <div className="blogCategoryHeading">{category.categoryName}</div>
                <div className="default_red_btn without_bg mt-0">View all category</div>
              </div>
              <div className="grid grid-cols-3 gap-7">
              {category.data.map((blog, index:number) => (
                index < 3 &&
                 <CardItem items={blog} key={blog.id} />
              ))}
              </div>
            </div>
          ))}
    </>
  );
};

export default BlogList;
