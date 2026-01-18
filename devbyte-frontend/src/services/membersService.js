import apiFetch from './api';
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

// a default avatar 
const DEFAULT_AVATAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s";

// get a member avatr 
export const getMemberAvatar = (member) => {
  if (!member) return DEFAULT_AVATAR;

  const picture = member.profilePicture || member.profile_picture || member.avatar;
  if (!picture) return DEFAULT_AVATAR;

  if (picture.startsWith("http")) return picture;

  const baseUrl = IMAGE_BASE_URL?.replace(/\/$/, "") || "";
  const cleanPath = picture.replace(/^\//, "");

  return `${baseUrl}/${cleanPath}`;
};

export const membersService = {
  /**
   * Get all users with pagination (Admin only)
   * GET /api/v1/users?page=1&pageSize=10
   */
  getAllUsers: async (page = 1, pageSize = 10) => {
    return apiFetch(`/users?page=${page}&pageSize=${pageSize}`);
  },

  /**
   * Get user profile
   * GET /api/v1/users/profile
   */
  getProfile: async () => {
    return apiFetch('/users/profile');
  },

  /**
   * Delete account
   * DELETE /api/v1/users/account
   */
  deleteAccount: async () => {
    return apiFetch('/users/account', {
      method: 'DELETE',
    });
  },
}