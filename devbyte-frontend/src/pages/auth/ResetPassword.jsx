import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import bgImage from "@/assets/images/auth-bg2.jpg";

const ResetPassword = () => {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:`url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Card */}
      <div className="relative w-full max-w-5xl mx-4 grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl bg-white/10">
        {/* Left: Glass Form Section */}
        <div className="p-10 flex flex-col justify-center text-white">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Reset Your Password
          </h2>
          <p className="text-center text-gray-200 mb-6 text-sm">
            Enter and confirm your new password below.
          </p>

          <form className="flex flex-col space-y-4">
            {/* New Password */}
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                placeholder="New Password"
                className="w-full bg-transparent border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
              >
                {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm New Password"
                className="w-full bg-transparent border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </form>
          {/* Button with ripple effect */}
          <button  onClick={() => (window.location.href = "/login")} className="mt-5 relative text-[17px] w-full font-medium px-10 py-4 bg-gradient-to-r from-blue-950 to-blue-600 text-white rounded-lg cursor-pointer overflow-hidden active:scale-95 transition-transform duration-300 group">
            <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-[#ffc107]/70 rounded-lg transition-all duration-500 ease-&lsqb;cubic-bezier(0,0,0.2,1)&rsqb; group-hover:w-full group-hover:h-[14em] -translate-x-1/2 -translate-y-1/2"></span>
            <span className="relative z-10">Login</span>
          </button>
        </div>

        {/* Right: DevByte Info Section */}
        <div className="bg-white dark:bg-[#0D1117] text-gray-800 dark:text-[#ffffff] flex flex-col justify-center p-10">
          <h3 className="text-2xl font-bold mb-4">
            Empowering Developers Worldwide
          </h3>
          <p className="text-gray-600 dark:text-[#ffffff] leading-relaxed">
            At <span className="font-semibold text-blue-700 dark:text-[#ffffff]">DevByte</span>, we
            believe in building tools and resources that help developers learn,
            grow, and create impactful solutions. Reset your password and get
            back to transforming ideas into reality.
          </p>
          <p className="mt-6 text-sm text-gray-500 dark:text-[#ffffff] italic">
            “Every great developer you know started where you are — by taking
            the next step forward.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
