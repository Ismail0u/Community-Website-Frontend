import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="diagonal-stripes min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* 404 Numbers */}
      <div className="flex gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white rounded-2xl sm:rounded-3xl flex items-center justify-center">
          <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-black">
            4
          </span>
        </div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white rounded-2xl sm:rounded-3xl flex items-center justify-center">
          <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-black">
            0
          </span>
        </div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white rounded-2xl sm:rounded-3xl flex items-center justify-center">
          <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-black">
            4
          </span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-4 sm:mb-6 animate-fade-in">
        Page Not Found
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl md:text-base text-gray-300 text-center mb-8 sm:mb-10 max-w-2xl animate-fade-in leading-relaxed">
        The page you are looking for was removed, moved, renamed,
        <br className="hidden sm:block" />
        or might never existed.
      </p>

      {/* Return Home Button */}
      {/* <button
        onClick={() => navigate("/")}
        className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-black font-semibold rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-fade-in text-base sm:text-lg"
      >
        Return Home
      </button> */}
      <button
        class="bg-white text-center w-[16rem] rounded-2xl h-14 relative text-black text-xl font-semibold group"
        type="button"
        onClick={() => navigate("/")}
      >
        <div class="bg-[#00253d] hover:bg-[#000c13] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[97%] z-10 duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="60%"
            width="90%"
          >
            <path
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              fill="#ffffff"
            ></path>
            <path
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
        <p class="translate-x-2"> Return Home</p>
      </button>
    </div>
  );
};

export default PageNotFound;
