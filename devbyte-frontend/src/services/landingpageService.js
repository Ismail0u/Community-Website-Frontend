import apiFetch from "./api";

export const landingpageService = {
  getMembers: async (page = 1, pageSize = 6) => {
    return apiFetch(`/users?page=${page}&pageSize=${pageSize}`);
  },

  getBlogPosts: async (page = 1, pageSize = 4) => {
    return apiFetch(`/blogs?page=${page}&pageSize=${pageSize}`);
  },
};
