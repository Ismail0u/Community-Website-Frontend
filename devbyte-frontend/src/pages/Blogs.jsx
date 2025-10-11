import React from "react";
import BlogsCard from "@/components/Blogs/BlogsCard";
import { BlogsCardData } from "@/components/Blogs/BlogsCardData";

const Blogs = () => {
  return (
    // Cont
    <div className=" h-fit w-full flex justify-center items-center ">
      {/* Child */}
      <div className=" w-full max-w-[95%]">
        {/* Blog posts */}

        <div className=" flex flex-col justify-between items-center text-center  border-2 border-red-600 h-[89vh]">
          <div className="border-2 border-red-900 w-full h-[15%] flex flex-col lg:items-start">
            <h2 className="font-bold text-3xl">Blog & News</h2>
            <p>Latest updates, insights, and stories from our community</p>
          </div>

          {/* Featured post card */}
          <div className="border-2 border-gray-600 h-[80%] w-full flex justify-center items-center">
            <div className="border-4 border-blue-400 w-full max-w-[90%] h-full flex justify-between  items-center flex-col lg:flex-row">
              {/* image card */}
              <div className="bg-[url(``)]  border-2 border-green-600 h-[50%] w-full max-w-[80%] lg:max-w-[40%] lg:h-[90%]">
                {/* Blog posts image */}
              </div>

              {/* contents */}
              <div className="border-2 border-indigo-600 h-[50%] flex flex-col justify-around lg:w-full lg:max-w-[50%] ">
                <p>Featued post </p>
                <h2 className="font-bold text-2xl">
                  Building the future of Dev communities
                </h2>
                <p>
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

        {/* All posts */}
        <div className="border-2 border-blue-400 my-8 flex flex-col">
          <div className="border-2 border-sky-400 w-full flex justify-center">
            <h1 className="font-bold text-3xl">All Posts</h1>
          </div>

          <div className="flex flex-wrap  border-red-800 justify-center ">
            {BlogsCardData.slice(0, 6).map((ele, idx) => (
              <BlogsCard data={ele} key={idx} />
            ))}
          </div>

          {/* Buttons */}
          <div></div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Blogs;
