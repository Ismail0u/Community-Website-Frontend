import { useState } from "react";
import { Modal } from "@/components/forms/modal";
import { TagsInput } from "@/components/forms/inputs";
import { Loader2 } from "lucide-react";
// ==================== TAGS MANAGEMENT MODAL ====================

// This is the main component for the Tag Management popup (modal).
// It lets users edit lists of items like skills, stacks, event types, or blog categories.
export const TagsManagementModal = ({ isOpen, onClose, type, existingTags, onSave, onBatchCreate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState(
    existingTags.map(tag => typeof tag === 'object' ? tag.name : tag)
  );

  const handleSave = async () => {
    setIsLoading(true);
    if (type === 'skills' || type === 'techs') {
      const newTags = tags.filter(tag => 
        !existingTags.some(existing => 
          (typeof existing === 'object' ? existing.name : existing) === tag
        )
      );
      
      if (onBatchCreate && newTags.length > 0) {
        await onBatchCreate(newTags.map(name => ({ name })));
      }
    } else {
      onSave(tags);
    }
    setIsLoading(false);
    onClose();
  };

  // Function to get the right title for the popup
  const getTitle = () => {
    switch(type) {
      case 'skills': return 'Manage Skills';
      case 'tags': return 'Manage tags';
      case 'events': return 'Manage Event Types';
      case 'blogs': return 'Manage Blog Categories';
      default: return 'Manage Tags';
    }
  };

  // Function to get the right label for the input box
  const getLabel = () => {
    switch(type) {
      case 'skills': return 'Skills';
      case 'Stacks': return 'Stacks';
      case 'events': return 'Event Types';
      case 'blogs': return 'Blog Categories';
      default: return 'Tags';
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={getTitle()} className="w-1/3">
      <div className="space-y-4">
        {/* The component where the user can type and manage the tags. */}
        <TagsInput
          label={getLabel()}
          tags={tags}
          onChange={setTags}
        />

        <div className="flex gap-3 pt-4">
          <button
            onClick={onClose}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading && <Loader2 size={18} className="animate-spin" />}
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </Modal>
  );
};