import React from "react";
import { X, UploadIcon } from "lucide-react";
import { useFormHandler } from "@/hooks/useFormHandler";

const ProjectFormModal = ({ mode = "add", project = {}, onClose, onSave }) => {
  const { formData, handleChange, handleImageChange, handleSubmit } =
    useFormHandler(
      {
        projectName: project?.projectName || "",
        projectDescription: project?.projectDescription || "",
        projectLink: project?.projectLink || "",
        projectTags: project?.projectTags || "",
        image: project?.image || null,
      },
      onSave
    );

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-6 z-50">
      <div className="relative w-full max-w-lg bg-[#FFF] text-gray-900 dark:bg-[#161B22] dark:text-[#FFFF] rounded-xl overflow-y-auto max-h-[90vh] shadow-xl p-7">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
        >
          <X size={22} />
        </button>

        <h1 className="text-xl font-semibold mb-4">
          {mode === "edit" ? "Edit Project" : "Add New Project"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Enter project name (e.g. Recipe Sharing App)"
            className="w-full rounded-md p-3 bg-gray-100 dark:bg-[#0D1117] focus:outline-none"
          />

          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Write a short description about your project..."
            rows={4}
            className="w-full rounded-md p-3 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-[#0D1117] focus:outline-none"
          />

          <input
            type="text"
            name="projectLink"
            value={formData.projectLink}
            onChange={handleChange}
            placeholder="Enter live demo or GitHub link"
            className="w-full rounded-md p-3 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-[#0D1117] focus:outline-none"
          />

          <input
            type="text"
            name="projectTags"
            value={formData.projectTags}
            onChange={handleChange}
            placeholder="e.g. React, Tailwind, Node.js"
            className="w-full rounded-md p-3 bg-gray-100 dark:bg-[#0D1117] dark:text-[#D9D9D9] focus:outline-none"
          />

          <label className="w-36 h-36 flex flex-col items-center justify-start rounded-lg cursor-pointer bg-gray-100 dark:bg-[#1F2937] transition">
            {formData.image ? (
              <img
                src={formData.image}
                alt="preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <>
                <UploadIcon className="w-16 h-16 text-gray-400" />
                <p className="text-sm text-gray-500 mt-4">
                  Upload Project Image
                </p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

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
              {mode === "edit" ? "Save Changes" : "Save Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectFormModal;
