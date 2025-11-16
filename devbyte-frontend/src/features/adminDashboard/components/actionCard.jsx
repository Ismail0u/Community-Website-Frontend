// this card display actions for CTA : on the card , we have the icon , the title , a brief descrpition
// and a Call To Action button

export const ActionCard = ({ action }) => {
  const Icon = action.icon;

  return (
    <div
      className="
        bg-white dark:bg-[#161b22]
        border border-gray-200 dark:border-gray-700
        rounded-xl p-6 text-center
        hover:shadow-md hover:-translate-y-1
        transition-all
      "
    >
      {/* Icon bubble */}
      <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-[#161b22] rounded-xl mb-4">
        <Icon className="text-cyan-400" size={32} />
      </div>

      {/* Title */}
      <h3 className="font-bold mb-2">{action.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {action.description}
      </p>

      {/* CTA */}
      <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
        Open
      </button>
    </div>
  );
};
