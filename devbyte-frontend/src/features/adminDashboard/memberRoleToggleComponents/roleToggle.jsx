
// Used to dynamically style role badges (ADMIN vs USER)
export const getRoleBadgeStyles = (role) => ({
  ADMIN: 'bg-blue-600/20 text-blue-600 dark:text-blue-400',
  USER: 'bg-gray-500/20 text-gray-600 dark:text-gray-400',
}[role] || 'bg-gray-500/20 text-gray-400');

// RoleToggle Component A simple role switch UI used to toggle a user's role

export const RoleToggle = ({ isAdmin, onToggle, isLoading }) => (
  <button
    onClick={onToggle}
    disabled={isLoading}
    className={`relative w-14 h-7 rounded-full transition-colors ${
      isAdmin 
        ? 'bg-[#00aeff]' 
        : 'bg-gray-300 dark:bg-gray-600'
    } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
  >
    <span
      className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${
        isAdmin ? 'left-8' : 'left-1'
      }`}
    />
  </button>
);