import React, { useState } from "react";
import CommunityLogo from "@/assets/logos/IMG_20250811_164020_018-Photoroom.png";
import { NavLink, useNavigate } from "react-router-dom";
import { SunDim, Moon, Menu, X, UserCircle } from "lucide-react";
import { toggleTheme } from "@/redux/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "../ui/Button";

const Navbar = () => {
  // State to control whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false); // state for triggering menu opening on smaller screen
  const [authOpen, setAuthOpen] = useState(false); //state for triggering signup and login dropdown

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
    <div className=" sticky top-0 z-10 w-full  bg-white dark:bg-[#0D1117] bg-opacity-95  shadow-md transition-colors duration-300">
      <div className="pt-3 pb-4 sm:px-10 px-4">
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
          <div className="hidden  lg:flex gap-6 text-lg   dark:text-gray-100">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `hover:underline decoration-[#00AEEF] underline-offset-4 decoration-2
     ${
       isActive
         ? "text-[#00AEEF] font-semibold"
         : "text-[#161B22] dark:text-gray-100"
     }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className=" flex  items-center gap-2 sm:gap-3 ">
            <div className="hidden lg:flex gap-3">
              <Button
                onClick={() => navigate("/signup")}
                className="bg-[#6A5DFF]/15   sm:px-4  text-sm sm:text-base  text-[#161B22] dark:bg-gray-600 dark:text-gray-100   whitespace-nowrap"
              >
                Sign Up
              </Button>
              <Button
                onClick={() => navigate("/login")}
                className="bg-[#6A5DFF]/15 sm:px-4  text-sm sm:text-base   text-[#161B22] dark:bg-gray-600 dark:text-gray-100    whitespace-nowrap"
              >
                Log In
              </Button>
            </div>

            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "light" ? <Moon /> : <SunDim />}
            </button>

            {/* Tablet: User Icon triggers dropdown */}
            <div className=" block lg:hidden relative">
              <button
                onClick={() => setAuthOpen(!authOpen)}
                className=" rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <UserCircle />
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="block lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {authOpen && (
          <div className="absolute left-0 right-0  text-gray-800  shadow-md transition-all duration-300 overflow-hidden">
            <div className="border-t  border-gray-200 dark:border-gray-600 bg-[#D9D9D9] text-[#161B22] dark:bg-[#161B22] ">
              <div className="flex justify-between items-center   px-2 py-3 ">
                <span className=" pl-2 text-lg text-gray-900 dark:text-gray-100 pb-2">
                  Account
                </span>
                <button
                  className="text-[#161B22]  dark:text-white"
                  onClick={() => setAuthOpen(false)}
                >
                  <X />
                </button>
              </div>
              <div className="flex flex-col">
                <Button
                  onClick={() => {
                    navigate("/signup");
                    setAuthOpen(false);
                  }}
                  className="w-full text-left py-3  px-4  text-md text-[#161B22]  dark:text-gray-100 "
                >
                  Sign Up
                </Button>
                <Button
                  onClick={() => {
                    navigate("/login");
                    setAuthOpen(false);
                  }}
                  className="w-full text-left py-3  px-4  text-md text-[#161B22]  dark:text-gray-100 "
                >
                  Log In
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Nav Links */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <span className=" text-lg text-gray-900 dark:text-gray-100">
              Menu
            </span>
            <button onClick={() => setMenuOpen(false)}>
              <X />
            </button>
          </div>
          {menuOpen && (
            <div className="flex flex-col gap-3 mt-3 p-5 text-gray-900 dark:text-gray-100  text-base">
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
    </div>
  );
};

export default Navbar;
