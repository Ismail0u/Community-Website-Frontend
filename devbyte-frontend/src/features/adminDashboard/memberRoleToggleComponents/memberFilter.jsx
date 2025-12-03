import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

// Search & Filter Bar

export const MembersFilter = ({ searchTerm, onSearchChange, roleFilter, onRoleFilterChange }) => (
  <div className="flex flex-col sm:flex-row gap-3 mb-6">
    {/* Search */}
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search members..."
        className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </div>

    {/* Role Filter */}
    <div className="relative">
      <select
        value={roleFilter}
        onChange={(e) => onRoleFilterChange(e.target.value)}
        className="appearance-none w-full sm:w-40 px-4 py-2.5 pr-10 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        <option value="ALL">All Roles</option>
        <option value="ADMIN">Admin</option>
        <option value="USER">User</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
    </div>
  </div>
);
