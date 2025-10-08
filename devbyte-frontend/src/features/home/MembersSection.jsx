import React from "react";
import Card from "@/components/ui/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const MembersSection = ({
  title,
  subtitle,
  memberChunks,
  membersSlideIndex,
  goToPrevMembers,
  goToNextMembers,
  goToMembersSlide,
}) => {
  return (
    <div className="mt-28">
      <div className="text-center max-w-[1200px] mx-auto px-4">
        <h1 className="text-[28px] font-semibold text-center">{title}</h1>
        <h1 className="pt-2 text-[18px] text-center">{subtitle}</h1>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 mt-7 ">
        <div className="relative h-[250px] ">
          <div className="relative h-full">
            {memberChunks.map((chunk, idx) => (
              <div
                key={`members-chunk-${idx}`}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  idx === membersSlideIndex
                    ? "opacity-100 translate-x-0"
                    : idx < membersSlideIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center ">
                    {chunk.map((member, mIdx) => (
                      <Card
                        key={`member-card-${idx}-${mIdx}`}
                        className="flex flex-col items-center space-y-[6px] p-5 w-[310px] h-[212px] shadow-lg"
                      >
                        <img
                          src={member.image}
                          alt=""
                          className="w-[80px] h-[80px]"
                        />
                        <h1 className="text-[18px] font-semibold">
                          {member.name}
                        </h1>
                        <h1 className="text-[16px]">{member.role}</h1>
                        <div className="flex gap-5">
                          {member.technologies.map((technology, tIdx) => (
                            <h1
                              key={`tech-${idx}-${mIdx}-${tIdx}`}
                              className="bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] rounded-full text-white py-[2px] px-2 text-[14px]"
                            >
                              {technology}
                            </h1>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevMembers}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/20 dark:bg-white/20 dark:hover:bg-white/40 p-2 rounded-full"
            aria-label="Previous members"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={goToNextMembers}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/20 dark:bg-white/20 dark:hover:bg-white/40 p-2 rounded-full"
            aria-label="Next members"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots */}
          <div className=" mb-10 flex justify-center gap-2">
            {memberChunks.map((_, i) => (
              <button
                key={`member-dot-${i}`}
                onClick={() => goToMembersSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === membersSlideIndex
                    ? "w-6 bg-black dark:bg-white"
                    : "w-2 bg-black/40 dark:bg-white/40"
                }`}
                aria-label={`Go to members slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-10 md:mt-12 px-4">
        <Button
          children="Explore All Members"
          className="bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-500 ease-in-out"
        />

        <h1 className="font-semibold text-[18px] mt-2">
          Join Devbyte and get listed
        </h1>
      </div>
    </div>
  );
};

export default MembersSection;
