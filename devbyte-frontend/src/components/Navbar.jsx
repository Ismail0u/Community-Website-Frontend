import React, { useState, useEffect } from "react";
import image from "../assets/icons/IMG_20250811_164013_314-Photoroom.png";
import { Menu, CircleChevronLeft, Search } from "lucide-react";
import { Switch } from "./ui/switch";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navigationItems = [
    { name: "Members", href: "#members" },
    { name: "Events", href: "#events" },
    { name: "Learning", href: "#learning" },
    { name: "Projects", href: "#projects" },
    { name: "Jobs", href: "#jobs" },
    { name: "Blog", href: "#blog" },
    { name: "About", href: "#about" },
  ];
  return (
    <div className="p-[10px] bg-white">
      <div className="flex justify-between items-center md:px-32">
        <div className="flex items-center gap-1">
          <img src={image} className="w-7" alt="" />

          <h1 className="text-[25px] bg-gradient-to-r  from-[#00AEEF] to-[#6A5DFF] bg-clip-text text-transparent font-semibold">
            DevByte
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className=" flex gap-7">
            {navigationItems.map((item) => (
              <li key={item.name} className=" text-[16px]  text-gray-800  ">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex gap-3">
          {/* Search Bar */}
          <div className="flex items-center ">
            <Search />
          </div>

          {/* Sign Up Button */}
          <button className="w-full text-base px-3 border border-sky-400 bg-gradient-to-r from-white to-white hover:from-[#00AEEF] hover:to-[#6A5DFF] transition-all duration-700 text-sky-400 hover:text-white py-1 rounded-full font-semibold">
            Sign Up
          </button>
        </div>
        <div className="hidden md:block">
          <Switch
            className="
    scale-110
    data-[state=checked]:bg-[#00AEEF]
    data-[state=unchecked]:bg-gray-100
  "
          />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div className="md:hidden">
            <Menu size={27} onClick={toggleMenu} />
          </div>
          <nav
            className={`fixed text-left top-0 w-4/5 max-w-sm h-full bg-white/95  transition-all duration-300 z-40 shadow-2xl ${
              isMenuOpen ? "right-0" : "-right-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <CircleChevronLeft onClick={toggleMenu} size={27} />
            </div>
            <div className=" pb-5">
              <ul className="space-y-0">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-8 py-3 text-lg font-medium text-gray-800 border-b border-gray-100 "
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="px-8 pt-5 space-y-4">
                {/* Search Bar */}
                <div className="flex items-center bg-gray-100 rounded-full px-5 py-3 border-2 border-transparent focus-within:border-blue-500 focus-within:shadow-lg transition-all">
                  <Search color="#6b7280" />

                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none w-full ml-3 text-gray-800 placeholder-gray-500"
                  />
                </div>

                {/* Sign Up Button */}
                <button className="w-full  bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] text-white py-4 rounded-full font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
                  Sign Up
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
