/**
 *  * Contains all individual filter inputs: search bar, role dropdown,
 * skill dropdown, and sort options. This component is rendered inside
 * the MemberSidebar and handles the UI for filter controls.
 * 
 * Features:
 * - Text search input with icon
 * - Dropdown selectors for role and skill
 * - Sort options selector
 * - Clear visual hierarchy
 * 
 * @component
 * @param {Object} props - Filter control props from parent
 
 */

import React from "react";
import { Search, ArrowUpDown } from "lucide-react";

const MemberFilter = ({ searchTerm,setSearchTerm,
                        selectedStack,setSelectedStack,
                        selectedSkill,setSelectedSkill,
                        sortOption,setSortOption,
                        stacks,allSkills,
}) => {
  return (
    <div
      className="bg-white dark:bg-[#0D1117] border border-gray-200 dark:border-[#30363D]
                 rounded-lg p-6 mb-4 shadow-sm transition-colors duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Search */}
        <div className="md:col-span-2">
          <label className="block text-gray-600 dark:text-[#8B949E] text-sm mb-2">
            Search by name or bio
          </label>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-[#8B949E]"
              size={20}
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search members..."
              className="w-full bg-gray-50 dark:bg-[#161B22] border border-gray-300 dark:border-[#30363D]
                         rounded-lg pl-10 pr-4 py-2.5 text-gray-900 dark:text-white
                         placeholder-gray-400 dark:placeholder-[#8B949E]
                         focus:border-[#00AEEF] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Role */}
        <div>
          <label className="block text-gray-600 dark:text-[#8B949E] text-sm mb-2">
            Stack
          </label>
          <select
            value={selectedStack}
            onChange={(e) => setSelectedStack(e.target.value)}
            className="w-full bg-gray-50 dark:bg-[#161B22] border border-gray-300 dark:border-[#30363D]
                       rounded-lg px-4 py-2.5 text-gray-900 dark:text-white
                       focus:border-[#00AEEF] focus:outline-none cursor-pointer transition-colors"
          >
            {stacks.map((stack) => (
              <option key={stack} value={stack}>
                {stack}
              </option>
            ))}
          </select>
        </div>

        {/* Skill */}
        <div>
          <label className="block text-gray-600 dark:text-[#8B949E] text-sm mb-2">
            Skills
          </label>
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            className="w-full bg-gray-50 dark:bg-[#161B22] border border-gray-300 dark:border-[#30363D]
                       rounded-lg px-4 py-2.5 text-gray-900 dark:text-white
                       focus:border-[#00AEEF] focus:outline-none cursor-pointer transition-colors"
          >
            {allSkills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-gray-600 dark:text-[#8B949E] text-sm mb-2">
            Sort by
          </label>
          <div className="relative">
            <ArrowUpDown
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-[#8B949E]"
              size={18}
            />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full bg-gray-50 dark:bg-[#161B22] border border-gray-300 dark:border-[#30363D]
                         rounded-lg pl-10 py-2.5 text-gray-900 dark:text-white
                         focus:border-[#00AEEF] focus:outline-none cursor-pointer transition-colors"
            >
              <option value="name-asc">Name (A–Z)</option>
              <option value="name-desc">Name (Z–A)</option>
              <option value="stack">Stack</option>
              <option value="skill-count">Most Skilled</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberFilter;
