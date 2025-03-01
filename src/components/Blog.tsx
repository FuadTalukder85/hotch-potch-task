"use client";
import React, { useState } from "react";
import { BtnFull, BtnOutline } from "./common/Button";
const Blog = () => {
  const [activeItem, setActiveItem] = useState("Blog Headlines");

  const sampleHeadlines = [
    "Create original content that ranks for SEO",
    "Any mechanical keyboard enthusiasts in design?",
    "The More Important the Work, the More Important the Rest",
    "How to design a product that can grow itself 10x in year",
    "Any mechanical keyboard enthusiasts in design?",
  ];

  const menuItems = [
    "Blog Headlines",
    "Blog Intros",
    "Content Rewriter",
    "Facebook Ads",
    "Product Description",
    "PAS Copywriting Formula",
  ];

  return (
    <div className="max-w-[1085px] mx-auto p-3 md:p-0 mt-10 md:mt-20">
      <h1 className="max-w-[430px] mx-auto text-center text-3xl md:text-[42px] font-semibold md:leading-[50px]">
        Mixland helps you build beautiful website
      </h1>
      <div className="flex gap-10 flex-col md:flex-row pt-20">
        <div className="w-full max-w-xs space-y-2 p-4">
          {menuItems.map((item) => (
            <div key={item} onClick={() => setActiveItem(item)} className="">
              {activeItem === item ? (
                <BtnFull>{item}</BtnFull>
              ) : (
                <BtnOutline>{item}</BtnOutline>
              )}
            </div>
          ))}
        </div>
        <div className="flex-1 p-6 bg-[#282A37] rounded-lg">
          <div className="mb-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="text-gray-400 mt-6 px-2">
              {sampleHeadlines.length} Blog Headlines Generated
            </div>
          </div>
          <div className="space-y-6 px-2">
            {sampleHeadlines.map((headline, index) => (
              <div
                key={index}
                className="text-white text-lg font-semibold pt-5 border-t border-[#313342]"
              >
                {headline}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
