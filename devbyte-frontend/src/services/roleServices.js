import apiFetch from './api';

// Roles API Service

export const rolesService = {
  /**
   * Assign a role to a user
   * @param {string} userId - User UUID
   * @param {string} role - USER or ADMIN
   * @returns {Promise<{success: boolean, message: string, user: Object}>}
   */
  assignRole: async (userId, role) => {
    return apiFetch('/roles/assign', {
      method: 'POST',
      body: JSON.stringify({ userId, role }),
    });
  },
};
