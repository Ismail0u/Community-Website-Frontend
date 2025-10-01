import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectData } from "./ProjectData";
import { ProjectSidebar } from "./ProjectSidebar";

export const ProjectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <div className="min-h-screen">

      {/* Main Layout */}
      <div className="max-w-full mx-0 px-0 sm:px-0 lg:px-2 py-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar - Mobile: full width, Desktop: sticky sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-8">
              <ProjectSidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] dark:from-[#0C546E] dark:to-[#183D72] text-center py-12 px-4 sm:py-16">
                <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                Open Source Projects
                </h1>
                <p className="text-white text-base sm:text-lg max-w-2xl mx-auto">
                Explore and contribute to projects built by our community
                </p>
            </div>
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#161B22] dark:text-white mb-6 sm:mb-8 text-center">
              All Projects
            </h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mr-8">
              {projectData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};