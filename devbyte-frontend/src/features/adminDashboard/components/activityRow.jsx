const STATUS = {
  APPROVED: "Approved",
  UNDER_REVIEW: "Under Review",
};

// Status badge colors
const getStatusStyles = (status) => ({
  Approved: "bg-emerald-500/20 text-emerald-400",
  "Under Review": "bg-blue-500/20 text-blue-400",
}[status] || "bg-gray-600/20 text-gray-400");

export const ActivityRow = ({ activity }) => (
    <>
        { /**use table on large screen (for computers ) and hidde the table on mobile  */}
        <tr className="hidden md:table-row border-b border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/40">
            {/* User */}
            <td className="py-4">
            <div className="flex items-center gap-3">
                <div >
                <img src={activity.avatar} alt={activity.user} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-xl" />
                </div>
                <span className="font-medium">{activity.user}</span>
            </div>
            </td>

            {/* Action */}
            <td className="py-4 text-gray-500 dark:text-gray-400">
            {activity.action}
            </td>

            {/* Date */}
            <td className="py-4 text-gray-500 dark:text-gray-400">
            {activity.date}
            </td>

            {/* Status Badge */}
            <td className="py-4">
            <span
                className={`px-4 py-1.5 rounded-full text-sm font-medium ${getStatusStyles(
                activity.status
                )}`}
            >
                {activity.status}
            </span>
            </td>
        </tr>
         {/* use card layout for mobile */}
    <tr className="md:hidden border-b border-gray-200 dark:border-gray-700 ">
      <td colSpan="4" className="py-3">
        <div className="flex gap-3">
          <img 
            src={activity.avatar} 
            alt={activity.user} 
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 w-52">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="font-medium text-sm truncate">{activity.user}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles(activity.status)}`}>
                {activity.status}
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{activity.action}</p>
            <p className="text-xs text-gray-400">{activity.date}</p>
          </div>
        </div>
      </td>
    </tr>
  </>
);
