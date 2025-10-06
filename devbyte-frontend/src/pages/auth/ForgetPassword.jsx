import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaGithub, FaGoogle, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top container with message */}
      <div className="w-full bg-gradient-to-r from-blue-950 to-blue-600 text-white text-center py-10 shadow">
        <h2 className="text-3xl font-bold">Forgot Password</h2>
        <p className="text-md mt-1">
          Enter your email to reset your password.
        </p>
      </div>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 dark:bg-[#0D1117] dark:text-[#D9D9D9]">
        <div className="w-full max-w-2xl bg-white dark:bg-[#161B22] shadow rounded-xl px-8 py-20">
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-[#d9d9d9] outline-none rounded-lg px-4 py-3 dark:text-[#d9d9d9] dark:placeholder:text-[#d9d9d9] focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />

            <button className="relative text-[17px] w-full font-medium px-10 py-4  bg-gradient-to-r from-blue-950 to-blue-600 text-white rounded-lg cursor-pointer overflow-hidden active:scale-95 transition-transform duration-300 group">
              <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-[#ffc107]/70 rounded-lg transition-all duration-500 ease-&lsqb;cubic-bezier(0,0,0.2,1)&rsqb; group-hover:w-full group-hover:h-[14em] -translate-x-1/2 -translate-y-1/2"></span>
              <span className="relative top-[-1px] z-10">Reset Password</span>
            </button>
          </form>



          <p className="text-center text-sm text-gray-600 dark:text-[#d9d9d9] mt-6">
            {" "}
            <a
              href="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
            Back to Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
