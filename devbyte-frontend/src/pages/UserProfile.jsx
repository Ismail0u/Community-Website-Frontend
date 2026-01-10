import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from "@/features/user/Section";
import EditProfileModal from "@/features/user/EditProfileModal";
import { resetAuthState, signoutUser } from "@/redux/features/authSlice";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "@/redux/features/userSlice";
import ItemFormModal from "@/features/user/ItemFormModal";
import Settings from "@/features/user/Settings";
import { clearUserProfile } from "@/redux/features/userSlice";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";
import ProfileMetaDisplay from "@/features/user/ProfileMetaDisplay";
import ProfileMetaEditors from "@/features/user/ProfileMetaEditor";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector((state) => state.user);

  const [projects, setProjects] = useState([]);
  const [resources, setResources] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

  // open profile modal func
  const handleEditProfile = () => {
    setModalType("editProfile");
  };

  //handle edit func
  const handleUpdateProfile = async () => {
    try {
      await dispatch(fetchUserProfile());

      setModalType(null);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  // Fetch user data
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  if (loading) return <p>Loading user profile...</p>;
  if (!user) return <p>No user data found.</p>;

  // Open modal for Add/Edit
  const openModal = (type, item = null) => {
    console.log("Opening modal:", type, item);
    setModalType(type);
    setSelectedItem(item || null);
    setModalOpen(true);
  };

  // Save or update item
  const handleSaveItem = (item) => {
    if (!selectedItem) {
      item.id = crypto.randomUUID();
    }

    if (modalType === "project") {
      if (selectedItem) {
        setProjects((prev) => prev.map((p) => (p.id === item.id ? item : p)));
      } else {
        setProjects([...projects, item]);
      }
    } else if (modalType === "resource") {
      if (selectedItem) {
        setResources((prev) => prev.map((r) => (r.id === item.id ? item : r)));
      } else {
        setResources([...resources, item]);
      }
    }
    setModalOpen(false);
  };

  // Delete item
  const handleDeleteItem = (id, type) => {
    if (type === "project") {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } else if (type === "resource") {
      setResources((prev) => prev.filter((r) => r.id !== id));
    }
  };

  // logout func
  const handleLogout = () => {
    dispatch(signoutUser()).finally(() => {
      dispatch(resetAuthState()); //clear auth user
      dispatch(clearUserProfile()); //clear user profile
      navigate("/signup");
    });
  };

  return (
    <div className="max-w-6xl mx-auto min-h-screen py-10 px-4 sm:px-6">
      {/* Profile Info */}

      <div className="text-[#161B22] dark:text-[#D9D9D9] shadow-md p-6 sm:p-10 rounded-lg bg-white dark:bg-[#2A2F36]">
        {/* GRID — Avatar / User Info / Buttons */}
        <AnimatedWrapper>
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_auto] gap-10 items-start">
            {/* Avatar */}
            <div className="flex flex-col items-center  gap-4 ">
              {user.profilePicture ? (
                <img
                  src={
                    user.profilePicture
                      ? `${BASE_URL}/${user.profilePicture}`
                      : ""
                  }
                  alt={user.fullname}
                  className="w-24 h-24 rounded-full object-cover"
                  onError={(e) => (e.target.src = "")}
                />
              ) : (
                <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#00AEEF] to-[#6A5DFF] text-white text-3xl font-semibold">
                  {user.fullname
                    ? user.fullname
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                    : "U"}
                </div>
              )}
              {/* Name  */}

              <h1 className="text-2xl  font-semibold">{user.fullname}</h1>
              {/* skills and stack display */}
              <ProfileMetaDisplay
                selectedSkills={selectedSkills}
                setSelectedSkills={setSelectedSkills}
                stack={user.stack || null}
              />
            </div>
            {/* skills and stack editors */}
            <ProfileMetaEditors
              selectedSkills={selectedSkills}
              setSelectedSkills={setSelectedSkills}
            />
            {/* Buttons — MOBILE FIRST STACK */}
            <div className="flex flex-col md:flex-row gap-4 items-end justify-center md:justify-around">
              {user?.role === "ADMIN" && (
                <Button
                  onClick={() => navigate("/adminDashboard")}
                  className="bg-gradient-to-tr from-[#00AEEF] to-[#6A5DFF] text-white font-medium px-6 py-2 rounded-lg w-full sm:w-auto text-nowrap"
                >
                  Admin Mode
                </Button>
              )}
              <Button
                onClick={handleEditProfile}
                className="bg-gradient-to-tr from-[#00AEEF] to-[#6A5DFF] text-white font-medium px-6 py-2 rounded-lg w-full sm:w-auto text-nowrap"
              >
                Edit Profile
              </Button>

              <Button
                onClick={handleLogout}
                className="bg-gradient-to-tr from-[#00AEEF] to-[#6A5DFF] text-white font-medium px-6 py-2 rounded-lg w-full sm:w-auto"
              >
                Logout
              </Button>
            </div>
          </div>
        </AnimatedWrapper>

        {/* TABS */}
        <AnimatedWrapper>
          <div className="max-w-5xl mx-auto bg-white dark:bg-[#2A2F36] rounded-lg p-4 flex flex-wrap justify-center md:justify-around gap-3 mt-14 border-b border-gray-300 dark:border-gray-700">
            {["overview", "projects", "resources", "settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative capitalize px-3 py-1 font-medium transition-all 
              ${
                activeTab === tab
                  ? "text-[#6A5DFF] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-[#00AEEF] after:to-[#6A5DFF]"
                  : "text-gray-700 dark:text-gray-300 hover:text-[#6A5DFF]"
              }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </AnimatedWrapper>

        {/* CONTENT */}
        <div className="mt-10">
          {activeTab === "overview" && (
            <div className="space-y-10">
              <AnimatedWrapper className="delay">
                <Section
                  title="My Projects"
                  items={projects.slice(0, 3)}
                  buttonLabel="Add Project"
                  onButtonClick={() => openModal("project")}
                  onEdit={(item) => openModal("project", item)}
                  onDelete={(id) => handleDeleteItem(id, "project")}
                />
              </AnimatedWrapper>

              <AnimatedWrapper>
                <Section
                  title="My Resources"
                  items={resources.slice(0, 3)}
                  buttonLabel="Add Resource"
                  onButtonClick={() => openModal("resource")}
                  onEdit={(item) => openModal("resource", item)}
                  onDelete={(id) => handleDeleteItem(id, "resource")}
                />
              </AnimatedWrapper>

              <div className="bg-white dark:bg-[#2A2F36] rounded-lg p-6">
                <Settings />
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <AnimatedWrapper>
              <Section
                title="My Projects"
                items={projects}
                buttonLabel="Add Project"
                onButtonClick={() => openModal("project")}
                onEdit={(item) => openModal("project", item)}
                onDelete={(id) => handleDeleteItem(id, "project")}
              />
            </AnimatedWrapper>
          )}

          {activeTab === "resources" && (
            <AnimatedWrapper>
              <Section
                title="My Resources"
                items={resources}
                buttonLabel="Add Resource"
                onButtonClick={() => openModal("resource")}
                onEdit={(item) => openModal("resource", item)}
                onDelete={(id) => handleDeleteItem(id, "resource")}
              />
            </AnimatedWrapper>
          )}

          {activeTab === "settings" && (
            <div className="bg-white dark:bg-[#2A2F36] rounded-lg p-6">
              <Settings />
            </div>
          )}
        </div>
      </div>

      {/* MODALS */}
      {modalType === "editProfile" && (
        <EditProfileModal
          user={user}
          onClose={() => setModalType(null)}
          onSave={handleUpdateProfile}
        />
      )}

      {modalOpen && (
        <ItemFormModal
          existingItem={selectedItem}
          type={modalType}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveItem}
        />
      )}
    </div>
  );
};

export default UserProfile;
