import { useState , useRef } from "react";
import React from "react";
import { statsData } from "./data/statsData";
import { engagementData } from "./data/engagementData";
import { activitiesData } from "./data/activitiesData";
import { quickActionsData } from "./data/quickActionsData";
import { StatCard } from "./components/statCard";
import { ActionCard } from "./components/actionCard";
import { ActivityRow } from "./components/activityRow";
import { LineChart } from "./components/chartBar";
import { AddedTagsDisplay } from "./components/addedTagsDisplay";
import { MOCK_BLOG_CATEGORIES, MOCK_EVENT_TYPES , MOCK_STACKS } from "./data/otherMockData";
import { ChevronDown } from "lucide-react";
import { useSkills } from "@/hooks/useSkills";
import { useTechs } from "@/hooks/useTech";


// ---------------------- StatsGrid Component ----------------------
// Displays stats in a responsive grid layout
const StatsGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
    {statsData.map((stat) => (
      <StatCard key={stat.id} stat={stat} />
    ))}
  </div>
);


// ---------------------- RecentActivityTable ----------------------
// Displays recent user activities in a responsive table
const RecentActivityTable = () => (
  <div>
    <h2 className="text-xl font-bold mb-6">Recent Activity</h2>

    {/* Horizontal scroll for small devices */}
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="hidden md:table-header-group">
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
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
    {quickActionsData.map((action) => (
      <ActionCard key={action.id} action={action} />
    ))}
  </div>
);

const TabButton = ({ isActive, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 px-4 md:px-6 py-3 md:py-4 font-medium text-xs md:text-base transition-all whitespace-nowrap ${        isActive
          ? "text-[#00aeff] border-b-2 border-[#00aeff]"
          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
      }`}
    >
      {children}
    </button>
  );
};

// ==================== MOBILE TAB SELECT COMPONENT ====================
const MobileTabSelect = ({ tabs, activeTab, onTabChange }) => (
  <div className="md:hidden px-4 pt-4 border-b border-gray-200 dark:border-gray-700">
    <label htmlFor="tab-select" className="sr-only">
      Select a tab
    </label>
    <div className="relative">
      <select
        id="tab-select"
        value={activeTab}
        onChange={(e) => onTabChange(e.target.value)}
        className="block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161b22] text-gray-900 dark:text-gray-100 text-sm py-3 pr-10 pl-4 shadow-sm focus:ring-2 focus:ring-[#00aeff] focus:border-[#00aeff] transition-all duration-200 appearance-none relative">
        {tabs.map((tab) => (
          <option key={tab.id} value={tab.id}>
            {tab.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400 pointer-events-none"/>
    </div>
  </div>
);

// ==================== DESKTOP TABS COMPONENT ====================
const DesktopTabs = ({ tabs, activeTab, onTabChange }) => (
  <div className="hidden md:flex justify-between border-b border-gray-200 dark:border-gray-700">
    {tabs.map((tab) => (
      <TabButton
        key={tab.id}
        isActive={activeTab === tab.id}
        onClick={() => onTabChange(tab.id)}
      >
        {tab.label}
      </TabButton>
    ))}
  </div>
);

// ==================== RESPONSIVE TABS HEADER (REPLACED TabsWithArrows) ====================
const ResponsiveTabsHeader = ({ tabs, activeTab, onTabChange }) => {
  return (
    <>
      <MobileTabSelect tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
      <DesktopTabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
    </>
  );
};

// ---------------------- Main Dashboard Page ----------------------
const DashboardPage = () => {
  const { skills, isLoading: skillsLoading, batchCreateSkills, deleteSkill } = useSkills();
  const { techs, isLoading: techsLoading, createTech, deleteTech } = useTechs();
  const [stacks, setStacks] = useState(MOCK_STACKS);
  const [eventTypes, setEventTypes] = useState(MOCK_EVENT_TYPES);
  const [blogCategories, setBlogCategories] = useState(MOCK_BLOG_CATEGORIES);
  const [activeContentTab, setActiveContentTab] = useState('activity');

   const tabs = [
    { id: 'activity', label: 'Recent Activity' },
    { id: 'skills', label: 'Added Skills' },
    { id: 'stacks', label: 'Added Stacks' },
    { id: 'events', label: 'Event Types' },
    { id: 'blogs', label: 'Blog Categories' },
  ];

  const handleRemoveTag = async (type, tag) => {
    if (type === 'skills') {
      const result = await deleteSkill(tag.id);
      if (!result.success) {
        console.error('Failed to delete skill:', result.error);
      }
    }
    if (type === 'techs') {
      const result = await deleteTech(tag.id);
      if (!result.success) {
        console.error('Failed to delete tech:', result.error);
      }
    }
  if (type === 'events') setEventTypes(eventTypes.filter(t => t !== tag));
  if (type === 'blogs') setBlogCategories(blogCategories.filter(t => t !== tag));
};


  return (

  <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-black dark:text-white bg-[#f9f9f9] dark:bg-[#0d1117] min-h-screen">
    <StatsGrid />
    
    {/* Tabs Section */}
    <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"> 
      {/* Tabs Header: Uses Select on mobile, justified buttons on desktop */}
      <ResponsiveTabsHeader
        tabs={tabs}
        activeTab={activeContentTab}
        onTabChange={setActiveContentTab}
      />
      <div className="p-4 sm:p-6">
        {activeContentTab === 'activity' && <RecentActivityTable />}
        
        {activeContentTab === 'skills' && (
          <AddedTagsDisplay
            type="skills"
            tags={skills}
            onRemove={(tag) => handleRemoveTag('skills', tag)}
            isLoading={skillsLoading}
          />
        )}
        {activeContentTab === 'stacks' && (
          <AddedTagsDisplay
            type="stacks"
            tags={stacks}
            onRemove={(tag) => handleRemoveTag('stacks', tag)}
          />
        )}
        {activeContentTab === 'events' && (
          <AddedTagsDisplay
            type="events"
            tags={eventTypes}
            onRemove={(tag) => handleRemoveTag('events', tag)}
          />
        )}
        {activeContentTab === 'blogs' && (
          <AddedTagsDisplay
            type="blogs"
            tags={blogCategories}
            onRemove={(tag) => handleRemoveTag('blogs', tag)}
          />
        )}
      </div>
    </div>
    <WeeklyEngagementChart />
    <QuickActionsGrid />
  </div>
);
}

export default DashboardPage;
