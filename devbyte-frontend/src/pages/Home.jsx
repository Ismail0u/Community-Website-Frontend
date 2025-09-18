import React from "react";
import { Card } from "@/components/ui/card";
import { Users, Laptop, MicVocal } from "lucide-react";

const Home = () => {
  return (
    <div className="relative  overflow-hidden ">
      <div class="absolute top-8 left-20 w-[30%] md:h-64 h-40 bg-gradient-to-r from-[#00AEEF] to-transparent rounded-full blur-3xl"></div>
      <div class="absolute top-8 md:right-40 right-0 md:w-32 w-20 h-28 bg-gradient-to-r from-[#00C38A] to-transparent rounded-full blur-2xl"></div>
      <div class="absolute bottom-20 right-0 w-[20%] h-40 bg-gradient-to-r from-[#6A5DFF] to-transparent rounded-full blur-3xl"></div>

      <div class="relative z-10 flex flex-col items-center md:justify-center md:mt-0 pt-20 min-h-[calc(100vh-64px)]">
        <div className="w-[70%]">
          <h1 className="text-3xl text-[#6A5DFF] font-bold">
            DevByte Community
          </h1>
          <h1 className="text-[18px] mt-5">
            Discver a space where tech talemts share resources, showcase
            projects, and explore career opportunities
          </h1>
        </div>
        <div className="mt-7 flex gap-3 ">
          <button className="w-full text-[18px] text-nowrap px-3 border border-[#00AEEF] bg-gradient-to-r from-white to-white hover:from-[#00AEEF] hover:to-[#6A5DFF] transition-all duration-700  hover:text-white py-2 rounded-full font-semibold">
            Join Community
          </button>
          <button className="w-full text-[18px] text-nowrap px-3 border bg-[#00C38A] text-white py-2 rounded-full font-semibold">
            Learn More
          </button>
        </div>
        <div className="mt-10 w-[100%] px-7 inline-grid md:grid-cols-3 grid-cols-1 gap-5">
          <Card className=" p-10 flex r items-center gap-3 w-full bg-white/90 shadow-lg ">
            <Users />
            <div>
              <h1 className="text-[18px] font-semibold text-left">2500+</h1>
              <h1 className="text-[18px] font-semibold">Active Members</h1>
            </div>
          </Card>
          <Card className=" p-10 flex mx-auto items-center gap-3 w-full bg-white/90 shadow-lg ">
            <Laptop />
            <div>
              <h1 className="text-[18px] font-semibold text-left">150+</h1>
              <h1 className="text-[18px] font-semibold">
                Open Source Projects
              </h1>
            </div>
          </Card>
          <Card className=" p-10 flex  items-center gap-3 w-full bg-white/90 shadow-lg ">
            <MicVocal />
            <div>
              <h1 className="text-[18px] font-semibold text-left">48</h1>
              <h1 className="text-[18px] font-semibold">Events This Year</h1>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
