import React from "react";

const Skeleton = () => {
  return (
    <article
      className="max-w-xl m-4 rounded-xl overflow-hidden shadow-lg border border-[#135d8e68] dark:bg-[#0b1115]"
      role="status"
      aria-label="Loading card"
    >
      {/* image area */}
      <div className="h-40 bg-slate-700/50 animate-pulse" />

      <div className="p-5">
        {/* category */}
        <div className="w-80 h-4 bg-slate-600 rounded-full mb-4 animate-pulse" />

        {/* title (two lines to mimic break) */}
        <div className="h-6 bg-slate-600 rounded-md mb-3 animate-pulse w-3/4" />
        <div className="h-6 bg-slate-600 rounded-md mb-4 animate-pulse w-1/2" />

        {/* excerpt */}
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-slate-600 rounded w-full animate-pulse" />
          <div className="h-3 bg-slate-600 rounded w-5/6 animate-pulse" />
          <div className="h-3 bg-slate-600 rounded w-2/3 animate-pulse" />
        </div>

        {/* read more */}
        <div className="w-24 h-4 bg-slate-600 rounded-full animate-pulse" />
      </div>
    </article>
  );
};

export default Skeleton;
