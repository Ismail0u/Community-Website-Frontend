import apiFetch from './api';

export const techService = {
  /**
   * Get all techs with pagination and search
   */
  getAllTechs: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiFetch(`/techs?${queryString}`);
  },

  // Get a single tech by ID
  getTechById: async (id) => {
    return apiFetch(`/techs/${id}`);
  },

  // Create a new tech (Admin/Root only)
  createTech: async (data) => {
    return apiFetch('/techs', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Update a tech (Admin/Root only)
  updateTech: async (id, data) => {
    return apiFetch(`/techs/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  // Delete a tech (Admin/Root only)
  deleteTech: async (id) => {
    return apiFetch(`/techs/${id}`, {
      method: 'DELETE',
    });
  },

  // Batch create multiple techs (Admin/Root only)
  batchCreateTechs: async (techs) => {
    return apiFetch('/techs/batch', {
      method: 'POST',
      body: JSON.stringify({ techs }),
    });
  },

  // Upload/update tech icon
  uploadTechIcon: async (id, iconFile) => {
    const formData = new FormData();
    formData.append('icon', iconFile);

    return fetch(`${API_BASE_URL}/techs/${id}/icon`, {
      method: 'PATCH',
      body: formData,
      credentials: 'include',
    }).then(res => res.json());
  },
};