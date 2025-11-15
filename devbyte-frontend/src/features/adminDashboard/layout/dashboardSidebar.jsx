import { LayoutDashboard, Users, Briefcase, Calendar, FileText, TrendingUp , Settings,LogOut } from 'lucide-react';
import { useSelector } from 'react-redux';

import CommunityLogo from "@/assets/logos/IMG_20250811_164020_018-Photoroom.png";
import { NavLink, useNavigate } from "react-router-dom";

/**
 * Array defining the primary navigation items for the application sidebar.
 */
const NAVIGATION_ITEMS = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, path: '/adminDashboard' },
  { id: 'members', name: 'Members', icon: Users, path: '/members' },
  { id: 'projects', name: 'Projects', icon: Briefcase, path: '/projects' },
  { id: 'events', name: 'Events', icon: Calendar, path: '/events' },
  { id: 'blog', name: 'Blog', icon: FileText, path: '/blogs' },
  { id: 'reports', name: 'Reports', icon: TrendingUp, path: '/reports' },
];

/**
 * NavItem Component: Renders a single navigation link using NavLink.
 * The active state is determined automatically by NavLink based on the URL.
 */
const NavItem = ({ item }) => {
  const theme = useSelector((state) => state.theme.mode);
  const Icon = item.icon; 

  const activeClasses = 'bg-[#00AEEF]/10 text-[#00AEEF] border-l-4 border-[#00AEEF]'; 
  
  const inactiveClasses = theme === 'light'
    ? 'text-gray-600 hover:bg-gray-100 hover:text-gray-900' // Light mode inactive state
    : 'text-gray-400 hover:bg-slate-800 hover:text-gray-200'; // Dark mode inactive state

  return (
    <NavLink
      to={item.path} // Use the path property for navigation
      className={({ isActive }) => 
        `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
          isActive ? activeClasses : inactiveClasses
        }`
      }
    >
      <span className="text-lg">
        <Icon size={20} /> 
      </span>
      <span className="font-medium">{item.name}</span>
    </NavLink>
  );
};

/**
 * DashboardSidebar Component: Renders the entire persistent navigation bar.
 */
const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const theme = useSelector((state) => state.theme.mode);
  
  const sidebarBg = theme === 'light' ? 'bg-white border-gray-200' : 'bg-[#161B22] border-slate-800';

  return (
    <div
      className={`
        fixed inset-y-0 left-0 z-40 w-64 border-r ${sidebarBg}
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static
      `}
    >
      {/* HEADER */}
      <div className={`p-6 border-b`}>
        <NavLink to="/">
          <img src={CommunityLogo} alt="Logo" className="w-28 sm:w-40 h-auto" />
        </NavLink>

        {/* ✖ close button on mobile */}
        <button
          className="absolute top-4 right-4 lg:hidden p-2 rounded hover:bg-slate-800"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 p-4 space-y-1">
        {NAVIGATION_ITEMS.map(item => (
          <NavItem key={item.id} item={item} />
        ))}
      </nav>

      {/* BOTTOM */}
      <div className="p-4 border-t space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg">
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;