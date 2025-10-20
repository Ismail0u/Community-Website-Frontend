'use client';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FaGithub, FaGoogle, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import bgImage from "@/assets/images/auth-bg.WEBP";

const Signup = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card Container */}
      <div className="relative flex flex-col md:flex-row w-[90%] max-w-5xl rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md my-20">
        {/* Left: Glass Signup Form */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-center border-r border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Create Your DevByte Account
          </h2>

          <form className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/20 border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/70 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/20 border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/70 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            />

            <div className="relative w-full">
              <input
                type={show ? 'text' : 'password'}
                placeholder="Password"
                className="w-full bg-white/20 border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/70 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
              >
                {show ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="relative w-full">
              <input
                type={show ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="w-full bg-white/20 border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/70 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
              >
                {show ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <label className="flex items-center space-x-2 text-sm text-white/80">
              <input type="checkbox" className="rounded bg-transparent" />
              <span>I agree to the Community Guidelines</span>
            </label>

            <button className="relative text-[17px] w-full font-medium px-10 py-4 bg-gradient-to-r from-blue-950 to-blue-600 text-white rounded-lg cursor-pointer overflow-hidden active:scale-95 transition-transform duration-300 group"> 
              <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-[#ffc107]/70 rounded-lg transition-all duration-500 ease-&lsqb;cubic-bezier(0,0,0.2,1)&rsqb; group-hover:w-full group-hover:h-[14em] -translate-x-1/2 -translate-y-1/2"></span> 
              <span className="relative top-[-1px] z-10">Sign Up</span> 
            </button>
          </form>

          {/* Social Auth */}
          <div className="my-6">
            <div className="flex items-center justify-center text-white/70 text-sm">
              <span className="w-16 border-t border-white/30"></span>
              <span className="px-2">OR</span>
              <span className="w-16 border-t border-white/30"></span>
            </div>
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

          <p className="text-center text-sm text-white/80 mt-5">
            Already have an account?{' '}
            <a href="/login" className="text-yellow-400 hover:underline">
              Login
            </a>
          </p>
        </div>

        {/* Right: Content Section */}
        <div className="w-full md:w-1/2 bg-white dark:bg-[#0D1117] flex flex-col justify-center p-10 md:p-14 text-gray-800 dark:text-[#ffffff]">
          <h3 className="text-3xl font-bold mb-4">Join the DevByte Movement </h3>
          <p className="text-gray-600 dark:text-[#ffffff] leading-relaxed mb-6">
            DevByte is more than just a community — it’s a space where developers, designers,
            and innovators come together to learn, collaborate, and grow. From hands-on projects
            to open-source contributions and global networking opportunities, DevByte helps you
            elevate your career and connect with like-minded talents across the world.
          </p>

          <ul className="space-y-3 text-gray-700 dark:text-[#d9d9d9]">
            <li>— Learn and grow with top developers</li>
            <li>— Access community-driven resources</li>
            <li>— Collaborate on open-source projects</li>
            <li>— Showcase your portfolio globally</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;
