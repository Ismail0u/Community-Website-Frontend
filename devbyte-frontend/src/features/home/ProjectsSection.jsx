import React from "react";
import Card from "@/components/ui/Card";
import { FaGithub } from "react-icons/fa6";
import Button from "@/components/ui/Button";

const ProjectsSection = ({ projects }) => {
  return (
    <div className="mt-28">
      <div className="text-center max-w-[1200px] mx-auto px-4">
        <h1 className="text-[28px] font-semibold">Community Projects</h1>
        <h1 className="pt-2 text-[18px]">
          Discover and contribute to pen-source projects built by DevByte
          members
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-7 px-4">
        {projects.map((project, pIdx) => (
          <Card
            key={`project-${pIdx}`}
            className="p-5 shadow-xl space-y-5 w-[350px]"
          >
            <h1 className="text-[20px] font-semibold">{project.title}</h1>
            <div className="flex justify-center gap-3">
              {project.technologies.map((technology, tIdx) => (
                <h1
                  key={`project-tech-${pIdx}-${tIdx}`}
                  className="bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] rounded-full text-white py-[2px] px-2 text-[12px]"
                >
                  {technology}
                </h1>
              ))}
            </div>
            <h1 className="text-left text-[16px]">{project.about}</h1>
            <div className="flex justify-center">
              <button className="w-fit flex items-center gap-2 text-[14px] text-nowrap px-3 border bg-[#00C38A] hover:bg-[#009c6e] transition-colors duration-300 ease-in text-white py-2 rounded-full font-semibold">
                <FaGithub /> View on GitHub
              </button>
            </div>
          </Card>
        ))}
      </div>
      <div className="w-full flex justify-center mt-10 md:mt-12 px-4">
        <Button
          children="Explore All Projects"
          className="bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
