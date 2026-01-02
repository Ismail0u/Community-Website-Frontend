import { useState, useMemo, useEffect } from "react";
import { useProjects } from "@/hooks/useProject";
import { useTechs } from "@/hooks/useTech";
import { useMembers } from "@/hooks/useMembers";

export const projectFilters = (initialPage = 1, pageSize = 9) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [selectedContributors, setSelectedContributors] = useState([]);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const { 
    projects,pagination, isLoading: projectsLoading, error: projectsError, fetchProjects 
  } = useProjects();

  const { techs, isLoading: techsLoading } = useTechs();
  const { members, isLoading: membersLoading } = useMembers(1, 100);

  useEffect(() => {
    const params = {
      page: currentPage,
      pageSize,
    };

    if (searchQuery.trim()) {
      params.search = searchQuery;
    }

    fetchProjects(params);
  }, [currentPage, searchQuery, pageSize]);

  const filteredProjects = useMemo(() => {
    let filtered = [...projects];

    // Filter by technology
    if (selectedTechnology && selectedTechnology !== "All") {
      filtered = filtered.filter(project => {
        return project.techs?.some(tech => 
          tech.id === selectedTechnology || tech.name?.toLowerCase() === selectedTechnology.toLowerCase()
        );
      });
    }
    // Filter by contributors
    if (selectedContributors.length > 0) {
      filtered = filtered.filter(project => {
        return project.contributors?.some(contributor =>
          selectedContributors.includes(contributor.id)
        );
      });
    }

    if (featuredOnly) {
      filtered = filtered.filter(project => project.featured === true);
    }

    return filtered;
  }, [projects, selectedTechnology, selectedContributors, featuredOnly]);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  const hasActiveFilters = 
    searchQuery || 
    selectedTechnology || 
    selectedContributors.length > 0 || 
    featuredOnly;

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTechnology("");
    setSelectedContributors([]);
    setFeaturedOnly(false);
    setCurrentPage(1);
  };
  const isLoading = projectsLoading || techsLoading || membersLoading;

  return {
    // Filtered data
    filteredProjects,
    featuredProjects,
    regularProjects,
    
    // Filter states
    searchQuery,
    setSearchQuery,
    selectedTechnology,
    setSelectedTechnology,
    selectedContributors,
    setSelectedContributors,
    featuredOnly,
    setFeaturedOnly,
    
    // Pagination
    currentPage,
    setCurrentPage,
    pagination,
    
    // Available options for filters
    technologies: techs,
    contributors: members,
    
    // Loading states
    isLoading,
    projectsLoading,
    techsLoading,
    membersLoading,
    
    // Error handling
    error: projectsError,
    
    // Utilities
    hasActiveFilters,
    clearFilters,
    refetch: fetchProjects,
  };
};