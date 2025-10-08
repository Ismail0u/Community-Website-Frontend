import React from "react";
import Card from "@/components/ui/Card";
import { CircleChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const BlogSection = ({ blogPosts }) => {
  return (
    <div className="mt-28">
      <div className="text-center max-w-[1200px] mx-auto px-4">
        <h1 className="text-[28px] font-semibold">From the Devbyte Blog</h1>
        <h1 className="pt-2 text-[18px]">
          Comunity updates, tutorials and industry insights
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-6 px-4">
        {blogPosts.map((blog, bIdx) => (
          <Card key={`blog-${bIdx}`} className="space-y-3 p-3 w-[350px]">
            <img src={blog.image} alt="" className="w-full" />
            <h1 className="bg-gradient-to-r w-fit from-[#00AEEF] to-[#6A5DFF] rounded-full text-white py-[2px] px-2 text-[12px]">
              UPDATE
            </h1>
            <h1 className="text-[20px] font-semibold">{blog.title}</h1>
            <h1>{blog.description}</h1>
            <a
              className="flex gap-2 justify-center items-center  text-[12px] w-full"
              href=""
            >
              Read More <CircleChevronRight size={15} />
            </a>
          </Card>
        ))}
      </div>
      <div className="w-full flex justify-center mt-10 md:mt-12 px-4">
        <Button
          children="View All Blog Posts"
          className="bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default BlogSection;
