import React from "react";
import Button from "@/components/ui/Button";

import viewLive from "@/assets/images/viewmore.png";
import laptopComputer from "@/assets/images/computer.png";
import { ArrowLeft, Import } from "lucide-react";
import adebowale from "@/assets/images/adebowale.png";
import akinola from "@/assets/images/Akinola.png";
import tobechi from "@/assets/images/Tobechi.png";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import hpLite from "@/assets/images/_ HP Elite Dragonfly (1).png";
import iphone16 from "@/assets/images/iPhone 16 Pro (1).png";
import zenBook from "@/assets/images/ZenBook Duo 14.png";
import macbookair from "@/assets/images/MacBook Air (2022).png"
import macbookair2022 from"@/assets/images/MacBook Air (2022) (1).png"
import macbookair3 from "@/assets/images/MacBook Air3 (2022).png"
import { Link,useParams } from "react-router-dom";
import { projectData } from "./ProjectData";
function ProjectDetails() {
  const data = [
    { id: 1, title: "#UI" },
    { id: 2, title: "#Figma" },
    { id: 3, title: "#Webdesign" },
    { id: 4, title: "#Frontend" },
  ];
  const Contributors = [
    {
      id: 1,
      name: "Adebowale Adedamola (Ajkreations)",
      experience: "Graphic & UI/UX Designer",
      image: adebowale,
    },
    {
      id: 2,
      name: "Akinola Kinz",
      experience: "UI/UX Designer",
      image: akinola,
    },
    {
      id: 3,
      name: " Kabogo Michael",
      experience: "Graphic & UI/UX Designer",
      image: adebowale,
    },
    {
      id: 4,
      name: "Tobechi Duru",
      experience: "Graphic & UI/UX Designer",
      image: tobechi,
    },
  ];

  const images = [
    { id: 1, image: hpLite },
    { id: 2, image: iphone16 },
    {id:3,image:macbookair},
    {id:4,image:macbookair2022},
    { id: 5, image: zenBook },
    {id:6,image:macbookair3}

  ];

  const {id} = useParams();
  console.log("url", id);
  const project = projectData.find((item)=> item.id === Number(id));
  console.log(project);
if (!project) {
  return <div className="p-10 text-red-600 text-center text-xl">No project details found  😢 </div>
}
  return (
    <>
      <section className="lg:mx-20 mx-3 md:mx-5 ">
        {/* header section */}

        <div className="flex md:justify-between flex-col justify-center  md:flex-row mt-6 ">
          <Button className="border-blue-500 md:border-2 hidden md:block rounded-xl pl-0 w-[120px] h-[40px]  md:hover:bg-blue-500 hover:text-white ">
            {" "}
            
            <Link to="/projects" className="flex gap-4 ">
              {" "}
              <ArrowLeft
                className=" md:w-[20px] md:h-[20px] md:text-black  md:dark:text-white md:bg-transparent bg-black  text-white  rounded-full"
                size={30}
              />
              <h3 >Back</h3>
            </Link>
          </Button>
          <Link to="/projects" className="block md:hidden bg-white w-[30px] h-[30px] rounded-full hover:bg-blue-500">
            <ArrowLeft
                className="text-black "
                size={30}
              />
          </Link>
          <div className="text-center ">
            <h1 className="font-bold tracking-wide text-2xl uppercase mb-1 md:text-end">
              {project.title}
            </h1>
            <h4 className="dark:text-[#D9D9D9] font-light">
              A refreshed UI for a smoother community experience
            </h4>
          </div>
        </div>

        {/* frame image section */}
        <div className="mt-10 flex justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="md:w-[800px] md:h-[400px] w-screen h-[200px] rounded-md  "
          />
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <h3 className="text-[#6A5DFF] text-lg font-bold text-center md:text-start ">
            Overview
          </h3>
          <p className="text-[14px] tracking-wide w-screen md:text-start text-center font-light">
           {project.description}
          </p>

          <div className="flex gap-2">
            
              <div
                className="bg-[#161B22] px-[10px] py-[5px] rounded-lg"
              >
                <h2 className="text-white text-sm">#{project.technology}</h2>
              </div>
          </div>
          <div className="flex gap-4">
            <Button className="border-[#00C38A] border-2 flex md:gap-x-2 hover:bg-[#00C38A]  text-[#00AEEF] font-bold  hover:text-white  ">
              <img
                src={viewLive}
                alt="viewLive_png"
                className=" w-[20px] h-[20px] object-cover "
              />{" "}
              View live
            </Button>

            <Link to={project.github}>
            <Button className=" flex ring-2 ring-blue-500  p-[12px] gap-x-2 hover:bg-blue-500 text-[#6A5DFF] dark:text-white hover:text-white font-bold" >
              <img
                src={laptopComputer}
                alt="laptop computer"
                className="w-[24px] h-[24px] object-cover"
              />{" "}
              Github Repo
            </Button>

            </Link>
            
          </div>
        </div>

        {/* contributors  for each card */}
        <div className="my-24 ">
          <h3 className="text-[#6A5DFF] text-xl">Contributors</h3>
          <div className="grid md:grid-cols-2 grid-cols-1   text-white ">
            {project.contributors.map((contributor) => (
              <div
                key={contributor.id}
                className="flex  m-3 bg-[#161B22] hover:shadow-sm hover:shadow-blue-400 items-center  p-3 gap-3 rounded-xl  w-80"
              >
                <div>
                  <img src={adebowale} alt="contributer" className="w-10 h-15" />
                </div>

                <div >
                  <h3 className="text-base font-bold tracking-wide">
                    {contributor}
                  </h3>
                  <li className="text-sm list-none">{project.technology}</li>
                  <div className="flex gap-1">
                    <FaLinkedin className="w-4 h-4" />
                    <FaSquareFacebook className="w-4 h-4" />
                    <FaSquareTwitter className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:px-[65px] md:py-[31px]  ">
          <h3 className="font-bold mb-2 md:text-start text-center">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  justify-around">
            {images.map((image) => (
              <div
                key={image.id}
                className="bg-[#161B22]  overflow-hidden  rounded-md"
              >
                <img src={image.image} alt="images" className="w-[350px] h-[262px] object-cover" />
              </div>
            ))}
          </div>

          <div className="flex justify-center my-8">
            <Button className="w-[249px] h-[56px] border-2 border-blue-500 font-bold ">
              View More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetails;
