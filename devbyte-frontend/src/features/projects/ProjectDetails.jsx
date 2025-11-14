import React from "react";
import Button from "@/components/ui/Button";
import frame from "@/assets/images/Frame 340.png";
import viewLive from "@/assets/images/viewmore.png";
import laptopComputer from "@/assets/images/computer.png";
import { ArrowLeft, Import } from "lucide-react";
import adebowale from "@/assets/images/adebowale.png";
import akinola from "@/assets/images/Akinola.png";
import kabogo from "@/assets/images/kabogo.png";
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
      image: kabogo,
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
  return (
    <>
      <section className="md:px-52 md:py-5 px-4 py-2  ">
        {/* header section */}

        <div className="flex md:justify-between flex-col justify-center  md:flex-row mt-6 ">
          <Button className="border-blue-500 md:border-2  rounded-xl pl-0 w-[120px] h-[40px] ">
            {" "}
            <a href="/" className="flex gap-4 ">
              {" "}
              <ArrowLeft
                className=" md:w-[20px md:h-[20px] md:text-black  md:dark:text-white md:bg-transparent bg-black  text-white  rounded-full"
                size={30}
              />
              <h3 className="hidden md:block">Back</h3>
            </a>
          </Button>
          <div className="text-center ">
            <h1 className="font-bold tracking-wide text-2xl uppercase mb-1 md:text-end">
              DevByte Website Redesign
            </h1>
            <h4 className="dark:text-[#D9D9D9] font-light">
              A refreshed UI for a smoother community experience
            </h4>
          </div>
        </div>

        {/* frame image section */}
        <div className="mt-10 flex justify-center">
          <img
            src={frame}
            alt="frame_340"
            className="md:w-[1080px] md:h-[500px] w-screen h-[200px] "
          />
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <h3 className="text-[#6A5DFF] text-lg font-bold text-center md:text-start ">
            Overview
          </h3>
          <p className="text-[14px] tracking-wide md:w-[1070px] w-[350px] md:text-start text-center font-light">
            DevByte Website Redesign focuses on simplifying navigation and
            improving the experience for first-time users. Built with Figma and
            Flutter, it offers a sleek dark interface and better performance.
          </p>

          <div className="flex gap-2">
            {data.map((title) => (
              <div
                key={title.id}
                className="bg-[#161B22] px-[10px] py-[5px] rounded-lg"
              >
                <h2 className="text-white text-sm">{title.title}</h2>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <Button className="border-[#00C38A] border-2 flex md:gap-x-2 hover:bg-[#00C38A]  text-[#00AEEF] font-bold  hover:text-white ">
              <img
                src={viewLive}
                alt="viewLive_png"
                className=" w-[20px] h-[20px] object-cover"
              />{" "}
              View live
            </Button>
            <Button className=" flex ring-2 ring-blue-500  p-[12px] gap-x-2 hover:bg-blue-500 text-[#6A5DFF] dark:text-white hover:text-white font-bold">
              <img
                src={laptopComputer}
                alt="laptop computer"
                className="w-[24px] h-[24px] object-cover"
              />{" "}
              Github Repo
            </Button>
          </div>
        </div>
        <div className="my-24 ">
          <h3 className="text-[#6A5DFF] text-xl">Contributors</h3>
          <div className="grid md:grid-cols-2 grid-cols-1   text-white ">
            {Contributors.map((user) => (
              <div
                key={user.id}
                className="flex m-3 bg-[#161B22] hover:shadow-sm hover:shadow-blue-400 items-center  p-3 gap-3 rounded-xl  md:w-[400px] h-[88px]"
              >
                <div>
                  <img src={user.image} alt={user.name} className="w-10 h-15" />
                </div>

                <div >
                  <h3 className="text-base font-bold tracking-wide">
                    {user.name}
                  </h3>
                  <p className="text-sm">{user.experience}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4  justify-around">
            {images.map((image) => (
              <div
                key={image.id}
                className="bg-[#161B22]   rounded-md"
              >
                <img src={image.image} alt="images" className="w-[350px] h-[262px] object-cover" />
              </div>
            ))}
          </div>

          <div className="flex justify-center my-8">
            <Button className="w-[249px] h-[56px] border-2 border-blue-500 ">
              View More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetails;
