import React, { useState } from "react";
import BlogsCard from "@/components/Blogs/BlogsCard";
import { BlogsCardData } from "@/components/Blogs/BlogsCardData";
import Button from "@/components/ui/Button";
import { toast, Toaster } from "react-hot-toast";

const Blogs = () => {
  const [sliceStartIdx, SetsliceStartIdx] = useState(6);
  const [sliceEndIdx, SetsliceEndIdx] = useState(12);
  const [ActiveBtn, SetActiveBtn] = useState(1);

  const ButtonsText = ["Prev", 1, 2, 3, "Next"];

  // const prevCards = () => {
  //   if (ActiveBtn == "prev") {
  //     if (sliceStartIdx !== 0) {
  //       SetsliceStartIdx(sliceStartIdx - 6);
  //     } else {
  //     }
  //   }
  // };

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
    <div className=" h-fit w-full flex flex-col justify-center items-center ">
      <Toaster />
      <div className="border-b-2 w-full h-[15vh] flex flex-col lg:items-start justify-center">
        <div className=" flex flex-col gap-2 w-full items-center lg:items-start text-center">
          <h2 className="font-bold text-4xl xl:text-4xl">Blog & News</h2>
          <p>Latest updates, insights, and stories from our community</p>
        </div>
      </div>

      <div className=" w-full max-w-[95%]">
        <div className="  my-2 flex flex-col justify-between items-center text-center h-[89vh]">
          <div className=" h-[80%] w-full flex justify-center items-center">
            <div className="px-4 w-full max-w-[90%] h-full flex justify-around  items-center flex-col lg:flex-row">
              <div className="bg-[url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80)] bg-cover bg-no-repeat   my-4 md:my-0 h-[50%] w-full max-w-[80%] lg:max-w-[40%] lg:h-[90%]"></div>

              <div className=" h-[30%] lg:h-[50%] flex flex-col gap-2 justify-around lg:w-full lg:max-w-[50%] items-start ">
                <p className="text-[#6A5DFF]">Featued post </p>
                <p className="  flex text-start   font-bold text-2xl lg:text-4xl ">
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

        <div className=" my-8 flex flex-col">
          <div className=" w-full flex justify-center">
            <h1 className="font-bold text-3xl">All Posts</h1>
          </div>

          <div className="flex flex-wrap  border-red-800 justify-center ">
            {BlogsCardData.slice(sliceStartIdx, sliceEndIdx).map((ele, idx) => (
              <BlogsCard data={ele} key={idx} />
            ))}
          </div>

          <div className=" flex justify-center gap-2 mt-2">
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
