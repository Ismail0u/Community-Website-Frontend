import React from "react";
import design from "@/assets/images/design.png";
import glob from "@/assets/images/globe.png";
import handshake from "@/assets/images/handshake.png";
import handbag from "@/assets/images/handbag.png";
import group from "@/assets/images/Group.png";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
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
      <section className=" relative bg-[#6A5DFF]/20  dark:bg-[linear-gradient(to_right,#0F3F58_0%,#0F3F58_30%,#282B5C_100%)] h-[210px] md:h-[480px] py-[20px] px-[10px] ">
        <div className="absolute z-10 w-[400px] h-[400px] bg-[#6A5DFF]/30 rounded-full blur-3xl  hidden md:flex"></div>
        <div className="flex flex-col gap-5 items-center justify-center h-full text-center    ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[28px] md:text-[42px] font-extrabold mb-4 tracking-wide">
              {" "}
              About DevByte
            </h1>
            <div className="w-[60px] h-1 bg-[linear-gradient(to_right,#00AEEF,#6A5DFF)] flex " />
          </div>

          <div>
            <p className="text-[18px] font-light  tracking-wide  ">
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
      <section className="   py-[16px] px-[20px]  md:py-[120px] md:px-[100px]  h-[418px] border-b-2 dark:border-none">
        <h1 className="text-center font-bold text-3xl md:text-[28px] my-[20px] tracking-wide">
          Our Mission & Vision
        </h1>
        <div className="flex md:flex-row flex-col  md:justify-around justify-center items-center  ">
          {/* our mission title goes here */}
          <div className=" flex flex-col items-center mb-[10px]">
            <div className="flex flex-col items-center mb-2 gap-2">
              <h1 className="font-bold capitalize text-[28px] md:mb-0 mb-[10px]">
                our mission
              </h1>
              <div className="w-14 h-1 bg-[linear-gradient(to_right,#00AEEF,#6A5DFF)] flex " />
            </div>

            <p className="text-center  text-[18px] w-[353px] tracking-wide  font-light ">
              To create a central hub where tech talents can connect, share
              knowledge, and build opportunities for growth{" "}
            </p>
          </div>

          {/* our vision title  goes here */}
          <div className=" flex flex-col items-center">
            <div className="flex flex-col items-center gap-2 mb-2 px-4">
              <h1 className="font-bold capitalize text-[28px] md:mb-0 mb-[10px]">
                our vision
              </h1>
              <div className="w-14 h-1 bg-[linear-gradient(to_right,#00AEEF,#6A5DFF)] flex " />
            </div>
            <p className="text-center text-[18px] w-[353px] tracking-wide font-light ">
              To become the go-to community where future innovators collaborate
              on projects that impact the tech world
            </p>
          </div>
        </div>
      </section>

      {/* Our Story goes here */}
      <section className="dark:bg-[#161B22] border-b-2 dark:border-none h-[356px] flex flex-col gap-1 items-center justify-center px-[15px] ">
        <h1 className="font-bold text-[28px] mb-2">Our Story</h1>
        <p className="   md:w-[805px]  tracking-wider  text-[18px] text-center  font-light ">
          DevByte began as a small initiative by passionate tech enthusiasts who
          wanted to create a space where learning and collaboration thrive. Over
          time, it has grown into a diverse community of developers, designers,
          and innovators working together to share resources, build projects,
          and shape the future of technology.
        </p>
      </section>

      {/* Why Join Us content goes here */}
      <section className="p-8 mt-[20px] border-t-2">
        <h1 className="text-center text-3xl font-bold mb-7">Why Join Us</h1>

        {/* design card component goes here  */}
        <div className="md:flex  justify-center hidden ">
          <Card className="w-[381px] h-[381px] shadow-md dark:bg-[#161B22] p-4 rounded-xl my-[40px]">
            <img src={design} alt="design" />
            <div className="flex flex-col gap-2 mt-4">
              <h1 className="uppercase text-[#0BA7F1] font-semibold text-[12px]">
                design
              </h1>
              <h4 className="font-semibold text-[20px]">
                Designing for Accessibility
              </h4>
              <p className="text-[16px] font-normal  tracking-wide ">
                Inclusive design principle every designer should know{" "}
              </p>
            </div>

            <Link to={"/"} className="text-[#0BA7F1] py-5 ">
              Read More{" "}
            </Link>
          </Card>
        </div>

        {/* knowledge sharing,collaborations,opportunities and networking cards goes here */}
        <div className="flex justify-center items-center  flex-col md:flex-row gap-5">
          {Items.map((item) => (
            <Card
              key={item.id}
              className="shadow-md  dark:bg-[#161B22]  flex   flex-col items-center justify-center  p-[20px]   rounded-lg h-[250px] w-[300px] "
            >
              <img
                src={item.image}
                alt={item.header}
                className="w-[35px] h-[35px]  "
              />
              <h2 className="capitalize text-[20px] my-[12px] font-semibold">
                {item.header}
              </h2>
              <p className="text-[16px] text-center font-light tracking-wide ">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Be Part of the DevByte Community goes here */}
      {/* [linear-gradient(to_right,#00AEEF,#6A5DFF)] */}
      <section className="  h-[400px] flex flex-col justify-center items-center   bg-gradient-to-r from-[#00AEEF]/30 to-[#6A5DFF]/30  dark:bg-[linear-gradient(to_right,#0F3F58_0%,#0F3F58_30%,#282B5C_100%)] relative  overflow-hidden ">
        <div className="w-[300px] h-[300px] hidden md:block absolute z-0  bg-[#FFFFFF]/20 blur-3xl left-36 top-10 rounded-full" />
        <div className="p-5 ">
          <div className="">
            <h1 className="text-center mb-5 text-[28px] font-bold tracking-wide ">
              Be Part of the DevByte Community
            </h1>
            <p className="text-center md:w-[500px] text-[16px] tracking-wide">
              Join thousands of tech enthusiasts already sharing, collaborating,
              and growing together,{" "}
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <Link to={"/signup"}>
                <Button className="ring-2 capitalize hover:bg-[linear-gradient(to_right,#026d94,#483dbd)] transition ease-in-out duration-500">
                  sign up free
                </Button>
              </Link>
              <Link to={"/"}>
                <Button className="capitalize bg-[#00C38A] hover:bg-[#089292] transition ease-in-out duration-500 text-[#FFFFFF] rounded-full ">
                  explore events
                </Button>
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
