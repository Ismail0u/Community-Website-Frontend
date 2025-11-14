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
const DashboardSidebar = () => {
  const theme = useSelector((state) => state.theme.mode);

  // Define colors based on theme
  const sidebarBg = theme === 'light' ? 'bg-white border-gray-200' : 'bg-[#161B22] border-slate-800';
  const dividerBorder = theme === 'light' ? 'border-gray-200' : 'border-slate-800';
  const bottomItemClasses = theme === 'light' 
    ? 'text-gray-600 hover:bg-gray-100 hover:text-gray-900' 
    : 'text-gray-400 hover:bg-slate-800 hover:text-gray-200';
  const versionColor = theme === 'light' ? 'text-gray-400' : 'text-gray-600';


  return (
    <div className={`w-1/4 max-w-64 border-r flex flex-col ${sidebarBg}`}>
      
      {/* Header Section: Logo and branding */}
      <div className={`p-6 border-b ${dividerBorder}`}>
        <div>
          <NavLink to="/">
            <img
              src={CommunityLogo}
              alt="community logo"
              className="w-28 sm:w-40 h-auto"
            />
          </NavLink>
        </div>
      </div>

      {/* Primary Navigation Links */}
      <nav className="flex-1 p-4 space-y-1">
        {NAVIGATION_ITEMS.map((item) => (
          // Only item prop is passed; NavLink handles active state
          <NavItem
            key={item.id}
            item={item}
          />
        ))}
      </nav>

      {/* Bottom Actions: Settings and Logout buttons */}
      <div className={`p-4 border-t ${dividerBorder} space-y-1`}>
        {/* Settings Button */}
        <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${bottomItemClasses}`}>
          <Settings size={20} />
          <span>Settings</span>
        </button>
        {/* Logout Button */}
        <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${bottomItemClasses}`}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

      {/* Version Indicator */}
      <div className={`p-4 text-xs ${versionColor}`}>v 0.0.0</div>
    </div>
  );
};

export default DashboardSidebar;