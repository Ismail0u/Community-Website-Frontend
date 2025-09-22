import React from "react";
import { Card } from "@/components/ui/card";
import { Users, Laptop, MicVocal, CircleChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import frame28 from "../assets/images/Frame 28.png";
import User1 from "../assets/images/User 1.png";
import User2 from "../assets/images/User 2.png";
import User3 from "../assets/images/User 3.png";
import User4 from "../assets/images/User 4.png";
import User5 from "../assets/images/User 5.png";
import User6 from "../assets/images/User 6.png";
import learning from "../assets/images/learning.png";
import blog from "../assets/images/blog.png";

const Home = () => {
  const members = [
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

  const leaarningData = [
    {
      image: learning,
      tag: "Backend",
      title: "Backend Basics",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      image: learning,
      tag: "Backend",
      title: "Backend Basics",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      image: learning,
      tag: "Backend",
      title: "Backend Basics",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];

  const projects = [
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
        "Commanr-Line interface for DevByte community. Manage projects, deploy apps, and streamline your workflow",
    },
    {
      title: "UI Component Library",
      technologies: ["FIGMA"],
      about:
        "Reusable UI components designed in Figma. Perfect for rapid prototyping and consistent design systems",
    },
  ];

  const opportunities = [
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

  const blogPosts = [
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

  return (
    <div className="relative  overflow-hidden w-full">
      <div class="absolute top-8 left-20 w-[30%] md:h-64 h-40 bg-gradient-to-r from-[#00AEEF] to-transparent rounded-full blur-3xl"></div>
      <div class="absolute top-8 md:right-40 right-0 md:w-32 w-20 h-28 bg-gradient-to-r from-[#00C38A] to-transparent rounded-full blur-2xl"></div>

      <div class="relative z-10 flex flex-col items-center md:justify-center md:mt-0 pt-20 min-h-screen">
        <div class="absolute bottom-20 right-0 w-[20%] h-40 bg-gradient-to-r from-[#6A5DFF] to-transparent rounded-full blur-3xl"></div>

        <div className="w-[70%] text-center">
          <h1 className="text-[36px] md:text-[48px] bg-clip-text text-transparent bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] font-bold">
            DevByte Community
          </h1>
          <h1 className="text-[20px] mt-5">
            Discover a space where tech talemts share resources, showcase
            projects, and explore career opportunities
          </h1>
        </div>
        <div className="mt-7 flex gap-3 ">
          <button className="w-full text-[18px] text-nowrap px-3 border border-[#00AEEF] bg-gradient-to-r from-white to-white hover:from-[#00AEEF] hover:to-[#6A5DFF] transition-all duration-700  hover:text-white py-2 rounded-full font-semibold">
            Join Community
          </button>
          <button className="w-full text-[18px] text-nowrap px-3 border bg-[#00C38A] text-white py-2 rounded-full font-semibold">
            Learn More
          </button>
        </div>

        <div className="mt-10  px-7 flex flex-wrap justify-center gap-[45px]">
          <Card className=" p-10 flex items-center gap-3 bg-white/90 shadow-lg w-[350px] ">
            <Users />
            <div>
              <h1 className="text-[20px] font-semibold text-left">2500+</h1>
              <h1 className="text-[20px] font-semibold text-nowrap text-left">
                Active Members
              </h1>
            </div>
          </Card>
          <Card className=" p-10 flex  items-center gap-3 bg-white/90 shadow-lg w-[350px] ">
            <Laptop />
            <div>
              <h1 className="text-[20px] font-semibold text-left">150+</h1>
              <h1 className="text-[20px] font-semibold text-nowrap text-left">
                Open Source Projects
              </h1>
            </div>
          </Card>
          <Card className=" p-10 flex  items-center gap-3  bg-white/90 shadow-lg w-[350px] ">
            <MicVocal />
            <div>
              <h1 className="text-[20px] font-semibold text-left">48</h1>
              <h1 className="text-[20px] font-semibold text-nowrap text-left">
                Events This Year
              </h1>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-20 md:mt-10 ">
        {/* Upcoming Events */}
        <Card className="flex flex-col items-center p-4 space-y-3 shadow-2xl md:w-[681px] w-[350px]">
          <h1 className="border-[1px] border-[#00C38A] rounded-full p-1 text-[12px] font-semibold">
            UPCOMING EVENT
          </h1>
          <h1 className="text-[24px] font-semibold">
            Tech Career Fair 2025: Unlock Your Future
          </h1>
          <h1 className="text-[16px] font-semibold">
            Friday, September 12 . 10:00 AM - 4:00 PM
          </h1>
          <h1 className="text-[16px]">
            Join us for a full day career fair with top tech companies,
            workshop, and networking opportunities designed to help you land
            your dream role
          </h1>
          <button className="w-fit text-[15px] text-nowrap px-3 border bg-[#00C38A] text-white py-2 rounded-full font-semibold">
            Register Now
          </button>
        </Card>

        {/* Post */}
        <Card className="flex flex-col items-center p-4 space-y-3 shadow-2xl md:w-[421px] w-[350px]">
          <img src={frame28} alt="" className="w-[200px] h-[120px]" />
          <h1 className="text-xl font-semibold">
            How Open Source Projects Shape AI
          </h1>
          <h1 className="text-[16px]">
            Discover how developers worldwide are collaborating on open-source
            tools that power AI, and why it matters
          </h1>
          <a
            className="flex gap-1 justify-end items-center bg-clip-text text-transparent bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] text-[14px] w-full"
            href=""
          >
            Read More <CircleChevronRight size={15} color="#6A5DFF" />
          </a>
        </Card>
      </div>

      {/* Members */}
      <div>
        <div className="text-center">
          <h1 className="text-[28px] font-semibold mt-60 text-center">
            Meet Our Members
          </h1>
          <h1 className="pt-2 text-[18px] text-center">
            A growing network of developers, designers,tech enthusiasts
          </h1>
        </div>
        <div className="flex flex-wrap max-w-[1000px] mx-auto justify-center items-center mt-7 gap-[32px]">
          {members.map((member) => (
            <Card className="flex flex-col items-center space-y-[6px] p-5 w-[310px] h-[212px] shadow-lg">
              <img src={member.image} alt="" className="w-[80px] h-[80px]" />
              <h1 className="text-[18px] font-semibold">{member.name}</h1>
              <h1 className="text-[16px]">{member.role}</h1>
              <div className="flex gap-5">
                {member.technologies.map((technology) => (
                  <h1 className="bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] rounded-full text-white py-[2px] px-2 text-[14px]">
                    {technology}
                  </h1>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="w-full flex flex-col items-center mt-3">
          <h1 className="border-[1px] border-[#00AEEF] w-fit rounded-full p-2 text-[20px] font-semibold">
            Explore Learning Hub
          </h1>
          <h1 className="font-semibold text-[18px]">
            Join Devbyte and get listed
          </h1>
        </div>
      </div>

      {/* Learning */}
      <div className="">
        <div className="text-center">
          <h1 className="text-[28px] font-semibold mt-40">
            Learn, Share, Grow
          </h1>
          <h1 className="pt-2 text-[18px]">
            Explore articles, tutorials, and resources from community memebers
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-[32px]  mt-7">
          {leaarningData.map((data) => (
            <Card className="p-3 text-left space-y-2 shadow-xl w-[356px]">
              <img src={data.image} alt="" className="w-full" />
              <h1 className="w-fit bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] rounded-full text-white py-[2px] px-2 text-[12px]">
                {data.tag}
              </h1>
              <h1 className="text-[20px] font-semibold">{data.title}</h1>
              <h1 className="line-clamp-3 text-[16px]">{data.body}</h1>
              <a
                className="flex gap-2 justify-start items-center bg-clip-text text-transparent bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] text-[14px] w-full"
                href=""
              >
                Read More <CircleChevronRight size={15} color="#00AEEF" />
              </a>
            </Card>
          ))}
        </div>
        <div className="w-full flex justify-center mt-5">
          <h1 className="border-[1px] border-[#00AEEF] w-fit rounded-full p-2 text-[16px] font-semibold">
            Explore Learning Hub
          </h1>
        </div>
      </div>

      {/* Community Projects */}
      <div>
        <div className="text-center">
          <h1 className="text-[28px] font-semibold mt-40">
            Community Projects
          </h1>
          <h1 className="pt-2 text-[18px]">
            Discover and contribute to pen-source projects built by DevByte
            members{" "}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-[32px] mt-7">
          {projects.map((project) => (
            <Card className="p-5 shadow-xl space-y-5 w-[350px]">
              <h1 className="text-[20px] font-semibold">{project.title}</h1>
              <div className="flex justify-center gap-3">
                {project.technologies.map((technology) => (
                  <h1 className="bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] rounded-full text-white py-[2px] px-2 text-[12px]">
                    {technology}
                  </h1>
                ))}
              </div>
              <h1 className="text-left text-[16px]">{project.about}</h1>
              <div className="flex justify-center">
                <button className="w-fit flex items-center gap-2 text-[14px] text-nowrap px-3 border bg-[#00C38A] text-white py-2 rounded-full font-semibold">
                  <FaGithub /> View on GitHub
                </button>
              </div>
            </Card>
          ))}
        </div>
        <div className="w-full flex justify-center mt-5">
          <h1 className="border-[1px] border-[#00AEEF] w-fit rounded-xl p-2 text-[16px] font-semibold">
            Explore All Projects
          </h1>
        </div>
      </div>

      {/* opportunities and collaboration */}
      <div>
        <div className="text-center">
          <h1 className="text-[28px] font-semibold mt-40">
            Opportunities & Collaboration
          </h1>
          <h1 className="pt-2 text-[18px]">
            Find jobs, freelance gigs, or connect with collaborators for your
            next project
          </h1>
        </div>
        <div className="flex flex-col items-center space-y-5 mt-5">
          {opportunities.map((opportunity) => (
            <Card className="flex md:flex-row flex-col md:justify-between md:p-5 p-[30px] shadow-xl items-center md:text-left text-center lg:w-[1000px] md:w-[700px] w-[348px]">
              <div className="space-y-[6px] md:w-[50%]">
                <h1 className="text-[20px] font-semibold">
                  {opportunity.title}
                </h1>
                <div className="flex md:justify-start justify-center gap-2 text-[16px]">
                  {opportunity.jobType.map((type, index) => (
                    <h1 className="text-[16px] flex gap-2 items-center ">
                      {type}{" "}
                      {index == 0 ? (
                        <span className=" w-1 h-1 bg-gray-600 rounded-full"></span>
                      ) : (
                        ""
                      )}
                    </h1>
                  ))}
                </div>

                <h1 className="text-[16px]">{opportunity.details}</h1>
              </div>
              <button className="w-fit flex items-center gap-2 text-[16px] md:mt-0 mt-5 text-nowrap px-4 border bg-[#00C38A] text-white py-2 md:rounded-full rounded-xl font-semibold">
                Apply Now
              </button>
            </Card>
          ))}
        </div>
        <div className="w-full flex justify-center mt-5">
          <h1 className="border-[1px] border-[#00AEEF] w-fit rounded-xl p-2 text-[16px] font-semibold">
            View All Opportunities
          </h1>
        </div>
      </div>

      {/* Blog */}

      <div>
        {" "}
        <div className="text-center">
          <h1 className="text-[28px] font-semibold mt-40">
            From the Devbyte Blog
          </h1>
          <h1 className="pt-2 text-[18px]">
            Comunity updates, tutorials and industry insights{" "}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-[32px] mt-5">
          {blogPosts.map((blog) => (
            <Card className="space-y-3 p-3 w-[350px]">
              <img src={blog.image} alt="" className="w-full" />
              <h1 className="bg-gradient-to-r w-fit from-[#00AEEF] to-[#6A5DFF] rounded-full text-white py-[2px] px-2 text-[12px]">
                UPDATE
              </h1>
              <h1 className="text-[20px] font-semibold">{blog.title}</h1>
              <h1>{blog.description}</h1>
              <a
                className="flex gap-2 justify-center items-center  text-[12px] w-full"
                href=""
              >
                Read More <CircleChevronRight size={15} />
              </a>
            </Card>
          ))}
        </div>
        <div className="w-full flex justify-center mt-5">
          <h1 className="border-[1px] border-[#00AEEF] w-fit rounded-xl p-2 text-[16px] font-semibold">
            View All Blog Posts
          </h1>
        </div>
      </div>

      <div className="bg-[#00AEEF]/[15%] mt-40 h-[400px] flex flex-col justify-center text-center items-center space-y-5">
        <h1 className="text-[36px] font-bold">Join DevByte Today</h1>
        <h1 className="text-[18px] font-semibold">
          Connect, Collaborate, and Grow with developers worldwide
        </h1>
        <div className="mt-7 flex gap-3 justify-center">
          <button className="w-fit text-[16px] text-nowrap px-3 border border-[#00AEEF] bg-gradient-to-r from-[#00AEEF]/[15%] to-[#00AEEF]/[15%] hover:from-[#00AEEF] hover:to-[#6A5DFF] transition-all duration-700  hover:text-white py-2 rounded-xl ">
            Sign UP Free
          </button>
          <button className="w-fit text-[16px] text-nowrap px-3 border bg-[#00C38A] text-white py-2 rounded-xl ">
            Login
          </button>
        </div>
      </div>


    </div>
  );
};

export default Home;
