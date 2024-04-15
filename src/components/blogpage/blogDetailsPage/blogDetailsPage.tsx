import React from "react";
import Image from "next/image";
import { BlogDetails } from "../utils";
import { constImage } from "@/utils/constImage";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";

const BlogDetailsPage = () => {
  const {blogPostedBy, blogUserImage, blogPostDate, blogBannerImage, blogTitle, blogDescription}: any = BlogDetails[0];

  return (
    <>
      <Breadcrumb />
      <div className="container_width px-5">
        <div className="blogDetailsContainer">
          <div className="blogUserDetails">
            <div className="blogUser">
              <div className="blogUserImage">
                <Image src={blogUserImage} alt="" width="42" height="42" />
              </div>
              <div className="blogUserName">{blogPostedBy}</div>
            </div>
            <div className="blogPostTime">
              {blogPostDate}
            </div>
          </div>

          <div className="blogBanner">
            <Image src={blogBannerImage} width="100" height="100" alt="blogBanner" />
          </div>

          <div className="blogDescriptions">
            <div className="blogTitle">{blogTitle}</div>
            <div className="blogReadTiming">8 minute read</div>
            <div className="blogContent">
            <div dangerouslySetInnerHTML={{
              __html: blogDescription,
            }}
            />
            </div>
          </div>

        </div>

        <div className="likeArticleContainer">
          <div className="lightLabel">Liked the article?</div>
          <div className="likeButtonContainer">
            <div className="roundBorderButton redButton">
              Leave a like
              <Image src={constImage.likeIcon} width="100" height="100" alt="like" />
            </div>
            <div className="roundBorderButton orangeButton">
              Share
              <Image src={constImage.shareIcon} width="100" height="100" alt="share" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsPage;
