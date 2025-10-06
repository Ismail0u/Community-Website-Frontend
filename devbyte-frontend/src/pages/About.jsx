import React from "react";
import design from "@/assets/images/design.png";
import glob from "@/assets/images/globe.png";
import handshake from "@/assets/images/handshake.png";
import handbag from "@/assets/images/handbag.png";
import group from "@/assets/images/Group.png";
import { Link } from "react-router-dom";
const Items = [
  {
    id: 1,
    image: group,
    header: "Knowledge sharing",
    description:
      "Access tutorials, resources, and events contributed by the community",
  },
  {
    id: 2,
    image: handshake,
    header: "collaboration",
    description:
      "Work with peers on open source projects and build your portfolio",
  },
  {
    id: 3,
    image: handbag,
    header: "Opportunities",
    description:
      "Discover jobs, freelance gigs, and career growth opportunities",
  },
  {
    id: 4,
    image: glob,
    header: "networking",
    description:
      "Connect with a global network of developers, designers, innovators",
  },
];
const About = () => {
  return (
    <>
    
      <section className=" relative bg-gradient-to-r from-[#00AEEF]/15 to-[#6A5DFF]/15  dark:bg-[linear-gradient(to_right,#0F3F58_0%,#0F3F58_30%,#282B5C_100%)] h-[171px] md:h-[480px] py-[20px] px-[10px] ">
        <div className="absolute z-10 w-[400px] h-[400px] bg-[#6A5DFF]/30 rounded-full blur-3xl  hidden md:flex"></div>
        <div className="flex flex-col gap-5 items-center justify-center h-full text-center    ">
          <div>
            <h1 className="text-3xl font-extrabold mb-6"> About DevByte</h1>
            <div className="w-14 h-1 bg-[linear-gradient(to_right,#00AEEF,#6A5DFF)] flex ml-14" />
          </div>

          <div>
            <p className="text-sm font-light">
              We are a global tech Community Where Developers, Designers, and
              innovators{" "}
              <span className=" md:block">
                come together to learn, collaborate, and grow.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision content goes here */}
      <section className="py-[0px]  md:py-[120px] md:px-[100px]  h-[362px] md:h-[418px] border-b-2 dark:border-none">
        <h1 className="text-center font-bold text-3xl md:text-[28px] my-[20px]">
          Our Mission & Vision
        </h1>
        <div className="flex md:flex-row flex-col  md:justify-around justify-center items-center gap-3 ">
          {/* our mission title goes here */}
          <div className="w-[560px]  h-[140px] flex flex-col items-center">
            <div className="flex flex-col items-center mb-2 gap-2">
              <h1 className="font-bold capitalize text-2xl md:mb-0 mb-[10px]">
                our mission
              </h1>
              <div className="w-14 h-1 bg-[linear-gradient(to_right,#00AEEF,#6A5DFF)] flex " />
            </div>

            <p className="text-center font-light text-sm w-[303px]  md:w-[352px]  ">
              To create a central hub where tech talents can connect, share
              knowledge, and build opportunities for growth{" "}
            </p>
          </div>

          {/* our vision title  goes here */}
          <div className="w-[560px] h-[140px] flex flex-col items-center">
            <div className="flex flex-col items-center gap-2 mb-2 px-4">
              <h1 className="font-bold capitalize text-2xl md:mb-0 mb-[10px]">
                our vision
              </h1>
              <div className="w-14 h-1 bg-[linear-gradient(to_right,#00AEEF,#6A5DFF)] flex " />
            </div>
            <p className="text-center text-sm font-light  w-[300px] md:w-[352px] ">
              To become the go-to community where future innovators collaborate
              on projects that impact the tech world
            </p>
          </div>
        </div>
      </section>

      {/* Our Story goes here */}
      <section className="dark:bg-[#161B22] border-b-2 dark:border-none h-[231px] md:h-[356px] flex flex-col gap-1 justify-center items-center">
        <h1 className="font-bold text-3xl mb-2">Our Story</h1>
        <p className=" h-[147px] w-[330px]  md:w-[560px] font-light text-[14px] md:text-[18px] text-center  overflow-hidden">
          DevByte began as a small initiative by passionate tech enthusiasts who
          wanted to create a space where learning and collaboration thrive. Over
          time, it has grown into a diverse community of developers, designers,
          and innovators working together to share resources, build projects,
          and shape the future of technology.
        </p>
      </section>

      {/* Why Join Us content goes here */}
      <section className="p-10">
        <h1 className="text-center text-3xl font-bold mb-7">Why Join Us</h1>

        {/* design card component goes here  */}
        <div className="md:flex  justify-center hidden ">
          <div className="w-[381px] h-[381px] shadow-md dark:bg-[#161B22] p-4 rounded-xl my-[40px]">
            <img src={design} alt="design" />
            <div className="flex flex-col gap-2 mt-4">
              <h1 className="uppercase text-[#0BA7F1] font-semibold text-[12px]">
                design
              </h1>
              <h4 className="font-semibold text-[20px]">
                Designing for Accessibility
              </h4>
              <p className="text-sm font-light ">
                Inclusive design principle every designer should know{" "}
              </p>
            </div>

            <Link to={"/"} className="text-[#0BA7F1] py-5 ">
              Read More{" "}
            </Link>
          </div>
        </div>

        {/* knowledge sharing,collaborations,opportunities and networking cards goes here */}
        <div className="flex justify-center items-center  flex-col md:flex-row gap-4">
          {Items.map((item) => (
            <div
              key={item.id}
              className="shadow-md   dark:bg-[#161B22] flex   flex-col items-center justify-center gap-1 p-3 rounded-lg h-[250px] w-[300px] "
            >
              <img
                src={item.image}
                alt={item.header}
                className="w-[40px] h-[40px]"
              />
              <h2 className="capitalize text-xl font-bold">{item.header}</h2>
              <p className="text-sm text-center font-light ">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Be Part of the DevByte Community goes here */}
      {/* [linear-gradient(to_right,#00AEEF,#6A5DFF)] */}
      <section className="  h-[400px] flex flex-col justify-center items-center   bg-gradient-to-r from-[#00AEEF]/30 to-[#6A5DFF]/30  dark:bg-[linear-gradient(to_right,#0F3F58_0%,#0F3F58_30%,#282B5C_100%)] relative  overflow-hidden ">
        <div className="w-[300px] h-[300px] hidden md:block absolute z-0  bg-[#FFFFFF]/20 blur-3xl left-36 top-10 rounded-full" />
        <div className="p-5 ">
          <div className="">
            <h1 className="text-center mb-5 text-[28px] font-bold ">
              Be Part of the DevByte Community
            </h1>
            <p className="text-center md:w-[500px]">
              Join thousands of tech enthusiasts already sharing, collaborating,
              and growing together,{" "}
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <Link
                to={"/signup"}
          
              >
                <button className="relative capitalize  inline-flex  items-center justify-center  bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] rounded-md  w-[130px] h-[40px]   ">
                  <span className="text-sm bg-gradient-to-r from-[#bee9f8] to-[#dddbfa]   dark:bg-gradient-to-r dark:from-[#104e65] dark:to-[#08465d] rounded-md py-[8px] px-[21.6px] ">
                    sign up free
                  </span>
              
                </button>

                {/* <button className="w-[130px] h-[40px]  rounded-xl border border-">
                  sunn
                </button> */}
              </Link>
              <Link to={"/"}>
                <button className="capitalize bg-[#00C38A] text-[#FFFFFF]  w-[130px] h-[40px]  rounded-3xl text-[16px]">
                  explore events
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[300px] bg-[#FFFFFF]/20  absolute z-10 rounded-full  blur-3xl md:right-10 md:top-10  top-10" />
      </section>
    </>
  );
};

export default About;
