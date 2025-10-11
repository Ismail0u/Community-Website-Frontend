import { useState, useEffect } from "react";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperComponent = ({ events }) => {
  const [perView, setPerView] = useState(
    typeof window !== "undefined" && window.innerWidth < 768 ? 2 : 3
  );

  const handleResize = () => {
    setPerView(window.innerWidth < 768 ? 2 : 3);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        // when window width is >= 0
        0: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      className="my-12 px-6"
    >
      {events.map((event) => (
        <SwiperSlide
          key={event.id}
          className={` bg-[#FFFFFF] dark:bg-[#161B22] flex flex-col gap-4 mb-10 pb-8 rounded-t-2xl shadow-md shadow-gray-400 dark:shadow-gray-800`}
        >
          <div>
            <img
              src={event.image}
              className="w-full h-full object-cover object-center rounded-t-2xl rounded-b-none"
            />
          </div>

          <div className=" px-2 md:px-3">
            <h3 className="text-[0.9rem] font-semibold">
              {event.title.length < 30
                ? event.title
                : event.title.slice(0, 26) + "..."}
            </h3>
            <p className="font-medium text-sm ">{event.date}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
