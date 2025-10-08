import React from "react";
import Card from "@/components/ui/Card";
import { Users, Laptop, MicVocal, CircleChevronRight } from "lucide-react";
import frame28 from "@/assets/images/Frame 28.png";
import Button from "@/components/ui/Button";

const HighlightsSection = () => {
  return (
    <div className="mt-28 ">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-wrap justify-center gap-6">
        <Card className=" p-10 flex items-center gap-3 bg-white/90 dark:bg-black shadow-lg w-[350px] ">
          <Users />
          <div>
            <h1 className="text-[20px] font-semibold text-left">2500+</h1>
            <h1 className="text-[20px] font-semibold text-nowrap text-left">
              Active Members
            </h1>
          </div>
        </Card>
        <Card className=" p-10 flex  items-center gap-3 bg-white/90 dark:bg-black shadow-lg w-[350px] ">
          <Laptop />
          <div>
            <h1 className="text-[20px] font-semibold text-left">150+</h1>
            <h1 className="text-[20px] font-semibold text-nowrap text-left">
              Open Source Projects
            </h1>
          </div>
        </Card>
        <Card className=" p-10 flex  items-center gap-3  bg-white/90 dark:bg-black shadow-lg w-[350px] ">
          <MicVocal />
          <div>
            <h1 className="text-[20px] font-semibold text-left">48</h1>
            <h1 className="text-[20px] font-semibold text-nowrap text-left">
              Events This Year
            </h1>
          </div>
        </Card>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {/* Upcoming Events */}
        <Card className="flex flex-col items-center p-4 space-y-3 shadow-2xl md:w-[681px] w-[350px]">
          <h1 className="border-[1px] border-[#00C38A] rounded-full p-1 text-[12px] font-semibold">
            UPCOMING EVENT
          </h1>
          <h1 className="text-[24px] font-semibold">
            Tech Career Fair 2025: Unlock Your Future
          </h1>
          <h1 className="text-[16px] font-semibold">
            Friday, September 12 . 10:00 AM - 4:00 PM
          </h1>
          <h1 className="text-[16px]">
            Join us for a full day career fair with top tech companies,
            workshop, and networking opportunities designed to help you land
            your dream role
          </h1>
          <Button
            children="Register Now"
            className="bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-500 ease-in-out"
          />
        </Card>

        {/* Post */}
        <Card className="flex flex-col items-center p-4 space-y-3 shadow-2xl md:w-[421px] w-[350px]">
          <img src={frame28} alt="" className="w-[200px] h-[120px]" />
          <h1 className="text-xl font-semibold">
            How Open Source Projects Shape AI
          </h1>
          <h1 className="text-[16px]">
            Discover how developers worldwide are collaborating on open-source
            tools that power AI, and why it matters
          </h1>
          <a
            className="flex gap-1 justify-end items-center bg-clip-text text-transparent bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] text-[14px] w-full"
            href=""
          >
            Read More <CircleChevronRight size={15} color="#6A5DFF" />
          </a>
        </Card>
      </div>
    </div>
  );
};

export default HighlightsSection;
