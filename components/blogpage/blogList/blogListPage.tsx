import React from "react";
import TipList from "./tipList";
import SuccessStories from "./successStories";
import BlogList from "./blogList";

const BlogListPage = () => {
  return (
    <>
      <div className="container_width flex flex-row items-center px-5">
        <div className="blogListContainer mb-100">
            <BlogList />
            <SuccessStories />
            <TipList />
        </div>
      </div>
    </>
  );
};

export default BlogListPage;
