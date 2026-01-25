import { Trash2, Loader2 } from "lucide-react";

// ==================== ADDED TAGS DISPLAY ====================
export const AddedTagsDisplay = ({ type, tags, onRemove, isLoading }) => {
  const getTitle = () => {
    switch(type) {
      case 'skills': return 'Added Skills';
      case 'stacks': return 'Added Stacks';
      case 'events': return 'Added Event Types';
      case 'blogs': return 'Added Blog Categories';
      default: return 'Added Items';
    }
  };

  const getDisplayName = (tag) => {
    if (typeof tag === 'object' && tag !== null) {
      return tag.name || tag.title || tag.label || 'Unknown';
    }
    return tag;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 size={32} className="animate-spin text-cyan-500" />
      </div>
    );
  }

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
              key={tag.id || idx}
              className="flex items-center justify-between p-3 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
            >
              <span className="font-medium text-gray-900 dark:text-white truncate">
                {getDisplayName(tag)}
              </span>
              <button
                onClick={() => onRemove(tag)}
                className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded transition-colors flex-shrink-0"
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