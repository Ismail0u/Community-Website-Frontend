import React, { useState } from "react";
import { ChevronDown, Check , Search } from "lucide-react";



// searche bar components

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

export const ContributorsSelect = ({ contributors, selectedContributors, setSelectedContributors }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (contrib) => {
    if (selectedContributors.includes(contrib)) {
      setSelectedContributors(selectedContributors.filter((c) => c !== contrib));
    } else {
      setSelectedContributors([...selectedContributors, contrib]);
    }
  };

  return (
    <div className="mb-6 border-t border-gray-200 dark:border-gray-700 pt-4 relative">
      <label className="block text-sm font-semibold text-[#161B22] dark:text-[#D9D9D9] mb-2">
        Contributors
      </label>

      {/* Dropdown Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-gray-100 dark:bg-[#2A2F36] text-[#161B22] dark:text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedContributors.length > 0
          ? selectedContributors.join(", ")
          : "Select contributors..."}
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white dark:bg-[#161B22] rounded-lg shadow-lg max-h-48 overflow-y-auto border border-gray-200 dark:border-gray-700 animate-fadeIn">
          {contributors.map((contrib) => {
            const isSelected = selectedContributors.includes(contrib);
            return (
              <div
                key={contrib}
                onClick={() => handleSelect(contrib)}
                className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2A2F36] ${
                  isSelected ? "bg-blue-50 dark:bg-blue-900" : ""
                }`}
              >
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {contrib}
                </span>
                {isSelected && <Check className="h-4 w-4 text-blue-500" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};


// sidebar component
export const ProjectSidebar = ({
  selectedTechnology,
  setSelectedTechnology,
  selectedContributors,
  setSelectedContributors,
  featuredOnly,
  setFeaturedOnly,
}) => {
    const technologies = ["React", "Node.js", "Python"];
    const contributors = ["Alice", "Bob", "Charlie", "DevByte"];
    const [searchQuery, setSearchQuery ] = useState("")

    const handleContributorChange = (contributor) => {
        if (selectedContributors.includes(contributor)) {
            setSelectedContributors( selectedContributors.filter((c) => c !== contributor));
        } else {
            setSelectedContributors([...selectedContributors, contributor]);
        }
    };

  return (
    <aside className="lg:w-64 bg-white dark:bg-[#161B22] rounded-lg p-5 shadow-md h-screen lg:sticky lg:top-0">
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
          Technology
        </label>
        <div className="space-y-2">
          {technologies.map((tech) => (
            <label key={tech} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-blue-600"
                checked={selectedTechnology === tech}
                onChange={(e) =>
                  setSelectedTechnology(e.target.checked ? tech : "")
                }
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {tech}
              </span>
            </label>
          ))}
        </div>
      </div>

       {/* Multi-select Contributors */}
      <div className="mb-6 pt-4">
              {/* Contributors Select */}
        <ContributorsSelect
          contributors={contributors}
          selectedContributors={selectedContributors}
          setSelectedContributors={setSelectedContributors}
        />
      </div>

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
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
                featuredOnly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </aside>
  );
};
