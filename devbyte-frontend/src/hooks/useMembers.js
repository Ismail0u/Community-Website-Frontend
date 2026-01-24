import { useState, useEffect, useCallback } from 'react';
import { membersService } from '@/services/membersService';
import { rolesService } from '@/services/roleServices';

export const useMembers = (initialPage = 1, initialPageSize = 15) => {
  const [members, setMembers] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 10,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch members with pagination
  const fetchMembers = useCallback(async (page = 1, pageSize = 15) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const validPage = Number(page) || 1;
      const validPageSize = Number(pageSize) || 15;
      
      const response = await membersService.getAllUsers(validPage, validPageSize);
      
      if (response.success) {
        setMembers(response.data || []);
        setPagination({
          currentPage: response.pagination?.page || validPage,
          pageSize: response.pagination?.pageSize || validPageSize,
          totalCount: response.pagination?.totalItems || 0,
          totalPages: response.pagination?.totalPages || 0,
          hasNextPage: response.pagination?.hasNextPage || false,
          hasPrevPage: response.pagination?.hasPreviousPage || false,
        });
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching members:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Toggle role (USER <-> ADMIN)
  const toggleRole = useCallback(async (userId, newRole) => {
    try {
      const response = await rolesService.assignRole(userId, newRole);
      
      if (response.success) {
        // Update local state optimistically
        setMembers(prev =>
          prev.map(member =>
            member.id === userId 
              ? { ...member, role: response.user.role } 
              : member
          )
        );
        return { success: true, message: response.message };
      }
    } catch (err) {
      console.error('Error updating role:', err);
      return { success: false, error: err.message };
    }
  }, []);

  // Go to next page
  const nextPage = useCallback(() => {
    if (pagination.hasNextPage) {
      fetchMembers(pagination.currentPage + 1, pagination.pageSize);
    }
  }, [pagination, fetchMembers]);

  // Go to previous page
  const prevPage = useCallback(() => {
    if (pagination.hasPrevPage) {
      fetchMembers(pagination.currentPage - 1, pagination.pageSize);
    }
  }, [pagination, fetchMembers]);

  // Go to specific page
  const goToPage = useCallback((page) => {
    if (page >= 1 && page <= pagination.totalPages) {
      fetchMembers(page, pagination.pageSize);
    }
  }, [pagination.totalPages, pagination.pageSize, fetchMembers]);

  // Change page size
  const changePageSize = useCallback((newPageSize) => {
    fetchMembers(1, newPageSize);
  }, [fetchMembers]);

  // Initial fetch
  useEffect(() => {
    fetchMembers(initialPage, initialPageSize);
  }, [fetchMembers, initialPage, initialPageSize]);

  return {
    members,
    pagination,
    isLoading,
    error,
    refetch: fetchMembers,
    toggleRole,
    nextPage,
    prevPage,
    goToPage,
    changePageSize,
  };
};
