import { useState, useMemo } from "react";

// filters Hooks
export const ProjectFilters = (projects = []) => {
    const [selectedTechnology, setSelectedTechnology] = useState("");
    const [selectedContributors, setSelectedContributors] = useState([]);
    const [featuredOnly, setFeaturedOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            // Filter by technology
            const matchesCategory =
                !selectedTechnology ||
                project.technology?.toLowerCase() === selectedTechnology.toLowerCase();

            // Filter by search
            const matchesSearch =
                !searchQuery ||
                project.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description?.toLowerCase().includes(searchQuery.toLowerCase());

            //  Filter by contributors
            const matchesContributors =
                selectedContributors.length === 0 ||
                selectedContributors.includes(project.contributor);

            //  Filter by "Featured only"
            const matchesFeatured = !featuredOnly || project.featured;

        return (
            matchesCategory &&
            matchesSearch &&
            matchesContributors &&
            matchesFeatured
        );
    });
  }, [projects, selectedTechnology, searchQuery, selectedContributors, featuredOnly]);

  return {
    selectedTechnology,
    setSelectedTechnology,
    selectedContributors,
    setSelectedContributors,
    featuredOnly,
    setFeaturedOnly,
    searchQuery,
    setSearchQuery,
    filteredProjects,
  };
};
