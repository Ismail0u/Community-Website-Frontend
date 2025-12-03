import React from "react";
import Card from "@/components/ui/Card";
import { CircleChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { hoverEffect } from "@/lib/HoverEffect";

const LearningSection = ({ learningData }) => {
  return (
    <div className=" bg-[#00AEEF]/[5%] dark:bg-[#00AEEF]/[10%] py-[100px]">
      <div className="text-center max-w:[1200px] mx-auto px-4">
        <h1 className="text-[28px] font-semibold">Learn, Share, Grow</h1>
        <h1 className="pt-2 text-[18px]">
          Explore articles, tutorials, and resources from community memebers
        </h1>
      </div>
      <div className="grid gap-4 justify-center 2xl-grid-col-4 xl-grid-col-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:px-[90px] md:px-10 px-6 mt-7">
        {learningData.map((data, idx) => (
          <div
            key={`learn-${idx}`}
            className={`p-3 text-left space-y-3 shadow-sm bg-white dark:bg-[#161B22] border border-gray-200 rounded-xl dark:border-[#2A2F36] dark:text-white ${hoverEffect}`}
          >
            <img src={data.image} alt="" className="w-full" />
            <h1 className="w-fit bg-[#fafafa]  rounded-sm  text-black dark:bg-black border border-gray-200 dark:border-[#2A2F36] dark:text-gray-300 font-semibold py-[2px] px-2 text-[12px]">
              {data.tag}
            </h1>

            <h1 className="text-[20px] font-semibold ">{data.title}</h1>
            <h1 className="line-clamp-3 text-[16px]  dark:text-gray-300">
              {data.body}
            </h1>
            <a
              className="flex gap-2 justify-start items-center bg-clip-text text-transparent bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] text-[14px] w-full"
              href=""
            >
              Read More <CircleChevronRight size={15} color="#00AEEF" />
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full px-4 mt-10 md:mt-12">
        <Button
          children="Explore Learning Hub"
          className="text-white transition-colors duration-500 ease-in-out bg-blue-500 hover:bg-blue-700"
        />
      </div>
    </div>
  );
};

export default LearningSection;
