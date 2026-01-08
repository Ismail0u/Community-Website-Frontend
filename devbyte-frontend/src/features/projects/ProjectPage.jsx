import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectSidebar } from "./ProjectSidebar";
import { ProjectPagination } from "./ProjectPagination";
import HeaderWrapper from "@/components/ui/Header";
import { projectFilters } from "./projectFilter";
import ErrorPage from "@/pages/ErrorPage";

export const ProjectPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // when the card is clicked
  const [open, setOpen] = useState(false);

  const {
    featuredProjects,
    regularProjects,
    searchQuery,
    setSearchQuery,
    selectedTechnology,
    setSelectedTechnology,
    selectedContributors,
    setSelectedContributors,
    featuredOnly,
    setFeaturedOnly,
    currentPage,
    setCurrentPage,
    pagination,
    technologies,
    contributors,
    isLoading,
    techsLoading,
    membersLoading,
    error,
    hasActiveFilters,
  } = projectFilters(1, 9);


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0D1117]">
      <div className="max-w-full mx-0 px-2 sm:px-2 lg:px-2 py-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-2">
          {/* Toggle Button for Mobile */}
          <button
            className="lg:hidden fixed top-20 left-0 z-40 p-2 bg-white dark:bg-gray-900 rounded-r-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label={isSidebarOpen ? "Close sidebar" : "Open Sidebar"}
          >
            {isSidebarOpen ? "❮" : "❯"}
          </button>

          {/* Sidebar */}
          <aside
            className={`
              fixed top-0 left-0 h-full z-30
              w-8/12 sm:w-1/2
              transform transition-transform ease-in-out duration-300 
              lg:w-64 shrink-0 lg:h-screen lg:sticky lg:top-0 lg:left-auto lg:transform-none
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
          >
            <ProjectSidebar
              selectedTechnology={selectedTechnology}
              setSelectedTechnology={setSelectedTechnology}
              selectedContributors={selectedContributors}
              setSelectedContributors={setSelectedContributors}
              featuredOnly={featuredOnly}
              setFeaturedOnly={setFeaturedOnly}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              technologies={technologies}
              contributors={contributors}
              isLoadingTechs={techsLoading}
              isLoadingContributors={membersLoading}
            />
          </aside>

          {/* Overlay for Mobile */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-20 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Header */}
            <HeaderWrapper className="text-center">
              <div className="px-4 py-12 text-center sm:py-8">
                <h1 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-5xl">
                  Open Source Projects
                </h1>
                <p className="max-w-2xl mx-auto text-base text-gray-700 dark:text-gray-300 sm:text-lg">
                  Explore and contribute to projects built by our community
                </p>
              </div>
            </HeaderWrapper>

            {/* Loading State */}
            {isLoading ? (
              <div className="flex flex-col justify-center items-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-500 mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
              </div>
            ) : error ? (
              <div className="py-10">
                <ErrorPage type={error} />
              </div>
            ) : (
              <>
                {/* Featured Projects Section */}
                {featuredProjects.length > 0 && (
                  <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-[#161B22] dark:text-white">
                        Featured Projects
                      </h2>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        {featuredProjects.length}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mr-8 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6 lg:gap-8">
                      {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                )}

                {/* All Projects Section */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#161B22] dark:text-white">
                    All Projects
                  </h2>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">
                    {regularProjects.length}
                  </span>
                </div>

                {regularProjects.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 gap-4 mr-8 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6 lg:gap-8">
                      {regularProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                    {/* Pagination */}
                    {!hasActiveFilters && pagination && pagination.totalPages > 1 && (
                      <ProjectPagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalPages={pagination.totalPages}
                      />
                    )}
                  </>
                ) : (
                  // Empty State
                  <div className="py-20 text-center">
                    <svg
                      className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      No projects found
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                      {hasActiveFilters
                        ? "Try adjusting your filters to see more results"
                        : "No projects are available at the moment"}
                    </p>
                    {hasActiveFilters && (
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedTechnology("");
                          setSelectedContributors([]);
                          setFeaturedOnly(false);
                        }}
                        className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-medium"
                      >
                        Clear All Filters
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
        </main>
        </div>
      </div>
    </div>
  );
};