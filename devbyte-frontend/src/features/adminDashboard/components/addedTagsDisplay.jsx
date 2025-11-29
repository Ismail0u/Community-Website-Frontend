import { Trash2 } from "lucide-react";

// ==================== ADDED TAGS DISPLAY ====================
export const AddedTagsDisplay = ({ type, tags, onRemove }) => {
  const getTitle = () => {
    switch(type) {
      case 'skills': return 'Added Skills';
      case 'stacks': return 'Added Stacks';
      case 'events': return 'Added Event Types';
      case 'blogs': return 'Added Blog Categories';
      default: return 'Added Items';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{getTitle()}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{tags.length} items</span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {tags.length === 0 ? (
          <div className="col-span-full py-12 text-center text-gray-400">
            No items added yet
          </div>
        ) : (
          tags.map((tag, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
            >
              <span className="font-medium text-gray-900 dark:text-white">{tag}</span>
              <button
                onClick={() => onRemove(tag)}
                className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};