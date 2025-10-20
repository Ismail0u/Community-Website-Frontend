import React from "react";
import HeaderWrapper from "@/components/ui/Header";
import bgImage from "@/assets/images/auth-bg2.jpg";

const ForgetPassword = () => {
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
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold">Forgot Password</h2>
            <p className="text-md mt-1 text-gray-200">
              Enter your email to reset your password.
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            />
          </form>
          <button  onClick={() => (window.location.href = "/OtpVerification")} className="mt-5 relative text-[17px] w-full font-medium px-10 py-4 bg-gradient-to-r from-blue-950 to-blue-600 text-white rounded-lg cursor-pointer overflow-hidden active:scale-95 transition-transform duration-300 group">
            <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-[#ffc107]/70 rounded-lg transition-all duration-500 ease-&lsqb;cubic-bezier(0,0,0.2,1)&rsqb; group-hover:w-full group-hover:h-[14em] -translate-x-1/2 -translate-y-1/2"></span>
            <span className="relative z-10">Login</span>
          </button>

          <p className="text-center text-sm text-gray-300 mt-6">
            <a
              href="/login"
              className="text-yellow-400 hover:underline font-medium"
            >
              Back to Login
            </a>
          </p>
        </div>

        {/* Right: DevByte Info Section */}
        <div className="bg-white dark:bg-[#0D1117] text-gray-800 dark:text-[#ffffff] flex flex-col justify-center p-10">
          <h3 className="text-2xl font-bold mb-4">
            Reset Your Journey with DevByte 
          </h3>
          <p className="text-gray-600 dark:text-[#ffffff] leading-relaxed">
            Passwords are temporary, but your passion to build is forever.
            DevByte helps you reconnect with innovation — empowering developers
            to learn, collaborate, and create the future.
          </p>
          <p className="mt-6 text-sm text-gray-500 dark:text-[#ffffff] italic">
            “Small steps build great developers. Keep going.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
