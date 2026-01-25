import React, { useState, useMemo } from 'react';
import { MemberCardMobile } from './memberCard';
import { MembersFilter } from './memberFilter';
import { MemberRowDesktop } from './memberRow';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMembers } from '@/hooks/useMembers';
import ErrorPage from '@/pages/ErrorPage';

export default function MemberListPage() {
  const { members, pagination, isLoading, error, refetch, toggleRole, nextPage, prevPage, goToPage } = useMembers(1,15);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('ALL');
  const navigate = useNavigate();


  // Filter logic for members
  const filteredMembers = members.filter((member) => {
    const memberSkills = Array.isArray(member.skills) 
    ? member.skills.map(skill => 
        typeof skill === 'string' ? skill : skill.name
      )
    : [];
    const matchesSearch = 
      member.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      memberSkills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesRole = roleFilter === 'ALL' || member.role === roleFilter;
    
    return matchesSearch && matchesRole;
  });

  // Handle role update for a given user:
  const handleRoleToggle = async (userId, newRole) => {
    // API call
    await toggleRole(userId, newRole);
    
  };

 if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#0d1117] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading members...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
      <ErrorPage type={error} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0d1117] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          {/* Back button */}
          <button
            onClick={() => navigate("/adminDashboard")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>
          
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Manage community members and roles
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Page {pagination.currentPage} / {pagination.totalPages}
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="px-3 py-1.5 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-lg">
              {pagination.totalCount} total members
            </span>
          </div>
        </div>

        {/* Search and Filters */}
        <MembersFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          roleFilter={roleFilter}
          onRoleFilterChange={setRoleFilter}
        />

        {/* Desktop Table */}
        <div className="hidden md:block bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50 text-left text-sm text-gray-500 dark:text-gray-400">
                <th className="py-4 px-4 font-medium">Member</th>
                <th className="py-4 px-4 font-medium">Stack</th>
                <th className="py-4 px-4 font-medium">Role</th>
                <th className="py-4 px-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <MemberRowDesktop
                  key={member.id}
                  member={member}
                  onRoleToggle={handleRoleToggle}
                />
              ))}
            </tbody>
          </table>
          
          {filteredMembers.length === 0 && (
            <div className="py-12 text-center text-gray-500 dark:text-gray-400">
              No members found matching your filters
            </div>
          )}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {filteredMembers.map((member) => (
            <MemberCardMobile
              key={member.id}
              member={member}
              onRoleToggle={handleRoleToggle}
            />
          ))}
          
          {filteredMembers.length === 0 && (
            <div className="py-12 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-xl">
              No members found matching your filters
            </div>
          )}
        </div>

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              onClick={prevPage}
              disabled={!pagination.hasPrevPage}
              className="px-4 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    page === pagination.currentPage
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={!pagination.hasNextPage}
              className="px-4 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}