import React, { useState } from 'react';
import { Shield, User } from 'lucide-react';
import { RoleToggle , getRoleBadgeStyles } from './roleToggle';

// Member Card component for Mobile Views
export const MemberCardMobile = ({ member, onRoleToggle }) => {
  const [isToggling, setIsToggling] = useState(false);
  const isAdmin = member.role === 'ADMIN';

  const handleToggle = async () => {
    setIsToggling(true);
    await onRoleToggle(member.id, isAdmin ? 'USER' : 'ADMIN');
    setIsToggling(false);
  };

  return (
    <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-xl p-4 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img
            src={member.profilePicture || `https://ui-avatars.com/api/?name=${member.fullname}`}
            alt={member.fullname}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">{member.fullname}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{member.email}</p>
          </div>
        </div>
        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${getRoleBadgeStyles(member.role)}`}>
          {isAdmin ? <Shield size={12} /> : <User size={12} />}
          {member.role}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {(member.skills || []).map((skill, idx) => (
          <span key={idx} className="px-2 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-md text-xs font-medium">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">{isAdmin ? 'Admin' : 'User'}</span>
          <RoleToggle isAdmin={isAdmin} onToggle={handleToggle} isLoading={isToggling} />
        </div>
      </div>
    </div>
  );
};