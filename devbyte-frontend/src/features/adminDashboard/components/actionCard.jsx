import React from "react";
import { useState } from "react";
import { AddProjectModal } from "@/features/projects/AddProjectModal";
import { AddBlogModal } from "@/components/Blogs/AddBlogModal";
import { AddEventModal } from "@/components/AddEventsModal";
import { useNavigate } from "react-router-dom";

// this card display actions for CTA : on the card , we have the icon , the title , a brief descrpition
// and a Call To Action button


export const ActionCard = ({ action }) => {
    const Icon = action.icon;
    const [activeModal, setActiveModal] = useState(null);
    const navigate = useNavigate();


  return (
    <div>
    <div
      className="
        bg-white dark:bg-[#161b22]
        border border-gray-200 dark:border-gray-700
        rounded-xl p-2 sm:p-4 text-center
        hover:shadow-md hover:-translate-y-1
        transition-all
        w-40 sm:w-5/6 sm:max-w-none mx-auto
      "
    >
      {/* Icon bubble */}
      <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-[#161b22] rounded-xl mb-4">
        <Icon className="text-[#00aeff]" size={32} />
      </div>

      {/* Title */}
      <h3 className="font-bold mb-2">{action.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {action.description}
      </p>

      {/* CTA */}
      <button key={action.id}  
      onClick={() => {
        if (action.id === "manage-member") {
          navigate("/membersList");  // ← ta route pour MemberListPage
        } else {
          setActiveModal(action.id);
        }
      }}
            className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
        Open
      </button>
    </div>

           {/* Modals */}
        <AddProjectModal 
          isOpen={activeModal === 'add-project'} 
          onClose={() => setActiveModal(null)} 
        />
        <AddEventModal 
          isOpen={activeModal === 'add-event'} 
          onClose={() => setActiveModal(null)} 
        />
        <AddBlogModal 
          isOpen={activeModal === 'create-post'} 
          onClose={() => setActiveModal(null)} 
        />
    </div>
  );
};
