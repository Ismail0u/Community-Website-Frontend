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

    // State to control the visibility of the sidebar on mobile
  const [isSidebarOpen , setIsSidebarOpen] = useState(false) ;


  return (
    <div className="min-h-screen">

      {/* Main Layout */}
      <div className="max-w-full mx-0 px-2 sm:px-2 lg:px-2 py-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-2">
          {/* Sidebar - Mobile: will use toggle button, Desktop: sticky sidebar */}
          {/* TOGGLE Button */}
            <button
              className="lg:hidden fixed top-20 left-0 z-40 p-2 bg-white dark:bg-gray-900 rounded-r-lg shadow-lg"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label={isSidebarOpen ? "Close sidebar" : "Open Sidebar"}
            >
              {isSidebarOpen ? '❮' : '❯'}
            </button>
            {/* End of TOGGLE button */}

          <aside
             className={`
                fixed top-0 left-0 h-full z-30
                 w-8/12 sm:w-1/2
                 transform transition-transform ease-in-out duration-300 
                 backdrop-opacity-15
                 lg:w-64 shrink-0 lg:border-r lg:border-gray-200 dark:lg:border-gray-700 pr-3 lg:h-screen lg:sticky lg:top-0 lg:left-auto lg:transform-none
                 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
               `}>
            <div className="lg:sticky lg:top-8 mt-1 lg:mt-0 p-1 lg:p-0">
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

            {/* Mobile Overlay (to close sidebar on outside click) */}

           {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}

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