import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectData } from "./ProjectData";
import { ProjectSidebar } from "./ProjectSidebar";
import { ProjectPagination } from "./ProjectPagination";
import { ProjectFilters } from "./projectFilter";

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
      <div className="max-w-full mx-0 px-2 sm:px-2 lg:px-2 py-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-2">
          {/* Sidebar - Mobile: full width, Desktop: sticky sidebar */}
          <aside className="w-full lg:w-64 shrink-0 lg:border-r lg:border-gray-200 dark:lg:border-gray-700 pr-3 h-screen lg:sticky lg:top-0">
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
            <div className="text-center py-12 px-4 sm:py-8">
                <h1 className="bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] dark:from-[#0C546E] dark:to-[#183D72] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text mb-5">
                  Open Source Projects
                </h1>
                <p className="dark:text-white text-base sm:text-lg max-w-2xl mx-auto">
                Explore and contribute to projects built by our community
                </p>
            </div>
                
            {/* Featured Projects */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#161B22] dark:text-white mb-5 text-center">
                Featured Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mr-8">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mr-8">
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