import React, { useState, useRef, useEffect } from "react";
import CommunityLogo from "@/assets/logos/IMG_20250811_164020_018-Photoroom.png";
import { NavLink, useNavigate } from "react-router-dom";
import { SunDim, Moon, Menu, UserCircle } from "lucide-react";
import { toggleTheme } from "@/redux/features/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Button from "../ui/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

  const navRef = useRef(null);

  //navbar height
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

  // Get user from Redux
  const profileUser = useSelector((state) => state.user.user);
  const authUser = useSelector((state) => state.auth?.user);
  const user = profileUser || authUser || null;

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
    <div
      ref={navRef}
      className="sticky top-0 z-10 w-full bg-white dark:bg-[#0D1117] shadow-md"
    >
      <div className="pt-3 pb-4 sm:px-10 px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/">
            <img src={CommunityLogo} alt="logo" className="w-28 sm:w-40" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-6 text-lg dark:text-gray-100">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `hover:underline decoration-[#00AEEF] underline-offset-4 ${
                    isActive
                      ? "text-[#00AEEF] font-semibold"
                      : "text-[#161B22] dark:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* User / Auth */}
            {user ? (
              <button
                onClick={() => navigate("/profile")}
                className="flex items-center gap-3 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-full"
              >
                <span>{user.fullname?.split(" ")[0] || "User"}</span>

                {user.profilePicture ? (
                  <img
                    src={`${BASE_URL}/${user.profilePicture}`}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center bg-gray-300 dark:bg-gray-600 rounded-full w-8 h-8">
                    {user.fullname
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                )}
              </button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                    <UserCircle />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-48">
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem onClick={() => navigate("/signup")}>
                    Sign Up
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={() => navigate("/login")}>
                    Log In
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "light" ? <Moon /> : <SunDim />}
            </button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="lg:hidden p-2">
                  <Menu />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-4 mt-4">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className="hover:underline decoration-[#00AEEF]"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
