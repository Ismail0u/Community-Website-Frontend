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
import { ProjectPage } from "@/features/projects/ProjectPage";



const Projects = () => {
  return (
        <div>
        <ProjectPage />
        </div>     
    );
};

export default Projects;