import React from "react";
import { Users, Laptop, MicVocal, CircleChevronRight } from "lucide-react";
import frame28 from "@/assets/images/Frame 28.png";
import Button from "@/components/ui/Button";
import { hoverEffect } from "@/lib/HoverEffect";

const HighlightsSection = () => {
  return (
    <div className="py-[100px] bg-[#00AEEF]/[5%] dark:bg-[#00AEEF]/[10%] ">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center gap-5 lg:px-[0px] md:px-10 px-6">
        <div
          className={` p-10 flex items-center gap-3 bg-white/90 dark:bg-[#161B22] dark:text-white border border-gray-200 rounded-xl dark:border-[#2A2F36] ${hoverEffect} shadow-sm lg:w-[386px] w-full`}
        >
          <Users />
          <div>
            <h1 className="text-[20px] font-semibold text-left">2500+</h1>
            <h1 className="text-[20px] font-semibold text-nowrap text-left">
              Active Members
            </h1>
          </div>
        </div>
        <div
          className={` p-10 flex  items-center gap-3  dark:bg-[#161B22] dark:text-white border border-gray-200 rounded-xl dark:border-[#2A2F36] ${hoverEffect} bg-white/90  shadow-sm lg:w-[350px] w-full`}
        >
          <Laptop />
          <div>
            <h1 className="text-[20px] font-semibold text-left">150+</h1>
            <h1 className="text-[20px] font-semibold text-nowrap text-left">
              Open Source Projects
            </h1>
          </div>
        </div>
        <div
          className={` p-10 flex  dark:bg-[#161B22] dark:text-white border border-gray-200 rounded-xl dark:border-[#2A2F36] ${hoverEffect}  items-center gap-3  bg-white/90   lg:w-[350px] w-full`}
        >
          <MicVocal />
          <div>
            <h1 className="text-[20px] font-semibold text-left">48</h1>
            <h1 className="text-[20px] font-semibold text-nowrap text-left">
              Events This Year
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-20 lg:px-[0px] md:px-10 px-6">
        {/* Upcoming Events */}
        <div
          className={`flex flex-col  bg-white items-center dark:bg-[#161B22] dark:text-white border border-gray-200 rounded-xl dark:border-[#2A2F36] ${hoverEffect} p-4 space-y-5 shadow-sm lg:w-[681px] w-full`}
        >
          <h1 className="border-0 rounded-full p-1 text-[16px] font-bold">
            UPCOMING EVENT
          </h1>
          <h1 className="text-[24px] font-semibold">
            Tech Career Fair 2025: Unlock Your Future
          </h1>
          <h1 className="text-[16px] font-semibold">
            Friday, September 12 . 10:00 AM - 4:00 PM
          </h1>
          <h1 className="text-[16px] dark:text-gray-300 text-center">
            Join us for a full day career fair with top tech companies,
            workshop, and networking opportunities designed to help you land
            your dream role
          </h1>
          <Button
            children="Register Now"
            className="text-white transition-colors duration-500 ease-in-out bg-blue-500 hover:bg-blue-700"
          />
        </div>

        {/* Post */}
        <div
          className={`flex flex-col  bg-white items-center dark:bg-[#161B22] dark:text-white border border-gray-200 rounded-xl dark:border-[#2A2F36] ${hoverEffect} p-4 space-y-3 shadow-sm lg:w-[421px] w-full`}
        >
          <img src={frame28} alt="" className="w-[200px] h-[120px]" />
          <h1 className="text-xl font-semibold">
            How Open Source Projects Shape AI
          </h1>
          <h1 className="text-[16px] dark:text-gray-300">
            Discover how developers worldwide are collaborating on open-source
            tools that power AI, and why it matters
          </h1>
          <a
            className="flex gap-1 justify-end items-center bg-clip-text text-transparent bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] text-[14px] w-full"
            href=""
          >
            Read More <CircleChevronRight size={15} color="#6A5DFF" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HighlightsSection;
