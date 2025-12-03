import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaGithub, FaGoogle, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import HeaderWrapper from "@/components/ui/Header";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "@/redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "@/redux/features/userSlice";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    communityGuidelines: "",
  });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector((state) => state.auth);
  // navigate to home page and get the user profile after succesfull signing up
  useEffect(() => {
    (async () => {
      if (successMessage) {
        await dispatch(fetchUserProfile()).unwrap(); //  use unwrap to get real Promise behavior
        setFormData({
          fullname: "",
          email: "",
          password: "",
          confirmPassword: "",
          communityGuidelines: "",
        });

        navigate("/");
      }
    })();
  }, [successMessage, navigate, dispatch]);

  // handle input change func
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // form submit func
  const handleSubmit = (e) => {
    e.preventDefault();

    // handle confirm password func
    if (formData.password !== formData.confirmPassword) {
      alert("Password do not match");
      return;
    }

    const userData = {
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
    };

    dispatch(signupUser(userData));
  };

  return (
    <div className="min-h-[150vh] bg-gray-100 flex flex-col dark:bg-[#0D1117]">
      {/* Top container with message */}
      <HeaderWrapper className="text-center ">
        <div>
          <h2 className="text-3xl font-bold text-gradient-to-r from-blue-400 to-blue-800">
            Join DevByte
          </h2>
          <p className="mt-1 text-md">
            Become a member of the global DevByte community
          </p>
        </div>
      </HeaderWrapper>

      {/* Signup Form */}
      <div className="flex items-center justify-center flex-1 px-4 my-5">
        <div className="w-full max-w-2xl bg-white dark:bg-[#161B22] shadow rounded-xl px-8 py-5">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full bg-white/20 border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/70 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-white/20 border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/70 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            />

            <div className="relative w-full">
              <input
                type={show ? "text" : "password"}
                name="password"
                autoComplete="new-password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
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
                name="confirmPassword"
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
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
            {error && (
              <div className="text-red-500 text-sm">
                {/* If backend returned a string message, show it. Otherwise prefer structured payload */}
                {typeof error === "string"
                  ? error
                  : error?.message || "An error occurred"}

                {/* If there are validation errors array, render them */}
                {error && error.errors && Array.isArray(error.errors) && (
                  <ul className="mt-1 list-disc ml-5">
                    {error.errors.map((err, idx) => (
                      <li key={idx}>
                        {err?.msg || err?.message || JSON.stringify(err)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* <input
              type="text"
              placeholder="Your Skills"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            /> */}

            <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-[#d9d9d9]">
              <input
                type="checkbox"
                name={formData.communityGuidelines}
                onChange={handleChange}
                className="rounded"
              />
              <span>I agree to the Community Guidelines</span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="relative text-[17px] w-full font-medium px-10 py-4  bg-gradient-to-r from-blue-950 to-blue-600 text-white rounded-lg cursor-pointer overflow-hidden active:scale-95 transition-transform duration-300 group"
            >
              <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-[#ffc107]/70 rounded-lg transition-all duration-500 ease-&lsqb;cubic-bezier(0,0,0.2,1)&rsqb; group-hover:w-full group-hover:h-[14em] -translate-x-1/2 -translate-y-1/2"></span>
              <span className="relative top-[-1px] z-10">
                {" "}
                {loading ? "Signing up..." : "Sign Up"}
              </span>
            </button>
          </form>

          {/* Social Auth */}
          <div className="my-4">
            <div className="flex items-center justify-center">
              <span className="w-full border-t border-gray-300"></span>
              <span className="px-2 text-gray-400 dark:text-[#d9d9d9] text-sm">
                OR
              </span>
              <span className="w-full border-t border-gray-300"></span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-4">
            <button
              type="button"
              className="flex items-center justify-center w-12 h-12 transition border border-gray-300 rounded-full dark:bg-white hover:bg-gray-100"
            >
              <FaGoogle className="text-red-500" size={22} />
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-12 h-12 transition border border-gray-300 rounded-full dark:bg-white hover:bg-gray-100"
            >
              <FaGithub className="text-gray-800" size={22} />
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-12 h-12 transition border border-gray-300 rounded-full dark:bg-white hover:bg-gray-100"
            >
              <FaLinkedin className="text-blue-600" size={22} />
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-12 h-12 transition border border-gray-300 rounded-full dark:bg-white hover:bg-gray-100"
            >
              <FaXTwitter className="text-black" size={22} />
            </button>
          </div>
          <p className="text-center text-sm text-gray-600 dark:text-[#d9d9d9] mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-indigo-600 hover:underline"
            >
              Login
            </a>
          </p>
        </div>

        {/* Right: Content Section */}
        <div className="w-full md:w-1/2 bg-white dark:bg-[#0D1117] flex flex-col justify-center p-10 md:p-14 text-gray-800 dark:text-[#ffffff]">
          <h3 className="text-3xl font-bold mb-4">
            Join the DevByte Movement{" "}
          </h3>
          <p className="text-gray-600 dark:text-[#ffffff] leading-relaxed mb-6">
            DevByte is more than just a community — it’s a space where
            developers, designers, and innovators come together to learn,
            collaborate, and grow. From hands-on projects to open-source
            contributions and global networking opportunities, DevByte helps you
            elevate your career and connect with like-minded talents across the
            world.
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
