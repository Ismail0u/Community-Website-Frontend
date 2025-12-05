import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";


export const StatCard = ({ stat }) => {

  const Icon = stat.icon;
  const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;

  // Returns trend colors for up/down direction
  const getTrendStyles = (trend) =>
    trend === "up" ? "text-emerald-500" : "text-red-500";

  return (
    <div
      className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm transition-all 
       w-40 sm:w-11/12 sm:max-w-none mx-auto "
    >
      {/* Header with main icon + trend */}
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <Icon className="text-[#00AEEF]" size={32} />

        {/* Trend direction */}
        <div
          className={`flex items-center gap-1 text-sm font-semibold ${getTrendStyles(
            stat.trend
          )}`}
        >
          <TrendIcon size={14} className="sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">{stat.change}</span>
          <span className="sm:hidden">
            {stat.change.split(" ")[0]}
          </span>
        </div>
      </div>

      {/* Metric value */}
      <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">{stat.value}</div>

      {/* Label */}
      <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">{stat.label}</p>
    </div>
  );
};
