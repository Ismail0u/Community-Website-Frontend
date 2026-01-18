import { Github, Linkedin, Twitter, X, MapPin, Calendar, Award, TrendingUp } from "lucide-react";
import { getMemberAvatar } from "@/services/membersService";

// ============= MEMBER MODAL =============
const MemberModal = ({ member, isOpen, onClose }) => {

  if (!isOpen || !member) return null;

  const memberName = member.fullname || member.name || 'Unknown';
  const memberAvatar = getMemberAvatar(member);
  const memberStack = member.stack || 'Developer';
  const memberBio = member.bio || 'No bio available';
  const joinedDate = member.createdAt
    ? new Date(member.createdAt).toLocaleDateString()
    : "—";
  
  const memberSkills = Array.isArray(member.skills) 
    ? member.skills.map(skill => typeof skill === 'string' ? skill : skill.name)
    : [];


  return (
    <div
      className="fixed inset-0 bg-white/70 dark:bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-1"
      onClick={onClose}
    >
      <div
        className="bg-[#fbfbfb] dark:bg-[#0D1117] border border-gray-300 dark:border-[#30363D] rounded-lg max-w-2xl w-full sm:max-w-2x max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gradient-to-r from-[#00AEEF] to-[#6A5DFF] p-2 sm:p-6 rounded-t-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="flex items-center gap-6">
            <img
              src={memberAvatar}
              alt={memberName}
              className="w-24 h-24 rounded-full border-4 border-white/20"
            />
            <div>
              <h2 className="text-white text-2xl font-bold mb-1">{memberName}</h2>
              <p className="text-white/90 text-lg mb-2">{memberStack}</p>
            </div>
          </div>
        </div>

        <div className="p-2 space-y-2 sm:p-6 sm:space-y-6">
          <div>
            <h3 className="text-black dark:text-white text-lg font-semibold mb-2">About</h3>
            <p className="text-gray-800 dark:text-[#8B949E] text-sm leading-relaxed">{memberBio}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-[#161B22] border border-gray-200 dark:border-[#30363D] rounded-lg p-2 sm:p-4 text-center">
              <div className="flex justify-center mb-2">
                <Award className="text-[#00AEEF]" size={20} />
              </div>
              <div className="text-black dark:text-white text-xl font-bold">{member.projectsCompleted}</div>
              <div className="text-gray-800 dark:text-[#8B949E] text-xs">Projects</div>
            </div>
            <div className="bg-gray-50 dark:bg-[#161B22] border border-gray-200 dark:border-[#30363D] rounded-lg p-2 sm:p-4 text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="text-[#6A5DFF]" size={20} />
              </div>
              <div className="text-black dark:text-white text-xl font-bold">{member.contributions}</div>
              <div className="text-gray-800 dark:text-[#8B949E] text-xs">Contributions</div>
            </div>
            <div className="bg-gray-50 dark:bg-[#161B22] border border-gray-200 dark:border-[#30363D] rounded-lg p-2 sm:p-4 text-center">
              <div className="flex justify-center mb-2">
                <Calendar className="text-[#58A6FF]" size={20} />
              </div>
              <div className="text-black dark:text-white text-xs md:text-xl font-bold">{joinedDate}</div>
              <div className="text-gray-800 dark:text-[#8B949E] text-xs">Joined</div>
            </div>
          </div>
            {/*Skills */}
          <div>
            <h3 className="text-black dark:text-white text-lg font-semibold mb-3">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {memberSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-50 dark:bg-[#161B22] text-[#58A6FF] text-sm px-3 py-1.5 rounded-full
                           border border-gray-200 dark:border-[#30363D] hover:border-[#00AEEF] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
                {/**Social Links */}
          <div >
            <h3 className="text-black dark:text-white text-lg font-semibold mb-3">Connect</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              {member.social?.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-50 dark:bg-[#161B22] text-gray-700 dark:text-[#8B949E] px-4 py-2 rounded-lg
                         border border-gray-200 dark:border-[#30363D] hover:border-[#00AEEF] hover:text-black dark:hover:text-white transition-all"
              >
                <Github size={20} />
                <span className="text-sm hidden sm:block">GitHub</span>
              </a>
              )}
              {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-50 dark:bg-[#161B22] text-gray-700 dark:text-[#8B949E]  px-4 py-2 rounded-lg
                         border border-gray-200 dark:border-[#30363D] hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all"
              >
                <Linkedin size={20} />
                <span className="text-sm hidden sm:block">LinkedIn</span>
              </a>
              )}
              {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-50 dark:bg-[#161B22] text-gray-700 dark:text-[#8B949E]  px-4 py-2 rounded-lg
                         border border-gray-200 dark:border-[#30363D] hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-all"
              >
                <Twitter size={20} />
                <span className="text-sm hidden sm:block">Twitter</span>
              </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberModal;