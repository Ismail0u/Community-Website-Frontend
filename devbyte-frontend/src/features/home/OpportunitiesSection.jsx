import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const OpportunitiesSection = ({ opportunities }) => {
  return (
    <div className="mt-28">
      <div className="text-center max-w-[1200px] mx-auto px-4">
        <h1 className="text-[28px] font-semibold">
          Opportunities & Collaboration
        </h1>
        <h1 className="pt-2 text-[18px]">
          Find jobs, freelance gigs, or connect with collaborators for your next
          project
        </h1>
      </div>
      <div className="flex flex-col items-center space-y-5 mt-7 px-4">
        {opportunities.map((opportunity, oIdx) => (
          <Card
            key={`opp-${oIdx}`}
            className="flex md:flex-row flex-col md:justify-between md:p-5 p-[30px] shadow-xl items-center md:text-left text-center lg:w-[1000px] md:w-[700px] w-[348px]"
          >
            <div className="space-y-[6px] md:w-[50%]">
              <h1 className="text-[20px] font-semibold">{opportunity.title}</h1>
              <div className="flex md:justify-start justify-center gap-2 text-[16px]">
                {opportunity.jobType.map((type, index) => (
                  <h1
                    key={`opp-type-${oIdx}-${index}`}
                    className="text-[16px] flex gap-2 items-center "
                  >
                    {type}
                    {index == 0 ? (
                      <span className=" w-1 h-1 bg-gray-600 rounded-full"></span>
                    ) : (
                      ""
                    )}
                  </h1>
                ))}
              </div>
              <h1 className="text-[16px]">{opportunity.details}</h1>
            </div>
            <Button
              children="Apply Now"
              className="bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-500 ease-in-out"
            />
          </Card>
        ))}
      </div>
      <div className="w-full flex justify-center mt-10 md:mt-12 px-4">
        <Button
          children="View All Opportunities"
          className="bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default OpportunitiesSection;
