/**
 * 
 *
 * This component serves as the container for the entire members directory,
 * managing state for filtering, searching, sorting, and displaying member cards.
 * It coordinates between the sidebar filters and the member grid display.
 * 
 * Features:
 * - Real-time search across member names and bios
 * - Multi-criteria filtering (role, skills)
 * - Dynamic sorting options
 * - Lazy loading with "Load More" functionality
 * - Modal detail view for individual members
 * - Responsive layout for mobile and desktop
 * 
 * @component
 * @example
 * return (
 *   <MemberPage />
 * )
 */


import React, { useState, useMemo, useEffect } from "react";
import HeaderWrapper from "@/components/ui/Header";
import MemberModal from "./memberModal";
import MemberCard from "./memberCard";
import MemberSidebar from "./memberSidebar";
import { useMembers } from "@/hooks/useMembers";
import { useNavigate } from "react-router-dom";
import ErrorPage from "@/pages/ErrorPage";

const MemberPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStack, setSelectedStack] = useState("All Stack");
  const [selectedSkill, setSelectedSkill] = useState("All Skills");
  const [sortOption, setSortOption] = useState("name-asc");
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);

  const { members, pagination, isLoading, error, refetch } = useMembers(1, 100); 

   const { stacks, allSkills } = useMemo(() => {
    const stacksSet = new Set();
    const skillsSet = new Set();

    members.forEach(member => {
      if (member.stack) stacksSet.add(member.stack);
      if (member.skills && Array.isArray(member.skills)) {
        member.skills.forEach(skill => {
          if (typeof skill === 'string') {
            skillsSet.add(skill);
          } else if (skill.name) {
            skillsSet.add(skill.name);
          }
        });
      }
    }, [members]);

    return {
      stacks: ["All Stack", ...Array.from(stacksSet)],
      allSkills: ["All Skills", ...Array.from(skillsSet)]
    };
  }, [members]);

  // Filter and sort members based on search criteria
  const filteredMembers = useMemo(() => {
    let data = members.filter((member) => {
      const memberName = member.fullname || member.name || '';
      const memberBio = member.bio || '';
      
      const matchesSearch =
        memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        memberBio.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRole =
        selectedStack === "All Stack" || member.stack === selectedStack;

      const matchesSkill =
        selectedSkill === "All Skills" ||
        (member.skills && member.skills.some(skill => 
          typeof skill === 'string' 
            ? skill === selectedSkill 
            : skill.name === selectedSkill
        ));

      return matchesSearch && matchesRole && matchesSkill;
    });

    // Sort based on selected option
    switch (sortOption) {
      case "name-asc":
        data.sort((a, b) => a.fullname.localeCompare(b.fullname));
        break;
      case "name-desc":
        data.sort((a, b) => b.fullname.localeCompare(a.fullname));
        break;
      case "role":
        data.sort((a, b) => a.stack.localeCompare(b.stack));
        break;
      case "skill-count":
        data.sort((a, b) => (b.skills?.length || 0) - (a.skills?.length || 0));
        break;
      default:
        break;
    }

    return data;
  }, [members, searchTerm, selectedStack, selectedSkill, sortOption]);

  const displayedMembers = filteredMembers.slice(0, displayCount);
  const hasMore = displayCount < filteredMembers.length;

  // Open modal when member card is clicked
  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0D1117] transition-colors duration-300">
      {/* Header Section */}
      <HeaderWrapper className="text-center">
        <div className="px-4 py-12 text-center sm:py-8">
          <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Explore Our Community
          </h1>
          <p className="max-w-2xl mx-auto text-base text-gray-700 dark:text-gray-300 sm:text-lg">
            Discover developers, designers, and innovators building the future
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="bg-[#00AEEF] text-white my-5 px-8 py-3 rounded-lg font-semibold
                       hover:bg-[#0096D6] transition-all transform hover:scale-105
                       shadow-lg hover:shadow-xl"
          >
            Join the Community
          </button>
        </div>
      </HeaderWrapper>

      {/* Main Layout: Sidebar + Content */}
      <div className="flex flex-col lg:flex-col">
        {/* Sidebar - Full width on mobile, fixed width on desktop */}
        <MemberSidebar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedStack={selectedStack}
          setSelectedStack={setSelectedStack}
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
          sortOption={sortOption}
          setSortOption={setSortOption}
          stacks={stacks}
          allSkills={allSkills}
        />

        {/* Main Content Area - Takes remaining space */}
        <main className="flex-1 min-w-0">
          <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Members Grid or Empty State */}
            {/* Loading State */}
            {isLoading ? (
              <div className="flex flex-col justify-center items-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-500 mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Loading members...</p>
              </div>
            ) : error ? (
              <div className="py-10">
                <ErrorPage type={error} />
              </div>
            ) : ( displayedMembers.length > 0 ? (
              <>
                {/* Grid of member cards */}
                <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                  {displayedMembers.map((member) => (
                    <MemberCard
                      key={member.id}
                      member={member}
                      onClick={() => handleMemberClick(member)}
                    />
                  ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="flex justify-center">
                    <button
                      onClick={() => setDisplayCount((p) => p + 6)}
                      className="bg-gray-100 dark:bg-[#0D1117] text-gray-900 dark:text-white 
                                 border-2 border-[#00AEEF] px-8 py-3 rounded-lg font-semibold
                                 hover:bg-[#00AEEF] hover:text-white transition-all transform hover:scale-105"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            ) : (
              // Empty state when no members match filters
              <div className="py-16 text-center">
                <div className="text-gray-600 dark:text-[#8B949E] text-lg mb-2">
                  No members found
                </div>
                <p className="text-gray-400 dark:text-[#6E7681] text-sm">
                  Try adjusting your filters or search terms
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Member Detail Modal */}
      <MemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default MemberPage;