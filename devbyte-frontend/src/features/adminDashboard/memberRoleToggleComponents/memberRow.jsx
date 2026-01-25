import React, { useState } from 'react';
import { Shield, User } from 'lucide-react';
import { RoleToggle , getRoleBadgeStyles } from './roleToggle';
import { getMemberAvatar } from '@/services/membersService';


// Member Row component for Desktop View
export const MemberRowDesktop = ({ member, onRoleToggle }) => {
  const [isToggling, setIsToggling] = useState(false);
  const isAdmin = member.role === 'ADMIN';
  const memberAvatar = getMemberAvatar(member);

  const handleToggle = async () => {
    setIsToggling(true);
    await onRoleToggle(member.id, isAdmin ? 'USER' : 'ADMIN');
    setIsToggling(false);
  };

  // for member skills as arrays
  const memberSkills = Array.isArray(member.skills)
    ? member.skills.map(skill => 
        typeof skill === 'string' ? skill : skill.name
      )
    : [];

  return (
    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/40">
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <img
            src={memberAvatar}
            alt={member.fullname}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">{member.fullname}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{member.email}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex flex-wrap gap-1.5">
          {memberSkills.length > 0 ? (
            memberSkills.slice(0, 3).map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-md text-xs font-medium" >
                {skill}
              </span>
            ))
          ) : (
            <span className="text-xs text-gray-400 dark:text-gray-500">
              No skills
            </span>
          )}
          {memberSkills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium">
              +{memberSkills.length - 3}
            </span>
          )}
        </div>
      </td>
      <td className="py-4 px-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${getRoleBadgeStyles(member.role)}`}>
          {isAdmin ? <Shield size={12} /> : <User size={12} />}
          {member.role}
        </span>
      </td>
      <td className="py-4 px-4">
        <RoleToggle isAdmin={isAdmin} onToggle={handleToggle} isLoading={isToggling} />
      </td>
    </tr>
  );
};