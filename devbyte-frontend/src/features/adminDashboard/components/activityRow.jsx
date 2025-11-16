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
  <tr className="border-b border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/40">
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

    {/* Empty column placeholder */}
    <td className="py-4" />

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
);
