"use client";
import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaGithub, FaGoogle, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import bgImage from "@/assets/images/auth-bg.webp";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "@/redux/features/authSlice";
import { fetchUserProfile } from "@/redux/features/userSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    communityGuidelines: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, successMessage } = useSelector((state) => state.auth);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.communityGuidelines) {
      alert("You must agree to the community guidelines");
      return;
    }

    const userData = {
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
    };

    dispatch(signupUser(userData));
  };

  // Navigate on success
  useEffect(() => {
    if (successMessage) {
      (async () => {
        await dispatch(fetchUserProfile()).unwrap();
        setFormData({
          fullname: "",
          email: "",
          password: "",
          confirmPassword: "",
          communityGuidelines: false,
        });
        navigate("/");
      })();
    }
  }, [successMessage, dispatch, navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main container */}
      <div className="relative flex flex-col md:flex-row w-[90%] max-w-5xl rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md my-20">
        {/* LEFT: Signup Form */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-center border-r border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Create Your DevByte Account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full bg-white/20 border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/20 border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:ring-2 focus:ring-indigo-400"
            />

            {/* PASSWORD */}
            <div className="relative w-full">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                className="w-full bg-white/20 border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70"
              >
                {show ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative w-full">
              <input
                type={show ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                className="w-full bg-white/20 border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70"
              >
                {show ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* ERRORS */}
            {error && (
              <div className="text-red-400 text-sm">
                {typeof error === "string"
                  ? error
                  : error?.message || "Something went wrong"}
              </div>
            )}

            {/* CHECKBOX */}
            <label className="flex items-center space-x-2 text-sm text-white/80">
              <input
                type="checkbox"
                name="communityGuidelines"
                checked={formData.communityGuidelines}
                onChange={handleChange}
                className="rounded bg-transparent"
              />
              <span>I agree to the Community Guidelines</span>
            </label>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="relative text-[17px] w-full font-medium px-10 py-4 bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-lg cursor-pointer overflow-hidden active:scale-95 transition-transform duration-300 group"
            >
              <span className="relative z-10">
                {loading ? "Signing up..." : "Sign Up"}
              </span>
            </button>
          </form>

          {/* Social Login */}
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
            Already have an account?{" "}
            <a href="/login" className="text-yellow-300 hover:underline">
              Login
            </a>
          </p>
        </div>

        {/* RIGHT: Info Section */}
        <div className="w-full md:w-1/2 bg-white dark:bg-[#0D1117] flex flex-col justify-center p-10 md:p-14 text-gray-800 dark:text-white">
          <h3 className="text-3xl font-bold mb-4">Join the DevByte Movement</h3>
          <p className="text-gray-600 dark:text-white leading-relaxed mb-6">
            DevByte is more than just a community — it’s a place where
            developers, designers and innovators learn, collaborate and grow
            through real projects and global networking.
          </p>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>• Learn and grow with top developers</li>
            <li>• Access community-driven resources</li>
            <li>• Collaborate on open-source projects</li>
            <li>• Showcase your portfolio globally</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;
