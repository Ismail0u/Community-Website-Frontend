import React from "react";
import { X, Camera } from "lucide-react";
import { useFormHandler } from "@/hooks/useFormHandler";

const EditProfileModal = ({ user, onClose, onSave }) => {
  const STORAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

  const {
    formData,
    handleChange,
    handleProfileUpdate,
    handleUserProfileSubmit,
  } = useFormHandler(
    {
      fullname: user?.fullname || "",

      email: user?.email || "",

      profile_picture: user?.profile_picture || "",
    },
    onSave
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div
        className="
        w-full max-w-lg rounded-2xl shadow-xl relative max-h-[100vh] overflow-y-auto
        dark:bg-[#2A2F36] text-gray-800 bg-white dark:text-gray-100
      "
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 dark:text-gray-400 dark:hover:text-gray-700 text-gray-600 hover:text-gray-900"
        >
          <X size={20} />
        </button>

        {/* Profile photo */}
        <div className="flex flex-col items-center mt-8">
          <label
            htmlFor="photo-upload"
            className="
      relative w-24 h-24 rounded-full border-2 
      border-gray-600 dark:border-gray-300 
      flex items-center justify-center 
      bg-gray-200 dark:bg-gray-700 
      overflow-hidden cursor-pointer
    "
          >
            {formData.profile_picture ? (
              <img
                src={
                  typeof formData.profile_picture === "string" &&
                  formData.profile_picture.startsWith("data:")
                    ? formData.profile_picture // New upload preview (base64)
                    : `${STORAGE_BASE_URL}/${
                        formData.profile_picture
                      }?t=${Date.now()}` // Existing image from server
                }
                alt="Profile"
                className="w-full bg-slate-700 h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "";
                }}
              />
            ) : (
              <span className="text-sm text-gray-600 dark:text-gray-300 absolute inset-0 flex items-center justify-center">
                {formData?.fullname
                  ? user.fullname
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                  : "P"}
              </span>
            )}
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handleProfileUpdate}
              className="hidden"
            />
          </label>

          <p className="text-xs mt-2 dark:text-gray-400 text-gray-500">
            Change Photo
          </p>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Edit Profile
          </h2>

          {/* Form */}
          <form onSubmit={handleUserProfileSubmit} className="space-y-4">
            {[
              { name: "fullname", label: "Full name" },

              { name: "email", label: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm mb-1 font-medium">
                  {field.label}
                </label>
                {
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="
                      w-full rounded-lg p-2 border focus:ring-1  focus:outline-none
                     bg-gray-100 dark:bg-[#0D1117] dark:text-[#D9D9D9]
                    "
                  />
                }
              </div>
            ))}

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-gray-500 text-gray-400 hover:bg-gray-800 dark:text-gray-100 dark:border-gray-300 "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-gradient-to-tr from-[#00AEEF] to-[#6A5DFF] text-white font-medium hover:opacity-90"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
