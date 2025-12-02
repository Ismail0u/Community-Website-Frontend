import Button from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";
import {
  setNotifications,
  setProfileVisibility,
} from "@/redux/features/userSlice";
import {
  deleteUserProfile,
  changeUserPassword,
} from "@/redux/features/userSlice";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notifications, profileVisibility, loading, error } = useSelector(
    (state) => state.user
  );
  // change user password func
  const handleChangePassword = async (e) => {
    e.preventDefault();
    const result = await dispatch(
      changeUserPassword({ newPassword, currentPassword })
    );
    if (result.type === changeUserPassword.fulfilled.type)
      alert("Password changed succesfully");
    setCurrentPassword("");
    setNewPassword("");
  };

  // delete user account func
  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete this?")) {
      const result = await dispatch(deleteUserProfile());
      if (result.type === deleteUserProfile.fulfilled.type) navigate("/");
    }
  };

  return (
    <AnimatedWrapper>
      <div className="w-full">
        <div className="w-full mx-auto p-4 sm:p-6 border border-zinc-700 rounded-lg">
          <h1 className="text-2xl text-center font-semibold mb-6">Settings</h1>

          {/* Change Password */}
          <div className="py-6 border-b">
            <h2 className="text-base font-medium mb-1">Change Password</h2>
            <p className="text-sm text-zinc-400 mb-4">
              Choose a new password for your account
            </p>

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div className="w-full">
                <label className="block  text-sm font-medium mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                    className=" w-full bg-transparent border border-zinc-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700"
                  >
                    {show ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium mb-2 ">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className=" w-full bg-transparent border border-zinc-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700"
                  >
                    {show ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button
                type="submit"
                disabled={loading}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 border-0 rounded-md text-sm text-white w-full md:w-auto"
              >
                {loading ? "Changing..." : "Change Password"}
              </Button>
            </form>
          </div>

          {/* Notifications */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-6 border-b">
            <div className="flex-1">
              <h2 className="text-base font-medium mb-1">Notifications</h2>
              <p className="text-sm text-zinc-400">
                Control email and in-app notifications
              </p>
            </div>

            <button
              onClick={() => dispatch(setNotifications(!notifications))}
              className={`relative w-12 h-6 rounded-full transition-colors shrink-0 ${
                notifications ? "bg-blue-500" : "bg-zinc-700"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  notifications ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Profile Visibility */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-6 border-b">
            <div className="flex-1">
              <h2 className="text-base font-medium mb-1">Profile Visibility</h2>
              <p className="text-sm text-zinc-400">
                Choose who can see your profile
              </p>
            </div>

            <select
              value={profileVisibility}
              onChange={(e) => dispatch(setProfileVisibility(e.target.value))}
              className="appearance-none bg-white dark:bg-[#0D1117]
            border border-zinc-500 rounded-md px-3 py-2 text-sm w-full md:w-auto
            cursor-pointer text-black dark:text-white"
            >
              <option className="text-black" value="Public">
                Public
              </option>
              <option className="text-black" value="Private">
                Private
              </option>
              <option className="text-black" value="Friends">
                Friends Only
              </option>
            </select>
          </div>

          {/* Delete Account */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-6 text-red-700">
            <div className="flex-1">
              <h2 className="text-base font-medium mb-1">Delete Account</h2>
              <p className="text-sm">
                Permanently remove your account and data
              </p>
            </div>

            <button
              onClick={handleDeleteAccount}
              className="px-5 py-2 border border-red-800 rounded-md w-full md:w-auto"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default Settings;
