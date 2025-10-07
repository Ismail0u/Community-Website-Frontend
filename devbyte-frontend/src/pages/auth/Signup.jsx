import React, {useState} from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { FaGithub, FaGoogle, FaLinkedin, FaXTwitter } from "react-icons/fa6";


const Signup = () => {
    const [show, setShow] = useState(false)
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col dark:bg-[#0D1117]">
      {/* Top container with message */}
      <div className="w-full bg-gradient-to-r from-blue-950 to-blue-600 text-white text-center py-10 shadow">
        <h2 className="text-3xl font-bold text-gradient-to-r from-blue-400 to-blue-800">Join DevByte</h2>
        <p className="text-md mt-1">Become a member of the global DevByte community</p>
      </div>

      {/* Signup Form */}
      <div className="flex-1 flex items-center justify-center px-4 my-5">
        <div className="w-full max-w-2xl bg-white dark:bg-[#161B22] shadow rounded-xl px-8 py-5">
          <form className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border border-[#d9d9d9] outline-none rounded-lg px-4 py-3 dark:text-[#d9d9d9] dark:placeholder:text-[#d9d9d9] focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-[#d9d9d9] outline-none rounded-lg px-4 py-3 dark:text-[#d9d9d9] dark:placeholder:text-[#d9d9d9] focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />

            <div className="relative w-full">
                <input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    className="w-full bg-transparent border border-[#d9d9d9] outline-none rounded-lg px-4 py-3 dark:text-[#d9d9d9] dark:placeholder:text-[#d9d9d9] focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-[#d9d9d9] hover:text-gray-700"
                >
                    {show ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            </div>

            <div className="relative w-full">
                <input
                    type={show ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full bg-transparent border border-[#d9d9d9] outline-none rounded-lg px-4 py-3 dark:text-[#d9d9d9] dark:placeholder:text-[#d9d9d9] focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-[#d9d9d9] hover:text-gray-700"
                >
                    {show ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            </div>

            {/* <input
              type="text"
              placeholder="Your Skills"
              className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            /> */}

            <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-[#d9d9d9]">
                <input type="checkbox" className="rounded" />
                <span>I agree to the Community Guidelines</span>
            </label>

            <button className="relative text-[17px] w-full font-medium px-10 py-4  bg-gradient-to-r from-blue-950 to-blue-600 text-white rounded-lg cursor-pointer overflow-hidden active:scale-95 transition-transform duration-300 group">
              <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-[#ffc107]/70 rounded-lg transition-all duration-500 ease-&lsqb;cubic-bezier(0,0,0.2,1)&rsqb; group-hover:w-full group-hover:h-[14em] -translate-x-1/2 -translate-y-1/2"></span>
              <span className="relative top-[-1px] z-10">Sign Up</span>
            </button>
          </form>

          {/* Social Auth */}
          <div className="my-4">
            <div className="flex items-center justify-center">
              <span className="border-t border-gray-300 w-full"></span>
              <span className="px-2 text-gray-400 dark:text-[#d9d9d9] text-sm">OR</span>
              <span className="border-t border-gray-300 w-full"></span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-4">
            <button
                type="button"
                className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full dark:bg-white hover:bg-gray-100 transition"
            >
                <FaGoogle className="text-red-500" size={22} />
            </button>

            <button
                type="button"
                className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full dark:bg-white hover:bg-gray-100 transition"
            >
                <FaGithub className="text-gray-800" size={22} />
            </button>

            <button
                type="button"
                className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full dark:bg-white hover:bg-gray-100 transition"
            >
                <FaLinkedin className="text-blue-600" size={22} />
            </button>

            <button
                type="button"
                className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full dark:bg-white hover:bg-gray-100 transition"
            >
                <FaXTwitter className="text-black" size={22} />
            </button>
          </div>
          <p className="text-center text-sm text-gray-600 dark:text-[#d9d9d9] mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 font-medium hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup