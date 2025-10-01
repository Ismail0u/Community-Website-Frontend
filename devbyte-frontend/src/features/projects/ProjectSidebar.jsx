import React from "react";
import { Search } from "lucide-react";


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

export const ProjectSidebar = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const technologies = ["React", "Node.js", "Python"];

  return (
    <aside className="lg:w-64 bg-white dark:bg-[#161B22] rounded-lg p-5 h-fit shadow-md">
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
                className="w-4 h-4 rounded"
                checked={selectedCategory === tech}
                onChange={(e) =>
                  setSelectedCategory(e.target.checked ? tech : "")
                }
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {tech}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Contributors Toggle */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm font-semibold text-[#161B22] dark:text-[#D9D9D9]">
            Solo contributor
          </span>
          <input type="checkbox" className="w-10 h-5 rounded-full" />
        </label>
      </div>
    </aside>
  );
};
