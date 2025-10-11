import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const OpportunitiesSection = ({ opportunities }) => {
  return (
    <div className="py-[100px]  bg-[#00AEEF]/[10%]">
      <div className="text-center max-w-[1200px] mx-auto px-4">
        <h1 className="text-[28px] font-semibold">
          Opportunities & Collaboration
        </h1>
        <h1 className="pt-2 text-[18px]">
          Find jobs, freelance gigs, or connect with collaborators for your next
          project
        </h1>
      </div>
      <div className="flex flex-col items-center px-4 space-y-5 mt-7">
        {opportunities.map((opportunity, oIdx) => (
          <Card
            key={`opp-${oIdx}`}
            className="flex md:flex-row bg-white dark:text-black flex-col md:justify-between md:p-5 p-[30px] shadow-sm items-center md:text-left text-center lg:w-[1160px] md:w-[700px] w-[348px]"
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
                      <span className="w-1 h-1 bg-gray-600 rounded-full "></span>
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
              className="text-white transition-colors duration-500 ease-in-out bg-blue-500 hover:bg-blue-700"
            />
          </Card>
        ))}
      </div>
      <div className="flex justify-center w-full px-4 mt-10 md:mt-12">
        <Button
          children="View All Opportunities"
          className="text-white transition-colors duration-500 ease-in-out bg-blue-500 hover:bg-blue-700"
        />
      </div>
    </div>
  );
};

export default OpportunitiesSection;
