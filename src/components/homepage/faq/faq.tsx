"use client";
import React from "react";
import FaqPage from "@/pages/faq";

const FaqComponent: React.FC = () => {  
  return (
    <>
      <div className="mt-24 mb-16"><div className="section_heading_2_line w-4/5 text-center mb-2">FAQs</div></div>
      <FaqPage />
    </>
  );
};

export default FaqComponent;