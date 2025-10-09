import React from "react";

const HeaderWrapper = ({ height = "h-[270px]", className = "", children }) => {
  return (
    <section
      className={`relative bg-gradient-to-r from-[#00AEEF]/15 to-[#6A5DFF]/15 
      dark:bg-[linear-gradient(to_right,#0F3F58_0%,#0F3F58_30%,#282B5C_100%)]
      ${height} z-0 py-[20px] px-[10px] ${className}`}
    >
      {/* Background Glow */}
      <div className="absolute z-0 w-[250px] h-[250px] bg-[#6A5DFF]/30 rounded-full blur-3xl hidden md:flex" />

      {/* Custom page content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {children}
      </div>
    </section>
  );
};

export default HeaderWrapper;
