import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { ArrowLeft } from "lucide-react";

import { useParams } from "react-router-dom";
import { BlogsCardData } from "./BlogsCardData";

function BlogDetails() {
  const { id } = useParams();

  const blog = BlogsCardData.filter((blog) => blog.id == id)[0];
  return (
    <div className="flex flex-col md:flex-row my-10  mx-3 justify-center ">
      
      <div className=" overflow-hidden ">
        <Link to="/blogs" >
        <Button className="border-blue-500 md:border-2 hidden md:block rounded-xl pl-0 w-[120px] h-[40px]  md:hover:bg-blue-500 hover:text-white my-4 ">
          {" "}
          
            {" "}
            <div className="flex gap-4 ">
                <ArrowLeft
              className=" md:w-[20px] md:h-[20px] md:text-black  md:dark:text-white md:bg-transparent bg-black  text-white  rounded-full"
              size={30}
            />
            <h3>Back</h3>
            </div>
            
         
        </Button> </Link>
        <Link
          to="/blogs"
          className="block md:hidden bg-white w-[30px] h-[30px] rounded-full hover:bg-blue-500 my-4"
        >
          <ArrowLeft className="text-black " size={30} />
        </Link>
        <div className="flex justify-end">
        <div className=" flex  flex-col  ">
          <h1 className="font-bold tracking-wide text-2xl uppercase mb-1  ">
            {blog.title}
          </h1>
          <h4 className="dark:text-[#D9D9D9] font-light ">
            A refreshed UI for a smoother community experience
          </h4>
        </div>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src={blog.image}
            alt={blog.title}
            className="md:w-[800px] md:h-[400px] w-screen h-[200px] rounded-md  "
          />
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <h3 className="text-[#6A5DFF] text-lg font-bold text-center md:text-start ">
            Overview
          </h3>
          <p className="text-[14px] tracking-wide  md:text-start text-center font-light  ">
            {blog.description}
          </p>

          <div className="flex gap-2">
            <div className="bg-[#161B22] px-[10px] py-[5px] rounded-lg">
              <h2 className="text-white text-sm">#{blog.category}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
