import { useState, useEffect, useCallback } from 'react';
import { authService } from '../services/authService';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const login = useCallback(async (phone) => {
    setLoading(true);
    try {
      const newUser = await authService.login(phone);
      setUser(newUser);
      return newUser;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    try {
      await authService.logout();
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { user, loading, login, logout, isAuthenticated: !!user };
}
