import React from "react";
import Card from "@/components/ui/Card";
import { FaGithub } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import { hoverEffect } from "@/lib/HoverEffect";

const ProjectsSection = ({ projects }) => {
  return (
    <div className="py-[100px]">
      <div className="text-center max-w-[1200px] mx-auto px-4">
        <h1 className="text-[28px] font-semibold">Community Projects</h1>
        <h1 className="pt-2 text-[18px]">
          Discover and contribute to pen-source projects built by DevByte
          members
        </h1>
      </div>
      <div className="mt-7 grid gap-4 justify-center 2xl-grid-col-4 xl-grid-col-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:px-[90px] md:px-10 px-6">
        {projects.map((project, pIdx) => (
          <div
            key={`project-${pIdx}`}
            className={`p-5 shadow-sm space-y-5 dark:bg-[#161B22] border border-gray-200 rounded-xl dark:border-[#2A2F36] dark:text-white ${hoverEffect}`}
          >
            <h1 className="text-[20px] font-semibold">{project.title}</h1>
            <div className="flex justify-center gap-3">
              {project.technologies.map((technology, tIdx) => (
                <h1
                  key={`project-tech-${pIdx}-${tIdx}`}
                  className="bg-gradient-to-r from-[#e2e3e4] to-[#e0e0e0] rounded-sm text-black py-[2px] px-2 text-[12px] font-semibold"
                >
                  {technology}
                </h1>
              ))}
            </div>
            <h1 className="text-left text-[16px]">{project.about}</h1>
            <div className="flex justify-center">
              <button className="w-fit flex items-center gap-2 text-[14px] text-nowrap border p-2 bg-gradient-to-r from-[#e2e3e4] to-[#e0e0e0] dark:bg-black text-black rounded-full font-semibold">
                <FaGithub />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full px-4 mt-10 md:mt-12">
        <Button
          children="Explore All Projects"
          className="text-white transition-colors duration-500 ease-in-out bg-blue-500 hover:bg-blue-700"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
