import { Github, Linkedin, Twitter } from "lucide-react";

// MEMBERS Cards 

const MemberCard = ({ member, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-[#161B22] border border-[#d8d7d7] dark:border-[#30363D] rounded-lg p-6 cursor-pointer
                 transform transition-all duration-300 hover:scale-105 hover:border-[#00AEEF]
                 hover:shadow-lg hover:shadow-[#00AEEF]/20 group"
    >
      <div className="flex justify-center mb-4">
        <div className="relative">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-24 h-24 rounded-full border-2 border-[#ffffff] dark:border-[#30363D]
                     group-hover:border-[#00AEEF] transition-colors duration-300"
          />
        </div>
      </div>

      <h3 className="text-black dark:text-white text-lg font-bold text-center mb-2
                   group-hover:text-[#00AEEF] transition-colors duration-300">
        {member.name}
      </h3>

      <h4 className="text-gray-900 dark:text-gray-50 text-sm text-center mb-3">{member.role}</h4>

      <p className="text-gray-500 dark:text-gray-300 text-sm text-center mb-4 line-clamp-2">
        {member.bio}
      </p>
        {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {member.skills.slice(0, 3).map((skill, index) => (
          <span
            key={index}
            className="bg-gray-50 dark:bg-[#161B22] text-[#58A6FF] text-xs px-2 py-1 rounded-full
                     border border-gray-200 dark:border-[#30363D] group-hover:border-[#00AEEF] transition-colors"
          >
            {skill}
          </span>
        ))}
        {member.skills.length > 3 && (
          <span className="text-gray-600 dark:text-gray-400 text-xs px-1 py-1">
            +{member.skills.length - 3}
          </span>
        )}
      </div>

      <div className="flex justify-center gap-4 pt-4 border-t border-[#60666f]">
        <a
          href={member.social.github}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B949E] hover:text-black dark:hover:text-white transition-colors"
        >
          <Github size={18} />
        </a>
        <a
          href={member.social.linkedin}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B949E] hover:text-[#0A66C2] transition-colors"
        >
          <Linkedin size={18} />
        </a>
        <a
          href={member.social.twitter}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B949E] hover:text-[#1DA1F2] transition-colors"
        >
          <Twitter size={18} />
        </a>
      </div>
    </div>
  );
};

export default MemberCard;