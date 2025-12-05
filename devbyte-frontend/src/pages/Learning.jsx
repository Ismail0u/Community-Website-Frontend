import React, { useState } from "react";
import { ChevronDown, SearchIcon } from "lucide-react";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";
import {
  DiGithubBadge,
  DiJavascript,
  DiReact,
  DiWordpress,
  DiCss3,
} from "react-icons/di";
import { SiTailwindcss, SiFigma, SiFramer } from "react-icons/si";
import Card from "@/components/ui/Card";
import HeaderWrapper from "@/components/ui/Header";
import Button from "@/components/ui/Button";

const tagIcons = {
  React: <DiReact className="w-6 h-6 text-sky-500" />,
  JavaScript: <DiJavascript className="w-6 h-6 text-yellow-500" />,
  JSON: <DiJavascript className="w-6 h-6 text-yellow-500" />,
  CSS: <DiCss3 className="w-6 h-6 text-blue-500" />,
  Tailwind: <SiTailwindcss className="w-6 h-6 text-cyan-500" />,
  WordPress: <DiWordpress className="w-6 h-6 text-indigo-500" />,
  Figma: <SiFigma className="w-6 h-6 text-pink-500" />,
  Framer: <SiFramer className="h-6 text-purple-500 w6" />,
  Layout: <DiCss3 className="w-6 h-6 text-blue-400" />,
  Performance: <DiReact className="w-6 h-6 text-green-500" />,
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
    <Card className="flex flex-col w-full overflow-hidden bg-opacity-20">
      {/* Resource image */}
      <img
        src={resource.image}
        alt={resource.title}
        className="object-cover w-full h-40 rounded-t-lg"
      />

      {/* Resource content */}
      <div className="p-4 text-[#161B22] dark:text-[#FFFF] flex flex-col flex-grow text-center">
        {/* Resource title */}
        <h2 className="mb-2 text-lg sm:text-xl">{resource.title}</h2>

        {/* Resource author */}
        <p className="text-sm sm:text-base  text-[#161B22] dark:text-[#FFFF] mb-3">
          {resource.author}
        </p>

        {/* Tags section */}
        <div className="flex flex-wrap justify-center gap-3 mt-5">
          {resource.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-[#D9D9D9] border rounded-sm flex items-center justify-center px-6 py-1 text-sm"
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
    </Card>
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
    <div className="z-0 max-w-full min-h-screen ">
      {/* Header */}
      <HeaderWrapper className="text-center ">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl">Learning Hub</h1>
        <p className="pt-3 text-md sm:text-lg">
          Browse tutorials, articles and resources shared by the community
        </p>
      </HeaderWrapper>

      {/* Filters */}
      <AnimatedWrapper>
        <div className=" mx-auto max-w-6xl px-4 flex flex-wrap gap-4 justify-center items-center bg-[#D9D9D9] dark:bg-[#161B22] text-[#161B22] dark:text-[#D9D9D9]  p-5  mt-6">
          {/* Category */}
          <div className="relative w-full sm:w-40">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-[#FFFF] dark:bg-[#2A2F36] dark:text-[#D9D9D9]  px-3 py-2 pr-5 rounded-md appearance-none focus:outline-none "
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
              className="w-full bg-[#FFFF] text-[#161B22] dark:bg-[#2A2F36] dark:text-[#D9D9D9]  px-3 py-2 pr-5 rounded-md appearance-none focus:outline-none"
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
              className="w-full p-2 bg-[#FFFF] dark:bg-[#2A2F36] dark:placeholder-[#D9D9D9] placeholder-[#161B22] cursor-pointer  rounded-md           
 pl-3 focus:outline-none"
            />

            <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-[#161B22] dark:text-[#D9D9D9]  " />
          </div>
        </div>
      </AnimatedWrapper>

      {/* Featured Resources */}
      <AnimatedWrapper>
        <div className="max-w-6xl px-4 pt-8 mx-auto">
          <h1 className="text-xl sm:text-2xl  text-[#161B22] dark:text-[#D9D9D9] text-center p-5">
            Featured Resources
          </h1>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources
              .filter((res) => res.featured)
              .map((res) => (
                <ResourceCard key={res.id} resource={res} />
              ))}
          </div>
        </div>
      </AnimatedWrapper>

      {/* All Resources */}
      <AnimatedWrapper>
        <div className="max-w-6xl px-4 pt-10 mx-auto space-y-2">
          <h1 className="text-xl sm:text-2xl  text-[#161B22] dark:text-[#D9D9D9] text-center pb-5">
            All Resources
          </h1>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources
              .filter((res) => !res.featured)
              .map((res) => (
                <ResourceCard key={res.id} resource={res} />
              ))}
          </div>
        </div>
      </AnimatedWrapper>

      {/* Footer */}
      <AnimatedWrapper>
        <HeaderWrapper className="p-6 mt-10 text-center ">
          <h1 className="text-[#161B22] dark:text-white text-3xl sm:text-3xl lg:text-4xl ">
            Contribute a Resource
          </h1>
          <p className="text-[#161B22] dark:text-white text-sm sm:text-lg pt-3">
            Share articles, tutorials or links with Devbyte
          </p>

          <a
            href="https://github.com/DevByte-Community/Community-Website-Frontend/tree/4022bfb31f53b91355bcd091b753b2d708c066dd/.github/ISSUE_TEMPLATE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="inline-block  bg-blue-500 hover:bg-blue-700 mt-2  text-[#FFFFFF] dark:text-white ">
              View Source
            </Button>
          </a>
        </HeaderWrapper>
      </AnimatedWrapper>
    </div>
  );
};

export default Learning;
