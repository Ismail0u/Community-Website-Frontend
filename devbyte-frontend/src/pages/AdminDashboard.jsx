import { useState } from "react";
import DashboardPage from "@/features/adminDashboard/DashboardPage";
import DashboardSidebar from "@/features/adminDashboard/layout/dashboardSidebar";
import DashboardHeader from "@/features/adminDashboard/layout/dashboardHeader";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-full bg-black text-white relative">

      {/* Sidebar */}
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1">
        <DashboardHeader setSidebarOpen={setSidebarOpen} />
        <DashboardPage />
      </div>

      {/* Overlay when sidebar is open (mobile) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
        ></div>
      )}
    </div>
  );
};

export default AdminDashboard;
