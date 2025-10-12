import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const HeroSection = ({
  carouselSlides,
  currentIndex,
  goToPrevious,
  goToNext,
  goToSlide,
  navigate,
}) => {
  return (
    <div className="flex pb-[50px] w-full">
      <div className="w-full">
        <div className="relative h-[calc(100vh-var(--nav-h))] ">
          {/* Slides Container */}
          <div className="relative h-[calc(100vh-var(--nav-h))] dark:text-white">
            {carouselSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                {/* Mobile: image fills, text overlays */}
                <div className="lg:hidden w-full h-[calc(100vh-var(--nav-h))] relative flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-[40px] font-bold mb-4 leading-tight text-white">
                      {slide.title}
                    </h2>
                    <p className="text-[22px] opacity-90 text-white mb-6">
                      {slide.description}
                    </p>
                    <div className="flex flex-row gap-3 justify-center">
                      <Button
                        children="Join Community"
                        className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-500 ease-in-out"
                      />

                      <Button
                        children="Learn More"
                        onClick={() => navigate("/communityGuidelines")}
                        className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-500 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
                {/* Desktop: image and text side by side */}
                <div className="hidden md:hidden lg:flex w-full h-[calc(100vh-var(--nav-h))] flex-row items-center justify-center">
                  <div className="p-8 w-1/2 pl-20">
                    <h2 className="text-[70px] font-bold mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-[22px] opacity-90">
                      {slide.description}
                    </p>
                    <div className="mt-7 flex flex-row gap-3">
                      <Button
                        children="Join Community"
                        className="bg-blue-600 hover:bg-yellow-500 text-white transition-colors duration-500 ease-in-out"
                      />

                      <Button
                        children="Learn More"
                        onClick={() => navigate("/communityGuidelines")}
                        className="text-black dark:text-white hover:bg-yellow-500 hover:text-white hover:border-yellow-500 border-[1px] border-yellow-500 transition-colors duration-500 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 h-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-[2px] z-20 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 lg:bg-black/20 lg:hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-[2px] md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 lg:bg-black/20 lg:hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselSlides.map((_, index) => (
              <button
                key={`hero-dot-${index}`}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-1000 rounded-full ${
                  index === currentIndex
                    ? "lg:bg-black lg:dark:bg-white bg-white w-6 md:w-8 h-2 md:h-3"
                    : "lg:bg-black/50 lg:dark:bg-white/50 bg-white/50 w-2 md:w-3 h-2 md:h-3 lg:hover:bg-black/75 lg:dark:hover:bg-white/75 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
