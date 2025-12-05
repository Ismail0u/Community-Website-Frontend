import User1 from "@/assets/images/User 1.png";
import User2 from "@/assets/images/User 2.png";
import User3 from "@/assets/images/User 3.png";
import User4 from "@/assets/images/User 4.png";
import User5 from "@/assets/images/User 5.png";
import User6 from "@/assets/images/User 6.png";
import learning from "@/assets/images/learning.png";
import blog from "@/assets/images/blog.png";
import slide1 from "@/assets/images/black-students-posing-with-gadgets.webp";
import slide2 from "@/assets/images/young-international-people-working-together-use-laptop.webp";
import slide3 from "@/assets/images/black-people-integrate-vr-ai-into-their-daily-job-routine.webp";
import slide4 from "@/assets/images/black-couple-balances-remote-work-technology-home-office.webp";
import slide5 from "@/assets/images/enthusiastic-multiracial-friends-looking-phone.webp";

// Memebers Data
export const members = [
  {
    image: User1,
    name: "Rose Smith",
    role: "Backend Engineer",
    technologies: ["Django", "Flask", "NodeJS"],
  },
  {
    image: User2,
    name: "Daniel Victor",
    role: "Frontend Engineer",
    technologies: ["React js", "Angular", "Vue js"],
  },
  {
    image: User3,
    name: "David Marcus",
    role: "Product Manager",
    technologies: ["Figma", "Framer", "Canva"],
  },
  {
    image: User4,
    name: "Rose Smith",
    role: "UI/UX Designer",
    technologies: ["Figma", "Framer", "Adope"],
  },
  {
    image: User5,
    name: "Kinz John",
    role: "Full Stack Developer",
    technologies: ["NodeJS", "Spring", "ReactJS"],
  },
  {
    image: User6,
    name: "James Chris",
    role: "Graphic Designer",
    technologies: ["Figma", "Framer", "Canva"],
  },
];

// Learning Data

export const learningData = [
  {
    id: 1,
    image: learning,
    tag: "Backend",
    title: "Backend Basics",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 2,
    image: learning,
    tag: "Backend",
    title: "Backend Basics",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 3,
    image: learning,
    tag: "Backend",
    title: "Backend Basics",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 4,
    image: learning,
    tag: "Backend",
    title: "Backend Basics",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];

// Projects Data

export const projects = [
  {
    title: "Awsesome Project",
    technologies: ["REACT", "LARAVEL", "TAILWINDCSS"],
    about:
      "A modern React Application that helps Developers manage their projects efficiently. Built with modern tools and best practices",
  },
  {
    title: "DevByte CLI Tool",
    technologies: ["REACT", "NODE JS", "PYTHON"],
    about:
      "Command-Line interface for DevByte community. Manage projects, deploy apps, and streamline your workflow",
  },
  {
    title: "UI Component Library",
    technologies: ["FIGMA"],
    about:
      "Reusable UI components designed in Figma. Perfect for rapid prototyping and consistent design systems",
  },
  {
    title: "UI Component Library",
    technologies: ["FIGMA"],
    about:
      "Reusable UI components designed in Figma. Perfect for rapid prototyping and consistent design systems",
  },
];

// Opportunities Data

export const opportunities = [
  {
    title: "Frontend Developer (React)",
    jobType: ["Freelance", "Remote"],
    details:
      "Looking for a skilled React developer to collaborate on a SaaS dashboard project. Flexible schedule, paid role",
  },
  {
    title: "UI/UX Designer",
    jobType: ["Paer-Time", "Remote"],
    details:
      "Seeking a creative designer to revamp our mobile app screens with modern UI patterns and smooth UX",
  },
  {
    title: "Frontend Developer (React)",
    jobType: ["Freelance", "Remote"],
    details:
      "Looking for a skilled React developer to collaborate on a SaaS dashboard project. Flexible schedule, paid role",
  },
];

// Blog Data

export const blogPosts = [
  {
    image: blog,
    title: "SAMPLE BLOG POST",
    description:
      "A short preview text giving insights into the blog post. Learn more about the latest community updates",
  },
  {
    image: blog,
    title: "SAMPLE BLOG POST",
    description:
      "A short preview text giving insights into the blog post. Learn more about the latest community updates",
  },
  {
    image: blog,
    title: "SAMPLE BLOG POST",
    description:
      "A short preview text giving insights into the blog post. Learn more about the latest community updates",
  },
  {
    image: blog,
    title: "SAMPLE BLOG POST",
    description:
      "A short preview text giving insights into the blog post. Learn more about the latest community updates",
  },
];

// Hero Section Carousel Data
export const carouselSlides = [
  {
    id: 1,
    title: "Welcome to DevByte Community",
    description:
      "Where Developers, Designers, and Innovators Connect, Learn, and Grow Together",
    image: slide1,
    bgColor:
      "bg-gradient-to-r from-[#F0F9FF] to-[#EEF2FF] dark:bg-gradient-to-r dark:from-[#0C1B2E] dark:to-[#1A1B3E]",
  },
  {
    id: 2,
    title: "Build Something Amazing Together",
    description:
      "Collaborate on 150+ Open Source Projects with Developers Worldwide",
    image: slide2,
    bgColor:
      "bg-gradient-to-r from-[#ECFDF5] to-[#F0F9FF] dark:bg-gradient-to-r dark:from-[#0C2E24] dark:to-[#0C1B2E]",
  },
  {
    id: 3,
    title: "Never Stop Learning",
    description:
      "Access Free Tutorials, Resources, and Workshops Shared by 2500+ Members",
    image: slide3,
    bgColor:
      "bg-gradient-to-r from-[#FAF5FF] to-[#F5F3FF] dark:bg-gradient-to-r dark:from-[#1F1B2E] dark:to-[#1A1B3E]",
  },
  {
    id: 4,
    title: "Launch Your Tech Career",
    description:
      "Discover Jobs, Freelance Gigs, and Networking Events Tailored for You",
    image: slide4,
    bgColor:
      "bg-gradient-to-r from-[#FFF7ED] to-[#FEF3C7] dark:bg-gradient-to-r dark:from-[#2E1F0C] dark:to-[#2E270C]",
  },
  {
    id: 5,
    title: "Connect at Our Next Event",
    description: "48 Events This Year – Workshops, Hackathons, and Tech Talks",
    image: slide5,
    bgColor:
      "bg-gradient-to-r from-[#F0FDFA] to-[#ECFDF5] dark:bg-gradient-to-r dark:from-[#0C2E2A] dark:to-[#0C2E24]",
  },
];
