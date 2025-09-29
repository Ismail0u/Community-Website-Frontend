import React, { useState } from "react";
import CommunityLogo from "@/assets/logos/IMG_20250811_164020_018-Photoroom.png";
import { NavLink, useNavigate } from "react-router-dom";
import { SunDim, Moon, Menu, X } from "lucide-react";
import { toggleTheme } from "@/redux/themeSlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  // State to control whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // React Router hook for programmatic navigation
  const navigate = useNavigate();

  // Get the current theme (light or dark) from Redux store
  const theme = useSelector((state) => state.theme.mode);

  // Dispatch function to update Redux store (e.g., toggling theme)
  const dispatch = useDispatch();

  // Navigation links (name + path) used for rendering nav items
  const navLinks = [
    { name: "Members", path: "/members" },
    { name: "Events", path: "/events" },
    { name: "Learning", path: "/learning" },
    { name: "Projects", path: "/projects" },
    { name: "Jobs", path: "/jobs" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="w-full pt-3 pb-4 sm:px-10 px-4 bg-white dark:bg-[#0D1117]  shadow-md transition-colors duration-300">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img
              src={CommunityLogo}
              alt="community logo"
              className="w-28 sm:w-40 h-auto"
            />
          </NavLink>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 text-lg font-semibold text-[#161B22] dark:text-gray-100">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="hover:underline decoration-[#6A5DFF] underline-offset-4 decoration-2"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => navigate("/signup")}
            className="border border-[#6A5DFF] rounded-full px-3 sm:px-4 py-1 text-sm sm:text-base font-semibold text-[#161B22] dark:bg-gray-600 dark:text-gray-100 hover:bg-[#6767ec] hover:text-white transition whitespace-nowrap"
          >
            Sign Up
          </button>
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "light" ? <Moon /> : <SunDim />}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <span className="font-bold text-lg text-gray-900 dark:text-gray-100">
            Menu
          </span>
          <button onClick={() => setMenuOpen(false)}>
            <X />
          </button>
        </div>
        {menuOpen && (
          <div className="flex flex-col gap-3 mt-3 p-5 text-gray-900 dark:text-gray-100 font-semibold text-base">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="hover:underline decoration-[#6A5DFF] underline-offset-4 decoration-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
