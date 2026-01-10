import React, { useState } from "react";
import { ChevronDown, Check, Search } from "lucide-react";

// Search bar component
const ProjectSearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="bg-white dark:bg-[#161B22] rounded-lg p-4 mb-6 shadow-md">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search projects..."
          className="w-full p-3 pr-10 bg-gray-100 dark:bg-[#2A2F36] text-[#161B22] dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
      </div>
    </div>
  );
};

// Contributor selector
export const ContributorsSelect = ({ 
  contributors = [], 
  selectedContributors, 
  setSelectedContributors,
  isLoading = false 
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (contributorId) => {
    if (selectedContributors.includes(contributorId)) {
      setSelectedContributors(selectedContributors.filter((id) => id !== contributorId));
    } else {
      setSelectedContributors([...selectedContributors, contributorId]);
    }
  };

  // get contributor name that are selected
  const getSelectedNames = () => {
    return contributors
      .filter(c => selectedContributors.includes(c.id))
      .map(c => c.fullname || c.name)
      .join(", ");
  };

  return (
    <div className="mb-6 border-t border-gray-200 dark:border-gray-700 pt-4 relative">
      <label className="block text-sm font-semibold text-[#161B22] dark:text-[#D9D9D9] mb-2">
        Contributors {isLoading && <span className="text-xs">(Loading...)</span>}
      </label>

      {/* Dropdown Button */}
      <button
        onClick={() => setOpen(!open)}
        disabled={isLoading}
        className="w-full flex items-center justify-between bg-gray-100 dark:bg-[#2A2F36] text-[#161B22] dark:text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="truncate">
          {selectedContributors.length > 0
            ? getSelectedNames()
            : "Select contributors..."}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform flex-shrink-0 ml-2 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white dark:bg-[#161B22] rounded-lg shadow-lg max-h-60 overflow-y-auto border border-gray-200 dark:border-gray-700 animate-fadeIn">
          {isLoading ? (
            <div className="px-4 py-6 text-center text-sm text-gray-500">
              Loading contributors...
            </div>
          ) : contributors.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-gray-500">
              No contributors found
            </div>
          ) : (
            contributors.map((contributor) => {
              const isSelected = selectedContributors.includes(contributor.id);
              return (
                <div
                  key={contributor.id}
                  onClick={() => handleSelect(contributor.id)}
                  className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2A2F36] ${
                    isSelected ? "bg-blue-50 dark:bg-blue-900" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-sm text-gray-700 dark:text-gray-300 truncate">
                      {contributor.fullname || contributor.name || "Unknown"}
                    </span>
                  </div>
                  {isSelected && <Check className="h-4 w-4 text-blue-500 flex-shrink-0" />}
                </div>
              );
            })
          )}
        </div>
      )}
      
      {selectedContributors.length > 0 && (
        <p className="text-xs text-gray-500 mt-2">
          Selected: {selectedContributors.length}
        </p>
      )}
    </div>
  );
};

// Main Sidebar component
export const ProjectSidebar = ({
  selectedTechnology,
  setSelectedTechnology,
  selectedContributors,
  setSelectedContributors,
  featuredOnly,
  setFeaturedOnly,
  searchQuery,
  setSearchQuery,
  technologies = [],
  contributors = [],
  isLoadingTechs = false,
  isLoadingContributors = false,
}) => {
  return (
    <aside className="lg:w-64 bg-white dark:bg-[#161B22] rounded-lg p-5 shadow-md h-screen lg:sticky lg:top-0 overflow-y-auto">
      {/* Search Bar */}
      <ProjectSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <h3 className="text-lg font-bold text-[#161B22] dark:text-white mb-4">
        Filters
      </h3>

      {/* Technology Filter */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#161B22] dark:text-[#D9D9D9] mb-2">
          Technology {isLoadingTechs && <span className="text-xs">(Loading...)</span>}
        </label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {isLoadingTechs ? (
            <div className="text-sm text-gray-500 py-2">Loading technologies...</div>
          ) : technologies.length === 0 ? (
            <div className="text-sm text-gray-500 py-2">No technologies found</div>
          ) : (
            <>
              {/* Option "All" */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="technology"
                  className="w-4 h-4 accent-blue-600"
                  checked={!selectedTechnology}
                  onChange={() => setSelectedTechnology("")}
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  All Technologies
                </span>
              </label>
              
              {/* Technologies from API */}
              {technologies.map((tech) => (
                <label key={tech.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="technology"
                    className="w-4 h-4 accent-blue-600"
                    checked={selectedTechnology === tech.id}
                    onChange={() => setSelectedTechnology(tech.id)}
                  />
                  <div className="flex items-center gap-2 flex-1">
                    {tech.icon && (
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-5 h-5 object-contain"
                      />
                    )}
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                </label>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Multi-select Contributors */}
      <ContributorsSelect
        contributors={contributors}
        selectedContributors={selectedContributors}
        setSelectedContributors={setSelectedContributors}
        isLoading={isLoadingContributors}
      />

      {/* Toggle Featured */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-[#161B22] dark:text-[#D9D9D9]">
            Featured Only
          </span>
          <button
            onClick={() => setFeaturedOnly(!featuredOnly)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ease-in-out ${
              featuredOnly ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={featuredOnly ? "Disable featured filter" : "Enable featured filter"}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
                featuredOnly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Active Filters Count */}
      {(selectedTechnology || selectedContributors.length > 0 || featuredOnly) && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Active filters:</span>
            <ul className="mt-2 space-y-1">
              {selectedTechnology && (
                <li> Technology: {technologies.find(t => t.id === selectedTechnology)?.name}</li>
              )}
              {selectedContributors.length > 0 && (
                <li> Contributors: {selectedContributors.length}</li>
              )}
              {featuredOnly && <li> Featured only</li>}
            </ul>
          </div>
        </div>
      )}
    </aside>
  );
};