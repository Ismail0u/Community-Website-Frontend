const ProfileMetaDisplay = ({ selectedSkills, stack = null }) => {
  return (
    <div className="w-full space-y-6 text-center md:text-left">
      {/* STACK */}
      <div>
        <p className="text-sm font-medium mb-1">Stack</p>
        {stack ? (
          <span
            className="inline-block px-3 py-1 rounded-full text-sm
            bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] text-white"
          >
            {stack.name}
          </span>
        ) : (
          <span className="text-sm italic text-gray-400">
            No stack selected
          </span>
        )}
      </div>

      {/* SKILLS */}
      <div>
        <p className="text-sm font-medium mb-2">Skills</p>

        {selectedSkills.length === 0 ? (
          <p className="text-sm italic text-gray-400">No skills added</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {selectedSkills.map((skill) => (
              <span
                key={skill.id}
                className="px-2 py-1 rounded-md border text-sm text-center
                  bg-white dark:bg-[#697483]
                  text-[#161B22] dark:text-[#D9D9D9]"
              >
                {skill.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileMetaDisplay;
