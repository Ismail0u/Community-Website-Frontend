import React, { useState, useRef, useEffect } from "react";
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

  const navRef = useRef(null);

  useEffect(() => {
    const updateNavHeight = () => {
      if (!navRef.current) return;
      const height = navRef.current.offsetHeight;
      document.documentElement.style.setProperty("--nav-h", `${height}px`);
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  return (
    <div
      ref={navRef}
      className=" sticky top-0 z-10 w-full  bg-white dark:bg-[#0D1117] bg-opacity-95  shadow-md transition-colors duration-300"
    >
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
            <div className="relative">
              <button
                onClick={() => setAuthOpen(!authOpen)}
                className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 p-2 transition"
              >
                <UserCircle />
              </button>
            </div>

            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "light" ? <Moon /> : <SunDim />}
            </button>

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
          <div
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#161B22] 
               border border-gray-200 dark:border-gray-700 
               shadow-lg z-50 transition-all duration-300"
          >
            <div className="flex justify-between items-center ">
              <span className="text-gray-900 dark:text-gray-100 pb-4 px-4">
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
                className="w-full text-left py-4 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Sign Up
              </Button>
              <Button
                onClick={() => {
                  navigate("/login");
                  setAuthOpen(false);
                }}
                className="w-full text-left py-4 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Log In
              </Button>
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
