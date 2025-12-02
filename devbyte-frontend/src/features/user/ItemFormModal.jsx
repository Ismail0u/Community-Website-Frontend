import React, { useEffect } from "react";
import { X, UploadIcon } from "lucide-react";
import { useFormHandler } from "@/hooks/useFormHandler";

const ItemFormModal = ({ existingItem, type, onClose, onSave }) => {
  const isEditing = Boolean(existingItem);

  const {
    formData,
    setFormData,
    handleChange,
    handleImageChange,
    handleSubmit,
  } = useFormHandler(
    {
      title: "",
      description: "",
      link: "",
      tags: "",
      image: null,
    },
    (data) => {
      const newItem = {
        id: existingItem ? existingItem.id : Date.now(),
        title: data.title,
        description: data.description,
        link: data.link,
        tags: data.tags,
        image: data.image,
      };
      onSave(newItem);
    }
  );

  // Prefill data if editing
  useEffect(() => {
    if (existingItem) {
      setFormData({
        title: existingItem.title || "",
        description: existingItem.description || existingItem.body || "",
        link: existingItem.link || "",
        tags: existingItem.tags || "",
        image: existingItem.image || null,
      });
    }
  }, [existingItem, setFormData]);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-6 z-50">
      <div className="relative w-full max-w-lg bg-[#FFF] text-gray-900 dark:bg-[#161B22] dark:text-[#FFFF] rounded-xl overflow-y-auto max-h-[90vh] shadow-xl p-7">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
        >
          <X size={22} />
        </button>

        <h1 className="text-xl font-semibold mb-4">
          {isEditing ? `Edit ${type}` : `Add New ${type}`}
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder={type === "project" ? "Project Name" : "Resource Title"}
            className="w-full rounded-md p-3 bg-gray-100 dark:bg-[#0D1117] focus:outline-none"
          />

          {/* Description */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder={
              type === "project"
                ? "Project Description"
                : "Resource Description"
            }
            rows={4}
            className="w-full rounded-md p-3 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-[#0D1117] focus:outline-none"
          />

          {/* Link */}
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder={
              type === "project"
                ? "Project Link (GitHub/Live Demo)"
                : "Resource Link"
            }
            className="w-full rounded-md p-3 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-[#0D1117] focus:outline-none"
          />

          {/* Tags */}
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags (comma separated, e.g. React, Node.js)"
            className="w-full rounded-md p-3 bg-gray-100 dark:bg-[#0D1117] focus:outline-none"
          />

          {/* Image Upload */}
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
                  Upload {type === "project" ? "Project" : "Resource"} Image
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
              {isEditing ? "Save Changes" : `Save ${type}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemFormModal;
