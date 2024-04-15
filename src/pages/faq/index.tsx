"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  useGetFaqCategListQuery,
  useGetFaqDetailsQuery,
} from "@/ApiServices/common/faq";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import FaqMbaAdmissions from "@/components/homepage/faq/faqMbaAdmissions";
import { constImage } from "@/utils/constImage";
import { constURL } from "@/utils/constURL";

const FaqPage = () => {
  const route = useRouter();
  const [activeItem, setActiveItem] = useState<string>("General");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const { data: faqCategList } = useGetFaqCategListQuery();
  const {
    data: faqDetails,
    isLoading,
    refetch,
  } = useGetFaqDetailsQuery(selectedCategoryId);

  const faqCategoryList = faqCategList?.data.faq_categories?.records;
  const faqDetailsResponse = faqDetails?.data.faqs?.records?.map(
    (item: any) => ({
      faq_question: item.faq_question,
      faq_answer: item.faq_answer,
    })
  );
  const handleFaqCliick = (itemName: string, itemId: string) => {
    setActiveItem(itemName);
    setSelectedCategoryId(itemId);
    refetch();
  };
  useEffect(() => {
    if (faqCategList) {
      setSelectedCategoryId(faqCategList?.data?.faq_categories?.records[0]._id);
    }
  }, [faqCategList]);
  return (
    <>
      {route.asPath === constURL.FAQ && (
        <>
          <Breadcrumb />
          <div className="container_width flex flex-row items-center py-32 px-5">
            <div className="w-1/2 text-left py-10 text-black">
              <div className="text-4xl font-semibold line-clamp-6 leading-tight">
                Have Questions? We Got You.
              </div>
              <div className="text-2xl mb-4 mt-4 font-medium">
                Browse presented categories to find the help you need
              </div>
              <div className="faq_search">
                <input
                  type="text"
                  name="faqSearch"
                  placeholder="Start Typing"
                  className="txt_box_style"
                />
                <button type="button" className="search_btn">
                  Search
                </button>
              </div>
            </div>
            <div className="w-1/2 text-center py-4 text-white relative pl-20">
              <div className="w-full text-center">
                <Image
                  className="margin_auto_0"
                  src={constImage.faq_page_vector_img}
                  alt=""
                  width={450}
                />
              </div>
            </div>
          </div>
        </>
      )}
      <div className="container_width px-5">
        {route.asPath === constURL.FAQ && (
          <div className="faq_section">
            <div className="faq_left">&nbsp;</div>
            <div className="faq_right">
              <div className="faq_type_heading">{activeItem}</div>
            </div>
          </div>
        )}
        <div className="faq_section">
          <div className="faq_left">
            <ul>
              {faqCategoryList?.map((item: any, index: any) => {
                return (
                  <li
                    key={index}
                    className={activeItem === item.faq_category ? "active" : ""}
                    onClick={(e) =>
                      handleFaqCliick(item?.faq_category, item?._id)
                    }
                  >
                    {item.faq_category}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="faq_right">
            {isLoading && (
              <div className="open_loading">
                <div className="spin_loading"></div>
              </div>
            )}
            <div className="accordion">
              <FaqMbaAdmissions faqDetailsResponse={faqDetailsResponse} />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default FaqPage;
