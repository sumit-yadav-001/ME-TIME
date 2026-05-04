// Simulation of API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const authService = {
  async login(phone) {
    await delay(1000);
    const user = { id: '1', name: 'Carol Peterson', phone };
    localStorage.setItem('me-time-user', JSON.stringify(user));
    return user;
  },

  async logout() {
    await delay(500);
    localStorage.removeItem('me-time-user');
  },

  getCurrentUser() {
    const user = localStorage.getItem('me-time-user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated() {
    return !!localStorage.getItem('me-time-user');
  }
};
