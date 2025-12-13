import React from "react";
import Button from "@/components/ui/Button";
import { PlusIcon } from "lucide-react";

const Section = ({
  title,
  items = [],
  buttonLabel,
  onButtonClick,
  onEdit,
  onDelete,
  onView,
  emptyTitle = "Nothing here yet",
  emptySubTitle = "Get started by addding your first item",
}) => {
  return (
    <div className="mb-10 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 mb-6">
        <h1 className="text-xl font-semibold text-center md:text-left">
          {title}
        </h1>

        {buttonLabel && (
          <Button
            onClick={onButtonClick}
            className="bg-gradient-to-tr from-[#00AEEF] to-[#6A5DFF] text-white w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2 rounded-lg"
          >
            <PlusIcon size={14} />
            <span>{buttonLabel}</span>
          </Button>
        )}
      </div>

      {/* Items Grid */}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-[#fafafa] dark:bg-[#161B22] rounded-lg overflow-hidden shadow-sm"
            >
              {/* Image */}
              <img
                src={item.image || "/placeholder.webp"}
                alt={item.title}
                className="w-full h-44 object-cover"
                onError={(e) => (e.target.src = "/placeholder.webp")}
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-medium">{item.title}</h2>
                <p className="text-sm mt-1 flex-grow">
                  {item.description || item.body || "No  description provided"}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-4">
                  {onView && (
                    <button
                      onClick={() => onView(item)}
                      className="bg-gray-500 py-1 px-4 rounded-md text-white text-sm"
                    >
                      View
                    </button>
                  )}
                  {onEdit && (
                    <button
                      onClick={() => onEdit(item)}
                      className="bg-gradient-to-tr from-[#00AEEF] to-[#6A5DFF] py-1 px-4 rounded-md text-white text-sm"
                    >
                      Edit
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(item.id)}
                      className="bg-red-500 py-1 px-4 rounded-md text-white text-sm"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-10">
          {/* <Inbox className="w-10 h-10 text-gray-400 mb-4" /> */}

          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {emptyTitle}
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4">
            {emptySubTitle}
          </p>
        </div>
      )}
    </div>
  );
};

export default Section;
