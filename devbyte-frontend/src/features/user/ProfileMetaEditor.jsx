import { Plus, X, PencilIcon } from "lucide-react";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { useSelector } from "react-redux";

const ProfileMetaEditors = ({ selectedSkills, setSelectedSkills }) => {
  const [allSkills, setAllSkills] = useState([]);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [stackOpen, setStackOpen] = useState(false);

  const [loadingSkills, setLoadingSkills] = useState(false);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user.skills) {
      setSelectedSkills(user.skills);
    }
  }, [user, setSelectedSkills]);
  //handle fetch all skills
  const fetchSkills = async () => {
    if (allSkills.length > 0) return;
    try {
      setLoadingSkills(true);
      const res = await api.get("/v1/skills");
      console.log("fetched skills:", res);

      setAllSkills(res.data.data);
    } catch (error) {
      console.error("Failed to fetch skills:", error.message);
    } finally {
      setLoadingSkills(false);
    }
  };

  //toggle skills func
  const toggleSkill = async (skill) => {
    const isSelected = selectedSkills.some((s) => s.id === skill.id);

    if (isSelected) {
      await api.delete(`/v1/users/me/skills/${skill.id}`);
      setSelectedSkills((prev) => prev.filter((s) => s.id !== skill.id));
    } else {
      //add skill
      await api.post("/v1/users/me/skills", { skillId: skill.id });
      setSelectedSkills((prev) => [...prev, skill]);
    }
  };

  const stacksPlaceholder = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
  ];

  return (
    <div className="space-y-6">
      {/* STACK EDITOR */}
      <div>
        <button
          onClick={() => setStackOpen((v) => !v)}
          className="flex items-center gap-2 text-sm text-[#6A5DFF]"
        >
          <PencilIcon size={14} />
          {stackOpen ? "Close stack editor" : "Edit stack"}
        </button>

        {stackOpen && (
          <div className="mt-2 rounded-lg border overflow-hidden">
            {stacksPlaceholder.map((stack) => (
              <button
                key={stack}
                className="w-full px-3 py-2 text-left text-sm
                  bg-white dark:bg-[#2A2F36]
                  hover:bg-gray-100 dark:hover:bg-[#434b55]"
              >
                {stack}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* SKILLS EDITOR */}
      <div>
        <button
          onClick={() => {
            fetchSkills();
            setSkillsOpen((v) => !v);
          }}
          className="flex items-center gap-2 text-sm text-[#6A5DFF]"
        >
          <PencilIcon size={14} />
          {skillsOpen ? "Close skills editor" : "Edit skills"}
        </button>

        {skillsOpen && (
          <div className="mt-2 max-h-56 rounded-lg border overflow-y-auto">
            {allSkills.map((skill) => {
              const isSelected = selectedSkills.some((s) => s.id === skill.id);

              return (
                <div
                  key={skill.id}
                  className="px-3 py-2 flex justify-between items-center text-sm
                    bg-white dark:bg-[#434b55]
                    hover:bg-gray-100 dark:hover:bg-[#697483]"
                >
                  {skill.name}
                  <button onClick={() => toggleSkill(skill)}>
                    {isSelected ? <X size={14} /> : <Plus size={14} />}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileMetaEditors;
