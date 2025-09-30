import React, { useState, useMemo } from "react";
import { ChevronDown, SearchIcon, ArrowLeft, ArrowRight } from "lucide-react";
import {
  DiGithubBadge,
  DiJavascript,
  DiReact,
  DiWordpress,
  DiCss3,
} from "react-icons/di";
import { SiTailwindcss, SiFigma, SiFramer, SiNextdotjs, SiFlutter } from "react-icons/si";
import { FaGithub } from "react-icons/fa"; // For the 'View on GitHub' button


// Project data structure
const projects = [
  {
    id: 1,
    title: "Featured Project 1",
    description: "Task management app built with React and Firebase. Track projects, collaborate with teams.",
    technology: "React",
    contributors: ["Alice Johnson", "John Doe"],
    tags: ["React", "JavaScript", "Firebase"],
    featured: true,
    github: "https://github.com/DevByte-Community/project-1",
  },
  {
    id: 2,
    title: "Featured Project 2",
    description: "Powerful command-line interface that streamlines development workflows, manages configurations, automates applications, and automate tasks.",
    technology: "JavaScript",
    contributors: ["DevByte Team", "Jane Smith"],
    tags: ["JavaScript", "CLI", "Performance"],
    featured: true,
    github: "https://github.com/DevByte-Community/project-2",
  },
  {
    id: 3,
    title: "Featured Project 3",
    description: "Beautiful and accessible React components designed for modern web applications. Focus on usability, forms, modals, and navigation elements.",
    technology: "Next.js",
    contributors: ["Alex Brown"],
    tags: ["Next.js", "Tailwind", "Design"],
    featured: true,
    github: "https://github.com/DevByte-Community/project-3",
  },
  {
    id: 4,
    title: "Project 4: Task Manager",
    description: "Task management app built with React and Firebase. Track projects, collaborate with teams.",
    technology: "React",
    contributors: ["Alice Johnson"],
    tags: ["React", "JavaScript"],
    featured: false,
    github: "https://github.com/DevByte-Community/project-4",
  },
  {
    id: 5,
    title: "Project 5: Workflow CLI",
    description: "Powerful command-line interface that streamlines development workflows, manages configurations, automates applications, and automate tasks.",
    technology: "JavaScript",
    contributors: ["DevByte Team"],
    tags: ["JavaScript", "CLI"],
    featured: false,
    github: "https://github.com/DevByte-Community/project-5",
  },
  {
    id: 6,
    title: "Project 6: UI Components",
    description: "Beautiful and accessible React components designed for modern web applications. Focus on usability, forms, modals, and navigation elements.",
    technology: "Next.js",
    contributors: ["Alex Brown"],
    tags: ["Next.js", "Tailwind"],
    featured: false,
    github: "https://github.com/DevByte-Community/project-6",
  },
  {
    id: 7,
    title: "Project 7: Mobile App",
    description: "A cross-platform mobile application built with Flutter.",
    technology: "Flutter",
    contributors: ["Sarah Wilson", "John Doe"],
    tags: ["Flutter", "Mobile"],
    featured: false,
    github: "https://github.com/DevByte-Community/project-7",
  },
  {
    id: 8,
    title: "Project 8: Design System",
    description: "Comprehensive design system documentation and component library in Figma.",
    technology: "Figma",
    contributors: ["Jane Smith"],
    tags: ["Figma", "Design"],
    featured: false,
    github: "https://github.com/DevByte-Community/project-8",
  },
];

const Projects = () => {
  return <div>Projects</div>;
};

export default Projects;