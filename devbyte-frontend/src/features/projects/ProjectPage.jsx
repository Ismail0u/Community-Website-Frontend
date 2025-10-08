import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectData } from "./ProjectData";
import { ProjectSidebar } from "./ProjectSidebar";
import { ProjectPagination } from "./ProjectPagination";
import { ProjectFilters } from "./projectFilter";
import HeaderWrapper from "@/components/ui/Header";

export const ProjectPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const {
        selectedTechnology,
        setSelectedTechnology,
        selectedContributors,
        setSelectedContributors,
        featuredOnly,
        setFeaturedOnly,
        searchQuery,
        setSearchQuery,
        filteredProjects,
  } = ProjectFilters(projectData);

    // filtering projects as featured or not
  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);


  return (
    <div className="min-h-screen">

      {/* Main Layout */}
      <div className="max-w-full px-2 py-4 mx-0 sm:px-2 lg:px-2">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-2">
          {/* Sidebar - Mobile: full width, Desktop: sticky sidebar */}
          <aside className="w-full h-screen pr-3 lg:w-64 shrink-0 lg:border-r lg:border-gray-200 dark:lg:border-gray-700 lg:sticky lg:top-0">
            <div className="lg:sticky lg:top-8">
              <ProjectSidebar
                selectedTechnology={selectedTechnology}
                setSelectedTechnology={setSelectedTechnology}
                selectedContributors={selectedContributors}
                setSelectedContributors={setSelectedContributors}
                featuredOnly={featuredOnly}
                setFeaturedOnly={setFeaturedOnly}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Header */}
            <HeaderWrapper className="text-center ">
                <div className="px-4 py-12 text-center sm:py-8">
                  <h1 className="mb-5 mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-5xl bg-clip-text">
                    Open Source Projects
                  </h1>
                  <p className="max-w-2xl mx-auto text-base dark:text-white sm:text-lg">
                  Explore and contribute to projects built by our community
                  </p>
              </div>
            </HeaderWrapper>
                
            {/* Featured Projects */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#161B22] dark:text-white mb-10 mt-10 text-center">
                Featured Projects
                </h2>
                <div className="grid grid-cols-1 gap-4 mr-8 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6 lg:gap-8">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                </div>
            </div>

            {/* All Projects */}
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#161B22] dark:text-white mb-6 sm:mb-8 text-center">
              All Projects
            </h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-4 mr-8 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6 lg:gap-8">
              {regularProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
             <ProjectPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          </main>
        </div>
      </div>
    </div>
  );
};