import { useState, useCallback, useEffect } from 'react';
import { techService } from '@/services/techService';

export const useTechs = (initialParams = {}) => {
  const [techs, setTechs] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTechs = useCallback(async (params = initialParams) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await techService.getAllTechs(params);
      
      if (response.success) {
        setTechs(response.data || []);
        setPagination(response.pagination);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createTech = useCallback(async (data) => {
    try {
      const response = await techService.createTech(data);
      if (response.success) {
        await fetchTechs();
        return { success: true, tech: response.data };
      }
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, [fetchTechs]);

  const updateTech = useCallback(async (id, data) => {
    try {
      const response = await techService.updateTech(id, data);
      if (response.success) {
        setTechs(prev => prev.map(t => t.id === id ? response.data : t));
        return { success: true };
      }
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  const deleteTech = useCallback(async (id) => {
    try {
      const response = await techService.deleteTech(id);
      if (response.success) {
        setTechs(prev => prev.filter(t => t.id !== id));
        return { success: true };
      }
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  // Auto-fetch on mount
  useEffect(() => {
    fetchTechs();
  }, []);

  return {
    techs,
    pagination,
    isLoading,
    error,
    fetchTechs,
    createTech,
    updateTech,
    deleteTech,
  };
}; 