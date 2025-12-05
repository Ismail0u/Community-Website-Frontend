import React from "react";
import { X } from "lucide-react";
import { useFormHandler } from "@/hooks/useFormHandler";

const AddResourcesModal = ({ onClose, onSave, user }) => {
  const { formData, handleChange, handleSubmit } = useFormHandler(
    {
      resourceName: user?.resourceName || "",
      resourceDescription: user?.resourceDescription || "",
      resourceUrl: user?.resourceUrl || "",
      resorceCategory: user?.resorceCategory || "",
    },
    onSave
  );

  return (
    <div className="inset-0 bg-black/50 flex justify-center items-center p-7 fixed">
      <div className="relative w-full max-w-lg bg-[#FFF] text-gray-900 dark:bg-[#161B22] dark:text-[#FFFF] rounded-xl overflow-y-auto max-h-[90vh] shadow-xl p-7">
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
        >
          <X size={22} />
        </button>

        <h1 className="text-xl font-semibold mb-4">Add New Resource</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Resource name */}
          <input
            type="text"
            name="resourceName"
            value={formData.resourceName}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-100 dark:bg-[#0D1117]  focus:outline-none p-3"
          />

          {/* resource description */}
          <textarea
            name="resourceDescription"
            value={formData.resourceDescription}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-md bg-gray-100 dark:bg-[#0D1117]  focus:outline-none p-3"
          />

          {/* resource category */}
          <input
            type="text"
            name="resourceDescription"
            value={formData.resourceDescription}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-100 dark:bg-[#0D1117]  focus:outline-none p-3"
          />
          {/* resource category */}
          <input
            type="text"
            name="resourceUrl"
            value={formData.resourceUrl}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-100 dark:bg-[#0D1117]  focus:outline-none p-3"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-md border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-gradient-to-tr from-[#00AEEF] to-[#6A5DFF] text-white font-medium"
            >
              Add Resource
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddResourcesModal;
