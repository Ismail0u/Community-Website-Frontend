import React, { useState } from 'react';
import { MemberCardMobile } from './memberCard';
import { MembersFilter } from './memberFilter';
import { MemberRowDesktop } from './memberRow';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


// Mock data used before backend integration
const mockMembers = [
  {
    id: '1',
    fullname: 'Alonda Kinz',
    email: 'alonda@devbyte.io',
    profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    role: 'ADMIN',
    skills: ['React', 'Node.js', 'TypeScript'],
    createdAt: '2025-01-15',
  },
  {
    id: '2',
    fullname: 'Maya Johnson',
    email: 'maya@devbyte.io',
    profilePicture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    role: 'USER',
    skills: ['Python', 'Django', 'PostgreSQL'],
    createdAt: '2025-02-20',
  },
  {
    id: '3',
    fullname: 'Ismael Diallo',
    email: 'ismael@devbyte.io',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    role: 'USER',
    skills: ['Vue.js', 'Laravel', 'MySQL'],
    createdAt: '2025-03-10',
  },
  {
    id: '4',
    fullname: 'Alex Chen',
    email: 'alex@devbyte.io',
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    role: 'ADMIN',
    skills: ['Go', 'Kubernetes', 'AWS'],
    createdAt: '2025-01-05',
  },
  {
    id: '5',
    fullname: 'Sarah Miller',
    email: 'sarah@devbyte.io',
    profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    role: 'USER',
    skills: ['React Native', 'Firebase'],
    createdAt: '2025-04-01',
  },
  {
    id: '6',
    fullname: 'David Kouassi',
    email: 'david@devbyte.io',
    profilePicture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    role: 'USER',
    skills: ['Java', 'Spring Boot', 'MongoDB'],
    createdAt: '2025-03-25',
  },
];


export default function MemberListPage() {
  const [members, setMembers] = useState(mockMembers);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('ALL');
  const navigate = useNavigate();

  // Filter logic for members
  const filteredMembers = members.filter((member) => {
    const matchesSearch = 
      member.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesRole = roleFilter === 'ALL' || member.role === roleFilter;
    
    return matchesSearch && matchesRole;
  });

  // Handle role update for a given user:
  const handleRoleToggle = async (userId, newRole) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // TODO: Real API call

    setMembers(prev => 
      prev.map(member => 
        member.id === userId ? { ...member, role: newRole } : member
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0d1117] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            {/* Back button to return to admin dashboard */}
            <button
                onClick={() => navigate("/adminDashboard")}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mb-4">
                <ArrowLeft size={20} />
                <span className="font-medium">Back</span>
            </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Manage community members and roles
            </h1>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="px-3 py-1.5 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-lg">
              {filteredMembers.length} members
            </span>
          </div>
        </div>

        {/*  Search and Filters Component */}
        <MembersFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          roleFilter={roleFilter}
          onRoleFilterChange={setRoleFilter}
        />

        {/* Desktop Table for member */}
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
              No members found
            </div>
          )}
        </div>

        {/* Mobile Cards for members*/}
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
              No members found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}