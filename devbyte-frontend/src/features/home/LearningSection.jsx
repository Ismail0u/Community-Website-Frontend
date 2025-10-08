import React from "react";
import Card from "@/components/ui/Card";
import { CircleChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const LearningSection = ({ learningData }) => {
  return (
    <div className="mt-28">
      <div className="text-center max-w:[1200px] mx-auto px-4">
        <h1 className="text-[28px] font-semibold">Learn, Share, Grow</h1>
        <h1 className="pt-2 text-[18px]">
          Explore articles, tutorials, and resources from community memebers
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8  mt-7 px-4">
        {learningData.map((data, idx) => (
          <Card
            key={`learn-${idx}`}
            className="p-3 text-left space-y-2 shadow-xl w-[356px]"
          >
            <img src={data.image} alt="" className="w-full" />
            <h1 className="w-fit bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] rounded-full text-white py-[2px] px-2 text-[12px]">
              {data.tag}
            </h1>
            <h1 className="text-[20px] font-semibold">{data.title}</h1>
            <h1 className="line-clamp-3 text-[16px]">{data.body}</h1>
            <a
              className="flex gap-2 justify-start items-center bg-clip-text text-transparent bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] text-[14px] w-full"
              href=""
            >
              Read More <CircleChevronRight size={15} color="#00AEEF" />
            </a>
          </Card>
        ))}
      </div>
      <div className="w-full flex justify-center mt-10 md:mt-12 px-4">
        <Button
          children="Explore Learning Hub"
          className="bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default LearningSection;
