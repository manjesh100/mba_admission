import React from "react";
import Image from "next/image";
import { BlogItems } from "../blogInterface";
import Link from "next/link";
import { constImage } from "@/utils/constImage";

const CardItem: React.FC<{ items: BlogItems }> = ({ items }) => {
    return (
      <div key={items.id} className="blogCardContainer">
        <div className="thumbImage">
            <Image src={constImage.thumb_up_border} alt="image" width="30" height="30" />
            {/* <Image src={constImage.thumb_up_fill} alt="image" width="40" height="40" /> */}
        </div>
        <div className="blogCardImage">
            <Image src={items.blogThumbImage} alt={items.blogTitle} />
        </div>
        <div className="blogCardDate">{items.blogDate}</div>
        <div className="blogCardTitle"><Link href={items.blogUrl}>{items.blogTitle}</Link></div>
        <div className="blogCardTags"><span className="tags">{items.blogTags}</span></div>
      </div>
    );
  };

export default CardItem;
