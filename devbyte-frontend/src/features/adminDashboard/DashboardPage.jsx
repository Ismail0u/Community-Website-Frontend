import React from "react";
import { statsData } from "./data/statsData";
import { engagementData } from "./data/engagementData";
import { activitiesData } from "./data/activitiesData";
import { quickActionsData } from "./data/quickActionsData";
import { StatCard } from "./components/statCard";
import { ActionCard } from "./components/actionCard";
import { ActivityRow } from "./components/activityRow";
import { LineChart } from "./components/chartBar";


// ---------------------- StatsGrid Component ----------------------
// Displays stats in a responsive grid layout
const StatsGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {statsData.map((stat) => (
      <StatCard key={stat.id} stat={stat} />
    ))}
  </div>
);


// ---------------------- RecentActivityTable ----------------------
// Displays recent user activities in a responsive table
const RecentActivityTable = () => (
  <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-xl p-6">
    <h2 className="text-xl font-bold mb-6">Recent Activity</h2>

    {/* Horizontal scroll for small devices */}
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-700 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-800">
            <th className="pb-4 font-medium">User</th>
            <th className="pb-4 font-medium">Action</th>
            <th className="pb-4 font-medium">Date</th>
            <th className="pb-4 font-medium">Status</th>
          </tr>
        </thead>

        <tbody>
          {activitiesData.map((activity) => (
            <ActivityRow key={activity.id} activity={activity} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);


// ---------------------- WeeklyEngagementChart ----------------------
// Bar chart with responsive spacing + dark/light colors
const WeeklyEngagementChart = () => {

  return (
    <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-6">Weekly Engagement</h2>

      {/* Responsive bar container */}
      <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 px-2 sm:px-4">
          <LineChart data={engagementData} />
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
        <span>0</span>
        <span>1000</span>
      </div>
    </div>
  );
};


// ---------------------- QuickActionsGrid ----------------------
// Displays quick action buttons in a responsive grid
const QuickActionsGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {quickActionsData.map((action) => (
      <ActionCard key={action.id} action={action} />
    ))}
  </div>
);


// ---------------------- Main Dashboard Page ----------------------
const DashboardPage = () => (
  <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-black dark:text-white bg-[#f9f9f9] dark:bg-[#0d1117] min-h-screen">
    <StatsGrid />
    <RecentActivityTable />
    <WeeklyEngagementChart />
    <QuickActionsGrid />
  </div>
);

export default DashboardPage;
