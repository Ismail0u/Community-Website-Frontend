import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaGithub, FaGoogle, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import bgImage from "@/assets/images/auth-bg.webp";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:`url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative flex flex-col md:flex-row w-[90%] max-w-5xl rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md my-20">
        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-center border-r border-white/20">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Welcome Back
          </h2>
          <p className="text-center text-gray-200 mb-8">
            Log in to your DevByte account to join discussions and collaborate.
          </p>

          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-gray-300 text-white placeholder-gray-200 outline-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            />

            <div className="relative w-full">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-transparent border border-gray-300 text-white placeholder-gray-200 outline-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute text-gray-300 hover:text-gray-100 right-3 top-1/2 -translate-y-1/2"
              >
                {show ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-200">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-indigo-500" />
                <span>Remember me</span>
              </label>
              <a href="/forget-password" className="text-yellow-400 hover:underline">
                Forgot password?
              </a>
            </div>

            <button className="relative text-[17px] w-full font-medium px-10 py-4 bg-gradient-to-r from-blue-950 to-blue-600 text-white rounded-lg cursor-pointer overflow-hidden active:scale-95 transition-transform duration-300 group">
              <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-[#ffc107]/70 rounded-lg transition-all duration-500 ease-&lsqb;cubic-bezier(0,0,0.2,1)&rsqb; group-hover:w-full group-hover:h-[14em] -translate-x-1/2 -translate-y-1/2"></span>
              <span className="relative z-10">Login</span>
            </button>
          </form>

          {/* Social Login */}
          <div className="my-6 flex flex-col items-center">
            <div className="flex items-center justify-center w-full">
              <span className="w-full border-t border-gray-400"></span>
              <span className="px-2 text-gray-300 text-sm">OR</span>
              <span className="w-full border-t border-gray-400"></span>
            </div>

            <div className="flex justify-center gap-6 mt-4">
            {[FaGoogle, FaGithub, FaLinkedin, FaXTwitter].map((Icon, i) => (
              <button
                key={i}
                type="button"
                className="flex items-center justify-center w-12 h-12 bg-white/20 border border-white/30 rounded-full hover:bg-white/30 transition"
              >
                <Icon className="text-white" size={22} />
              </button>
            ))}
          </div>
          </div>

          <p className="text-center text-sm text-gray-200 mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="font-medium text-yellow-400 hover:underline">
              Sign Up
            </a>
          </p>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 bg-white dark:bg-[#0D1117] flex flex-col justify-center p-10 md:p-14 text-gray-800 dark:text-[#ffffff]">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-[#ffffff] mb-4">
            Log in and stay connected.
          </h2>
          <p className="text-gray-600 dark:text-[#ffffff] mb-6">
            At DevByte, collaboration is everything. Log in to explore new
            opportunities, learn from the community, and share your voice.
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-[#ffffff]">
            <li>— Access member-only discussions</li>
            <li>— Collaborate on open-source projects</li>
            <li>— Stay updated with global tech trends</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
