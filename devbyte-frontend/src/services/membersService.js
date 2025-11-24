import apiFetch from './api';

export const membersService = {
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