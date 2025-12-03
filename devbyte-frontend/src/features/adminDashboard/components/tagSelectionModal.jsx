import { Modal } from "@/components/forms/modal";
import { Tag, Calendar , FileText , Code, TagIcon } from "lucide-react";

// ==================== SELECTION MODAL ====================
export const SelectionModal = ({ isOpen, onClose, onSelect }) => {
    // array of the different tags 
  const options = [
    { id: 'skills', icon: Code, label: 'Skills', description: 'Manage technical skills ' },
    { id: 'tags', icon: TagIcon, label: 'Stacks', description: 'Manage technical tech stacks' },
    { id: 'events', icon: Calendar, label: 'Event Types', description: 'Manage event categories' },
    { id: 'blogs', icon: FileText, label: 'Blog Categories', description: 'Manage blog post categories' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="What do you want to add?">
      <div className="grid grid-cols-1 gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              onSelect(option.id);
              onClose();
            }}
            className="flex items-start gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-700 hover:bg-cyan-500/5 transition-all text-left"
          >
            <div className="p-3 bg-blue-500/30 rounded-lg">
              <option.icon className="text-[#00AEEF]" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{option.label}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{option.description}</p>
            </div>
          </button>
        ))}
      </div>
    </Modal>
  );
};