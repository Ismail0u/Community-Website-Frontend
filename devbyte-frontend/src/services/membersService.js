import apiFetch from './api';

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