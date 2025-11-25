import { useState } from "react";
import { FaMagnifyingGlass, FaChevronDown } from "react-icons/fa6";
import EventImg from "@/assets/images/black-students-posing-with-gadgets.webp";
import SwiperComponent from "@/components/ui/swiper.jsx";
import HeaderWrapper from "@/components/ui/Header";

const Events = () => {
  const [inputType, setInputType] = useState("text");
  const [dateValue, setDateValue] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");

  const eventTypes = [
    { name: "Event Type", value: "" },
    { name: "Learning", value: "learning" },
    { name: "Collaboration", value: "collaboration" },
    { name: "Networking", value: "networking" },
    { name: "Competition", value: "competition" },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Introduction to React Hooks Workshop",
      date: "01-10-2025",
      startTime: "01:00pm",
      endTime: "04:00pm",
      description:
        "A hands-on session covering useState, useEffect, and custom hooks. Learn how to write cleaner, more functional React code. A hands-on session covering useState, useEffect, and custom hooks. Learn how to write cleaner, more functional React code.",
      type: "Learning",
      image: EventImg,
    },
    {
      id: 2,
      title: "Open Source Contribution Day",
      date: "15-10-2025",
      startTime: "09:30am",
      endTime: "12:30pm",
      description:
        "Join us for a coding sprint focused on contributing to a local open-source project. All skill levels welcome!",
      type: "Collaboration",
      image: EventImg,
    },
    {
      id: 3,
      title: "Tech Networking Mixer & AMA",
      date: "28-10-2025",
      startTime: "06:00pm",
      endTime: "08:00pm",
      description:
        "Meet developers and founders in the community. Features an Ask Me Anything session with a lead engineer from a local startup.",
      type: "Networking",
      image: EventImg,
    },
    // {
    //   id: 4,
    //   title: "Web Security Capture The Flag (CTF)",
    //   date: "05-11-2025",
    //   startTime: "03:00pm",
    //   endTime: "07:00pm",
    //   description:
    //     "A beginner-friendly competition testing skills in web exploitation, forensics, and reverse engineering. Prizes for the top three teams!",
    //   type: "Competition",
    //   image: EventImg,
    // },
    // {
    //   id: 5,
    //   title: "Modern TypeScript Deep Dive",
    //   date: "19-11-2025",
    //   startTime: "10:00am",
    //   endTime: "12:00pm",
    //   description:
    //     "Explore advanced TypeScript features, utility types, and best practices for large-scale application development.",
    //   type: "Learning",
    //   image: EventImg,
    // },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Introduction to React Hooks Workshop",
      date: "01-10-2025",
      startTime: "01:00pm",
      endTime: "04:00pm",
      type: "Learning",
      image: EventImg,
    },
    {
      id: 2,
      title: "Open Source Contribution Day",
      date: "15-10-2025",
      type: "Collaboration",
      image: EventImg,
    },
    {
      id: 3,
      title: "Tech Networking Mixer & AMA",
      date: "28-10-2025",
      type: "Networking",
      image: EventImg,
    },
    {
      id: 4,
      title: "Web Security Capture The Flag (CTF)",
      date: "05-11-2025",
      type: "Competition",
      image: EventImg,
    },
    {
      id: 5,
      title: "Modern TypeScript Deep Dive",
      date: "19-11-2025",
      type: "Learning",
      image: EventImg,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0D1117] text-[#161B22] dark:text-[#D9D9D9]">
      {/* Top container with message */}
       <HeaderWrapper className="text-center ">
          <h1
            className={`text-depth-shadow text-3xl sm:text-5xl font-extrabold mb-2`}
          >
            Community Events & Meetups
          </h1>
          <p className="text-sm sm:text-lg">
            Learn, connect, and grow with our upcoming and past events.
          </p>
       </HeaderWrapper>
      {/* FILTER SECTION */}
      <section
        className={`mx-auto max-w-6xl px-2 sm:px-4 flex flex-wrap gap-2 sm:gap-4 justify-center text-xs sm:text-sm items-center bg-[#D9D9D9] dark:bg-[#161B22] text-[#161B22] dark:text-[#D9D9D9] mt-[20px] py-[20px]`}
      >
        {/* EVENT TYPE */}
        <div className="w-[25%] sm:w-[15%] bg-[white] text-[black] dark:dark:bg-gray-600 font-medium px-1 sm:px-4 py-2 rounded-lg overflow-hidden">
          <select
            className="w-[150px] outline-none bg-inherit"
            value={selectedEventType}
            onChange={(e) => setSelectedEventType(e.target.value)}
          >
            {eventTypes.map((event, index) => (
              <option key={index} value={event.value}>
                {event.name}
              </option>
            ))}
          </select>
        </div>

        {/* DATE */}
        <div
          className="w-[25%] sm:w-[15%] h-[10] flex items-center justify-between py-2  bg-[white] text-[black] dark:bg-gray-600 px-2 sm:px-6 rounded-lg cursor-pointer font-medium overflow-hidden"
          onClick={() => {
            setInputType("date");
          }}
          onMouseLeave={() => {
            // Switch back to 'text' if no value was entered
            if (!dateValue) {
              setInputType("text");
            }
          }}
        >
          <input
            className="bg-transparent w-[100%] outline-none"
            type={inputType}
            placeholder="Date"
            onFocus={() => setInputType("date")} // Switch to 'date' when user clicks
            onBlur={(e) => {
              // Switch back to 'text' if no value was entered
              if (!e.target.value) {
                setInputType("text");
              }
            }}
            readOnly={inputType === "text"}
            onChange={(e) => setDateValue(e.target.value)}
          />
          {inputType === "text" && <FaChevronDown size={13} />}
        </div>

        {/* SEARCH INPUT */}
        <div className="w-[40%] md:w-[25%] flex items-center justify-between bg-[white] text-[black] dark:dark:bg-gray-600 px-2 sm:px-6 py-2 rounded-lg font-medium overflow-hidden">
          <input
            className="bg-transparent w-[90%] outline-none"
            type="text"
            placeholder="Search events by topic…"
          />
          <FaMagnifyingGlass className="cursor-pointer " size={13} />
        </div>
      </section>

      {/* Events Sections */}
      <section className={`w-[95%] sm:w-[90%] lg:w-[80%] mx-auto my-10 sm:my-20`}>

        {/* Upcoming Events */}
        <div>
          <h2 className="mb-2 text-3xl font-bold">Upcoming Events</h2>

          <ul
            className={` h-full w-full flex flex-wrap lg:flex-nowrap flex-col sm:flex-row lg:flex-col justify-between px-4 lg:px-6 py-4`}
          >
            {upcomingEvents.map((event) => (
              <li
                key={event.id}
                className={`${
                  upcomingEvents.length < 2 ? `w-full h-full` : `sm:w-[48%]`
                }  h-[42rem] lg:h-1/2 w-full lg:w-full flex flex-col lg:flex-row items-center gap-[2rem] lg:gap-[4rem] mb-6 lg-mb-0 px-4 lg:px-8 py-5 lg:py-7 bg-[#FFFFFF]  dark:bg-[#161B22] rounded-xl shadow-md shadow-gray-400 dark:shadow-gray-800`}
              >
                {/* Image/Visual Area (Left) */}
                <div
                  className={`w-full lg:w-1/3 ${
                    upcomingEvents.length < 2 ? `h-[60%]` : `h-1/2`
                  }  lg:h-full overflow-hidden flex-shrink-0`}
                >
                  <img
                    src={event.image}
                    className="object-cover object-center w-full h-full rounded-xl lg:rounded-3xl"
                  />
                </div>

                {/* Content and Buttons Area (Right) */}
                <div className="flex flex-col w-full gap-3 lg:w-2/3 h-2/3 lg:h-full lg:gap-5">
                  <div>
                    <div className="flex items-start justify-between font-bold lg:items-center">
                      <h3 className="text-xl">{event.title}</h3>
                      <p>{event.type}</p>
                    </div>
                    <div className="font-medium text-[0.9rem] flex items-center justify-between">
                      <p>
                        <span>{event.date}</span>({" "}
                        <span>{event.startTime}</span> -{" "}
                        <span>{event.endTime}</span> )
                      </p>
                    </div>
                  </div>

                  <p>
                    {event.description.length < 145
                      ? event.description
                      : event.description.slice(0, 145) + "..."}
                  </p>
                  <div className="flex ap-10 justify-between text-sm text-[#FFFFFF]">
                    <button className="bg-[#00C38A] w-[40%] px-1 py-2 rounded-2xl">
                      Register
                    </button>
                    <button className="bg-[#00C38A] w-[40%] px-1 py-2 rounded-2xl">
                      Add to Calendar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Past Events */}
        <div className={` mt-14`}>
          <h2 className="text-3xl font-extrabold text-center">Past Events</h2>

          <SwiperComponent events={pastEvents} />
          {/* <ul
            className={`flex flex-wrap gap-[4%] md:gap-[2%] h-full w-full my-12 px-6`}
          >
            {pastEvents.map((event) => (
              <li
                className={`w-[48%] md:w-[32%] bg-[#FFFFFF] dark:bg-[#161B22] flex flex-col gap-4 mb-10 pb-8 rounded-t-2xl shadow-md shadow-gray-400 dark:shadow-gray-800`}
              >
                <div>
                  <img
                    src={event.image}
                    className="object-cover object-center w-full h-full rounded-b-none rounded-t-2xl"
                  />
                </div>

                <div className="px-2 md:px-3">
                  <h3 className="text-[0.9rem] font-semibold">{event.title}</h3>
                  <p className="text-sm font-medium ">{event.date}</p>
                </div>
              </li>
            ))}
          </ul> */}
        </div>
      </section>
    </div>
  );
};

export default Events;
