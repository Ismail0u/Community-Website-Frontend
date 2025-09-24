import React, { useState } from "react";
import { ChevronDown, SearchIcon } from "lucide-react";
import {
  DiGithubBadge,
  DiJavascript,
  DiReact,
  DiWordpress,
  DiCss3,
} from "react-icons/di";
import { SiTailwindcss, SiFigma, SiFramer } from "react-icons/si";

const tagIcons = {
  React: <DiReact className="text-sky-500 w-6 h-6" />,
  JavaScript: <DiJavascript className="text-yellow-500 w-6 h-6" />,
  JSON: <DiJavascript className="text-yellow-500 w-6 h-6" />,
  CSS: <DiCss3 className="text-blue-500 w-6 h-6" />,
  Tailwind: <SiTailwindcss className="text-cyan-500 w-6 h-6" />,
  WordPress: <DiWordpress className="text-indigo-500 w-6 h-6" />,
  Figma: <SiFigma className="text-pink-500 w-6 h-6" />,
  Framer: <SiFramer className="text-purple-500 w6 h-6" />,
  Layout: <DiCss3 className="text-blue-400 w-6 h-6" />,
  Performance: <DiReact className="text-green-500 w-6 h-6" />,
};

const resources = [
  {
    id: 1,
    title: "React Hooks Overview",
    author: "Alice Johnson",
    category: "React",
    level: "intermediate",
    tags: ["React", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=100&fit=crop",
    featured: true,
    github:
      "https://github.com/DevByte-Community/Community-Website-Frontend/tree/4022bfb31f53b91355bcd091b753b2d708c066dd/.github/ISSUE_TEMPLATE",
  },
  {
    id: 2,
    title: "Design Systems",
    author: "DevByte Team",
    category: "Figma",
    level: "advanced",
    tags: ["Figma", "Framer"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=100&fit=crop",
    featured: true,
    github:
      "https://github.com/DevByte-Community/Community-Website-Frontend/tree/4022bfb31f53b91355bcd091b753b2d708c066dd/.github/ISSUE_TEMPLATE",
  },
  {
    id: 3,
    title: "Advanced JavaScript",
    author: "John Doe",
    category: "JavaScript",
    level: "intermediate",
    tags: ["JavaScript", "JSON"],
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=200&fit=crop",
    featured: false,
    github:
      "https://github.com/DevByte-Community/Community-Website-Frontend/tree/4022bfb31f53b91355bcd091b753b2d708c066dd/.github/ISSUE_TEMPLATE",
  },
  {
    id: 4,
    title: "Tailwind Basics",
    author: "Jane Smith",
    category: "Tailwind",
    level: "beginner",
    tags: ["Tailwind", "CSS"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",
    featured: false,
    github:
      "https://github.com/DevByte-Community/Community-Website-Frontend/tree/4022bfb31f53b91355bcd091b753b2d708c066dd/.github/ISSUE_TEMPLATE",
  },
  {
    id: 5,
    title: "CSS Grid Guide",
    author: "Alex Brown",
    category: "CSS",
    level: "intermediate",
    tags: ["CSS", "Layout"],
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=200&fit=crop",
    featured: true,
    github:
      "https://github.com/DevByte-Community/Community-Website-Frontend/tree/4022bfb31f53b91355bcd091b753b2d708c066dd/.github/ISSUE_TEMPLATE",
  },
  {
    id: 6,
    title: "React Performance",
    author: "Sarah Wilson",
    category: "React",
    level: "intermediate",
    tags: ["React", "Performance"],
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=200&fit=crop",
    featured: false,
    github:
      "https://github.com/DevByte-Community/Community-Website-Frontend/tree/4022bfb31f53b91355bcd091b753b2d708c066dd/.github/ISSUE_TEMPLATE",
  },
];

// Component to display a single resource card
const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-opacity-20 overflow-hidden w-full shadow-gray-400 shadow-sm rounded-lg flex flex-col p-3 transition-transform transform hover:scale-105 hover:shadow-lg">
      {/* Resource image */}
      <img
        src={resource.image}
        alt={resource.title}
        className="w-full h-40 object-cover rounded-t-lg"
      />

      {/* Resource content */}
      <div className="p-4 text-[#161B22] dark:text-[#FFFF] flex flex-col flex-grow text-center">
        {/* Resource title */}
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          {resource.title}
        </h2>

        {/* Resource author */}
        <p className="text-sm sm:text-base font-semibold text-[#161B22] dark:text-[#FFFF] mb-3">
          {resource.author}
        </p>

        {/* Tags section */}
        <div className="flex flex-wrap justify-center gap-3 mt-5">
          {resource.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-[#D9D9D9] border rounded-full flex items-center justify-center px-6 py-1 text-sm"
            >
              {/* Show an icon if available, otherwise just show the tag text */}
              {tagIcons[tag] || <span className="text-gray-700">{tag}</span>}
            </div>
          ))}
        </div>

        {/* GitHub link (if resource has one) */}
        {resource.github && (
          <a
            href={resource.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-end justify-end mt-auto"
          >
            <DiGithubBadge size={30} />
          </a>
        )}
      </div>
    </div>
  );
};

const Learning = () => {
  // State for filtering resources
  const [selectedCategory, setSelectedCategory] = useState(""); // filter by category
  const [selectedLevel, setSelectedLevel] = useState(""); // filter by difficulty level
  const [searchQuery, setSearchQuery] = useState(""); // filter by search input

  // Apply filters to resources
  const filteredResources = resources.filter((res) => {
    // Match selected category (if any)
    const matchesCategory =
      !selectedCategory ||
      res.category.toLowerCase() === selectedCategory.toLowerCase();

    // Match selected level (if any)
    const matchesLevel =
      !selectedLevel || res.level.toLowerCase() === selectedLevel.toLowerCase();

    // Match search query against title or author
    const matchesSearch =
      !searchQuery ||
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.author.toLowerCase().includes(searchQuery.toLowerCase());

    // Resource must satisfy all active filters
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen max-w-full  ">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] darkfrom-[#0C546E] dark:to-[#183D72] text-center p-6">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Learning Hub
        </h1>
        <p className="text-[#FFFF] text-sm sm:text-lg pt-3">
          Browse tutorials, articles and resources shared by the community
        </p>
      </div>

      {/* Filters */}
      <div className=" mx-auto max-w-6xl px-4 flex flex-wrap gap-4 justify-center items-center bg-[#D9D9D9] dark:bg-[#161B22] text-[#161B22] dark:text-[#D9D9D9]  p-5  mt-6">
        {/* Category */}
        <div className="relative w-full sm:w-40">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-[#FFFF] dark:bg-[#2A2F36] dark:text-[#D9D9D9]  px-3 py-2 pr-5 rounded-md appearance-none focus:outline-none font-semibold "
          >
            <option value="">All Category</option>
            <option value="javascript">Javascript</option>
            <option value="react">React</option>
            <option value="tailwind">Tailwind</option>
            <option value="css">CSS</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-[#161B22] dark:text-[#D9D9D9] pointer-events-none" />
        </div>

        {/* Level */}
        <div className="relative w-full sm:w-40">
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="w-full bg-[#FFFF] text-[#161B22] dark:bg-[#2A2F36] dark:text-[#D9D9D9] font-semibold  px-3 py-2 pr-5 rounded-md appearance-none focus:outline-none"
          >
            <option value="">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-[#161B22] dark:text-[#D9D9D9]  pointer-events-none" />
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search resources..."
            className="w-full p-2 bg-[#FFFF] dark:bg-[#2A2F36] dark:placeholder-[#D9D9D9] placeholder-[#161B22] font-semibold rounded-md           
 pl-3 focus:outline-none"
          />

          <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-[#161B22] dark:text-[#D9D9D9]  " />
        </div>
      </div>

      {/* Featured Resources */}
      <div className="pt-8 mx-auto px-4 max-w-6xl">
        <h1 className="text-xl sm:text-2xl font-bold text-[#161B22] dark:text-[#D9D9D9] text-center p-5">
          Featured Resources
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredResources
            .filter((res) => res.featured)
            .map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
        </div>
      </div>

      {/* All Resources */}
      <div className="pt-10  mx-auto px-4 max-w-6xl">
        <h1 className="text-xl sm:text-2xl font-bold text-[#161B22] dark:text-[#D9D9D9] text-center pb-5">
          All Resources
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredResources
            .filter((res) => !res.featured)
            .map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] dark:from-[#0C546E] dark:to-[#183D72] text-center p-6 mt-10">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Contribute a Resource
        </h1>
        <p className="text-[#FFFF] text-sm sm:text-lg pt-3">
          Share articles, tutorials or links with Devbyte
        </p>
        <a
          href="https://github.com/DevByte-Community/Community-Website-Frontend/tree/4022bfb31f53b91355bcd091b753b2d708c066dd/.github/ISSUE_TEMPLATE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-1 mt-2 border border-[#6767ec] hover:border-[#5f5fb8]  text-white rounded-full"
        >
          View Source
        </a>
      </div>
    </div>
  );
};

export default Learning;
