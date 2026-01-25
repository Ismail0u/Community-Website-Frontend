import { useState, useEffect, useCallback } from 'react';
import { skillsService } from '@/services/skillService';

/**
 * Hook personnalisé pour gérer les skills
 * @param {number} initialPage - Page initiale (défaut: 1)
 * @param {number} initialPageSize - Taille de page (défaut: 10)
 */
export const useSkills = (initialPage = 1, initialPageSize = 10) => {
  const [skills, setSkills] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Gets all skills
  const fetchSkills = useCallback(async (page = 1, pageSize = 10) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await skillsService.getAllSkills(page, pageSize);
      
      if (response.success) {
        setSkills(response.data || []);
        setPagination(response.pagination);
      } else {
        setError('Failed to fetch skills');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching skills:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // create a skill (Admin/Root)
  const createSkill = useCallback(async (data) => {
    try {
      const response = await skillsService.createSkill(data);
      
      if (response.success) {
        await fetchSkills(pagination.page, pagination.pageSize);
        return { success: true, skill: response.skill };
      }
      return { success: false, error: 'Failed to create skill' };
    } catch (err) {
      console.error('Error creating skill:', err);
      return { success: false, error: err.message };
    }
  }, [fetchSkills, pagination]);


  // update a skill (Admin/Root)
  const updateSkill = useCallback(async (id, data) => {
    try {
      const response = await skillsService.updateSkill(id, data);
      
      if (response.success) {
        setSkills(prev => prev.map(s => s.id === id ? response.skill : s));
        return { success: true };
      }
      return { success: false, error: 'Failed to update skill' };
    } catch (err) {
      console.error('Error updating skill:', err);
      return { success: false, error: err.message };
    }
  }, []);

  // delete a skill (Admin/Root)
  const deleteSkill = useCallback(async (id) => {
    try {
      const response = await skillsService.deleteSkill(id);
      
      if (response.success) {
        setSkills(prev => prev.filter(s => s.id !== id));
        return { success: true };
      }
      return { success: false, error: 'Failed to delete skill' };
    } catch (err) {
      console.error('Error deleting skill:', err);
      return { success: false, error: err.message };
    }
  }, []);

  // create a lots of skills (Admin/Root)
  const batchCreateSkills = useCallback(async (skillsData) => {
    try {
      const response = await skillsService.batchCreateSkills(skillsData);
      
      if (response.success) {
        await fetchSkills(pagination.page, pagination.pageSize);
        return { 
          success: true, 
          created: response.created,
          failed: response.failed 
        };
      }
      return { success: false, error: 'Failed to batch create skills' };
    } catch (err) {
      console.error('Error batch creating skills:', err);
      return { success: false, error: err.message };
    }
  }, [fetchSkills, pagination]);

  // Go to next page 
  const nextPage = useCallback(() => {
    if (pagination.hasNextPage) {
      fetchSkills(pagination.page + 1, pagination.pageSize);
    }
  }, [pagination, fetchSkills]);

  // go to the previous page
  const prevPage = useCallback(() => {
    if (pagination.hasPreviousPage) {
      fetchSkills(pagination.page - 1, pagination.pageSize);
    }
  }, [pagination, fetchSkills]);

  // go to a specifique page
  const goToPage = useCallback((page) => {
    if (page >= 1 && page <= pagination.totalPages) {
      fetchSkills(page, pagination.pageSize);
    }
  }, [pagination, fetchSkills]);

  // Changer page size
  const changePageSize = useCallback((newPageSize) => {
    fetchSkills(1, newPageSize);
  }, [fetchSkills]);

  // initial fetch
  useEffect(() => {
    fetchSkills(initialPage, initialPageSize);
  }, [fetchSkills, initialPage, initialPageSize]);

  return {
    skills,
    pagination,
    isLoading,
    error,
    fetchSkills,
    createSkill,
    updateSkill,
    deleteSkill,
    batchCreateSkills,
    nextPage,
    prevPage,
    goToPage,
    changePageSize,
  };
};




/**
 *  skills hooks for the connected user
 */
export const useMySkills = () => {
  const [mySkills, setMySkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // get skills
  const fetchMySkills = useCallback(async () => {
    try { setIsLoading(true);
      setError(null);
      const response = await skillsService.getMySkills();
      
      if (response.success) {
        setMySkills(response.skills || []);
      } else {
        setError('Failed to fetch your skills');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching my skills:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // add a  skill
  const addSkill = useCallback(async (skillId) => {
    try {
      const response = await skillsService.addMySkill(skillId);
      
      if (response.success) {
        setMySkills(response.skills || []);
        return { success: true };
      }
      return { success: false, error: 'Failed to add skill' };
    } catch (err) {
      console.error('Error adding skill:', err);
      return { success: false, error: err.message };
    }
  }, []);

  // remove a skill
  const removeSkill = useCallback(async (skillId) => {
    try {
      const response = await skillsService.removeMySkill(skillId);
      
      if (response.success) {
        setMySkills(response.skills || []);
        return { success: true };
      }
      return { success: false, error: 'Failed to remove skill' };
    } catch (err) {
      console.error('Error removing skill:', err);
      return { success: false, error: err.message };
    }
  }, []);

  // initial fetch 
  useEffect(() => {
    fetchMySkills();
  }, [fetchMySkills]);

  return {
    mySkills,
    isLoading,
    error,
    fetchMySkills,
    addSkill,
    removeSkill,
  };
};