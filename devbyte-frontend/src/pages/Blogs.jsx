import React, { useState } from "react";
import BlogsCard from "@/components/Blogs/BlogsCard";
import { BlogsCardData } from "@/components/Blogs/BlogsCardData";
import Button from "@/components/ui/Button";
import { toast, Toaster } from "react-hot-toast";
import HeaderWrapper from "@/components/ui/Header";

const Blogs = () => {
  const [sliceStartIdx, SetsliceStartIdx] = useState(6);
  const [sliceEndIdx, SetsliceEndIdx] = useState(12);
  const [ActiveBtn, SetActiveBtn] = useState(1);

  const ButtonsText = ["Prev", 1, 2, 3, "Next"];

  const paginate = () => {
    if (ActiveBtn == 1) {
      SetsliceStartIdx(0);
      SetsliceEndIdx(6);
    } else if (ActiveBtn == 2) {
      SetsliceStartIdx(6);
      SetsliceEndIdx(12);
    } else if (ActiveBtn == 3) {
      SetsliceStartIdx(12);
      SetsliceEndIdx(18);
    } else if (ActiveBtn == "Prev") {
      if (sliceStartIdx <= 0) {
      } else {
        SetsliceStartIdx(sliceStartIdx - 6);
        SetsliceEndIdx(sliceEndIdx - 6);
      }
      // console.log("An error occured");
    } else if (ActiveBtn == "Next") {
      if (sliceEndIdx >= BlogsCardData.length - 1) {
      } else {
        SetsliceStartIdx(sliceStartIdx + 6);
        SetsliceEndIdx(sliceEndIdx + 6);
      }
    } else {
      toast.error("An error occured");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-fit">
      <Toaster />

        <HeaderWrapper className="flex justify-start w-full">
          <div className="flex flex-col justify-start text-left">
            <h2 className="text-4xl font-bold xl:text-4xl">Blog & News</h2>
            <p>Latest updates, insights, and stories from our community</p>
          </div>
        </HeaderWrapper>

      <div className=" w-full max-w-[95%]">
        <div className="  my-2 flex flex-col justify-between items-center text-center h-[89vh]">
          <div className=" h-[80%] w-full flex justify-center items-center">
            <div className="px-4 w-full max-w-[90%] h-full flex justify-around  items-center flex-col lg:flex-row">
              <div className="bg-[url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80)] bg-cover bg-no-repeat   my-4 md:my-0 h-[50%] w-full max-w-[80%] lg:max-w-[40%] lg:h-[90%]"></div>

              <div className=" h-[30%] lg:h-[50%] flex flex-col gap-2 justify-around lg:w-full lg:max-w-[50%] items-start ">
                <p className="text-[#6A5DFF]">Featued post </p>
                <p className="flex text-2xl font-bold text-start lg:text-4xl">
                  Building the future of Dev communities
                </p>
                <p className="flex text-center lg:text-start">
                  Discover how Debbyte is empowering Developers designers and
                  tech bulders with resources and oppoutunities
                </p>
                <button className="bg-gradient-to-tr  from-[#00AEEF] to-[#6A5DFF] w-full py-2 rounded-2xl text-white text-xl">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-8 ">
          <div className="flex justify-center w-full ">
            <h1 className="text-3xl font-bold">All Posts</h1>
          </div>

          <div className="flex flex-wrap justify-center border-red-800 ">
            {BlogsCardData.slice(sliceStartIdx, sliceEndIdx).map((ele, idx) => (
              <BlogsCard data={ele} key={idx} />
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-2 ">
            {ButtonsText.map((ele, idx) => (
              <Button
                key={idx}
                children={ele}
                onClick={() => {
                  SetActiveBtn(ele);
                  // prevCards();

                  paginate();
                }}
                className={`border border-gray-600 rounded-sm ${
                  ActiveBtn == ele &&
                  "bg-gradient-to-tr from-[#00AEEF] to-[#6A5DFF] text-white border-none"
                }`}
              />
            ))}
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Blogs;
