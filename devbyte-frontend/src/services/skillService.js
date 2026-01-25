import apiFetch from './api';

/**
 * Skills Service
 */

export const skillsService = {
  /**
   * Get All skills with a pagination
   * GET /api/v1/skills?page=1&pageSize=10
   */
  getAllSkills: async (page = 1, pageSize = 10) => {
    return apiFetch(`/skills?page=${page}&pageSize=${pageSize}`);
  },

  /**
   * Get a skill by his ID
   * GET /api/v1/skills/{id}
   */
  getSkillById: async (id) => {
    return apiFetch(`/skills/${id}`);
  },

  /**
   * Create a skill 
   * POST /api/v1/skills
   */
  createSkill: async (data) => {
    return apiFetch('/skills', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Update a skill
   * PATCH /api/v1/skills/{id}
   */
  updateSkill: async (id, data) => {
    return apiFetch(`/skills/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  /**
   * Delete a skill (admin only)
   * DELETE /api/v1/skills/{id}
   */
  deleteSkill: async (id) => {
    return apiFetch(`/skills/${id}`, {
      method: 'DELETE',
    });
  },

  /** create a lots of skills imediately
   * POST /api/v1/skills/batch
   */
  batchCreateSkills: async (skills) => {
    return apiFetch('/skills/batch', {
      method: 'POST',
      body: JSON.stringify({ skills }),
    });
  },

  // ========== user methode for skills

  /**
   * Get the concerns User skills
   * GET /api/v1/users/me/skills
   */
  getMySkills: async () => {
    return apiFetch('/users/me/skills');
  },

  /** Add a skill to the concern user
   * POST /api/v1/users/me/skills
   */
  addMySkill: async (skillId) => {
    return apiFetch('/users/me/skills', {
      method: 'POST',
      body: JSON.stringify({ skillId }),
    });
  },

  /** remove a skill from a user
   * DELETE /api/v1/users/me/skills/{skillId}
   */
  removeMySkill: async (skillId) => {
    return apiFetch(`/users/me/skills/${skillId}`, {
      method: 'DELETE',
    });
  },
};