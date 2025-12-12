import React from "react";
import design from "@/assets/images/design.png";
import glob from "@/assets/images/globe.png";
import handshake from "@/assets/images/handshake.png";
import handbag from "@/assets/images/handbag.png";
import group from "@/assets/images/Group.png";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import HeaderWrapper from "@/components/ui/Header";
import tutorial1 from "@/assets/images/couple-using-laptop-while-couch-home-together.jpg"
import  tutorial2 from "@/assets/images/black-couple-balances-remote-work-technology-home-office.webp"

const cards = [
  {
    id:1,
    image:design,
    header:"DESIGN",
    title:"Designing for Accessibility",
    description:"Inclusive design principles every designer should know."
  },
  {id:2,
  image:tutorial1,
  header:"BACKEND",
  title:"UI/UX Trends 2025",
  description:"The design directions shaping the next generation of apps."
},
{id:3,
  image:tutorial2,
  header:"TUTORIAL",
  title:"Mastering TypeScript",
  description:"Why TS should be part of your dev toolkit."
},
]
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
      <section>
        <HeaderWrapper className="text-center overflow-hidden ">
          <div className="flex flex-col items-center justify-center">
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
        </HeaderWrapper>
      </section>

      {/* Our Mission & Vision content goes here */}
      <section className=" h-[500px] md:h-[400px]  flex flex-col justify-center items-center gap-2  ">
        <h1 className="text-center font-bold text-2xl  my-[20px] tracking-wide">
          Our Mission & Vision
        </h1>
        <div className="flex flex-col items-center justify-center md:flex-row  gap-4 md:gap-10 ">
          {/* our mission title goes here */}
          <div className=" flex flex-col items-center mb-[10px] w-screen md:w-[380px] px-5  ">
            <div className="flex flex-col items-center gap-2 mb-2">
              <h1 className="font-semibold capitalize text-xl md:mb-0 mb-[10px]">
                our mission
              </h1>
              <div className="w-14 h-1 bg-[linear-gradient(to_right,#00AEEF,#6A5DFF)] flex " />
            </div>

            <p className="text-center  tracking-wide font-light ">
              To create a central hub where tech talents can connect, share
              knowledge, and build opportunities for growth{" "}
            </p>
          </div>

          {/* our vision title  goes here */}
          <div className="flex flex-col items-center w-screen md:w-[380px] px-5 ">
            <div className="flex flex-col items-center gap-2 px-4 mb-2">
              <h1 className="font-bold capitalize text-xl md:mb-0 mb-[10px]">
                our vision
              </h1>
              <div className="w-14 h-1 bg-[linear-gradient(to_right,#00AEEF,#6A5DFF)] flex " />
            </div>
            <p className="text-center   tracking-wide font-light ">
              To become the go-to community where future innovators collaborate
              on projects that impact the tech world
            </p>
          </div>
        </div>
      </section>

      {/* Our Story goes here */}
      <section className="dark:bg-[#161B22]  bg-[#00AEEF]/[15%] flex flex-col gap-1 items-center justify-center h-[300px] ">
        <h1 className="font-bold text-2xl mb-2">Our Story</h1>
        <p className="     tracking-wider  text-base text-center  font-light mx-5 md:mx-10 ">
          DevByte began as a small initiative by passionate tech enthusiasts who
          wanted to create a space where learning and collaboration thrive. Over
          time, it has grown into a diverse community of developers, designers,
          and innovators working together to share resources, build projects,
          and shape the future of technology.
        </p>
      </section>

      {/* Why Join Us content goes here */}
      <section className="py-10 flex flex-col justify-center gap-5 items-center ">
        <h1 className="text-2xl font-bold text-center  ">Why Join Us</h1>

        {/* design card component goes here  */}
        <div className=" hidden md:flex  w-screen justify-center gap-12 ">

          {cards.map((card)=>(
            <Card className="w-[350px] h-[350px]  dark:bg-[#161B22] p-4 rounded-xl my-[40px]">
            <img src={card.image} alt={card.title} className="rounded-xl w-screen h-[180px] object-cover "/>
            <div className="flex flex-col gap-2 mt-4">
              <h1 className="uppercase text-[#0BA7F1] font-semibold text-xs">
                {card.header}
              </h1>
              <h4 className="font-semibold text-lg">
               {card.title}
              </h4>
              <p className="text-sm font-light  tracking-wide ">
                {card.description}
              </p>
            </div>

            <Link to={"/"} className="text-[#0BA7F1] py-5 ">
              Read More{" "}
            </Link>
          </Card>
          ))}
          
        </div>

        {/* knowledge sharing,collaborations,opportunities and networking cards goes here */}
        <div className= " grid  grid-cols-1 gap-9 md:gap-28 lg:gap-10 mb-8 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  ">
          {Items.map((item) => (
            <Card
              key={item.id}
              className=" dark:bg-[#161B22]  flex   flex-col items-center justify-center  p-5   rounded-lg w-[250px] h-[250px]   "
            >
              <img
                src={item.image}
                alt={item.header}
                className="w-[35px] h-[35px]  "
              />
              <h2 className="capitalize text-lg my-[12px] font-semibold">
                {item.header}
              </h2>
              <p className="text-center text-sm font-light tracking-wide ">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Be Part of the DevByte Community goes here */}
      {/* [linear-gradient(to_right,#00AEEF,#6A5DFF)] */}
      <section>
          <HeaderWrapper className="text-center overflow-hidden ">
              <div className="">
              <h1 className="text-center mb-5 text-2xl font-bold tracking-wide ">
                Be Part of the DevByte Community
              </h1>
              <p className="text-center md:w-[500px]  tracking-wide">
                Join thousands of tech enthusiasts already sharing, collaborating,
                and growing together,{" "}
              </p>
              <div className="flex justify-center gap-3 mt-4">
                <Link to={"/signup"}>
                  <Button className="capitalize transition duration-500 ease-in-out border-yellow-500 border-solid border-[1px]  text-[blue] dark:text-white hover:text-white hover:bg-yellow-500 rounded-full">
                    sign up free
                  </Button>
                </Link>
                <Link to={"/"}>
                  <Button className="capitalize  bg-blue-500 hover:bg-blue-700  transition ease-in-out duration-500 text-[#FFFFFF] rounded-full">
                    explore events
                  </Button>
                </Link>
              </div>
            </div>
          </HeaderWrapper>
      </section>
    </>
  );
};

export default About;
