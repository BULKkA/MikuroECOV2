import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    accessToken: null, // May not be directly used if httpOnly, but useful for logic
    refreshToken: null, // Presence might be tracked, but actual token is httpOnly
    roles: [],
    isLoggedIn: false,
    captchaToken: null,
    loading: false,
    error: null,
  }),
  getters: {
    isAuthenticated: (state) => state.isLoggedIn,
    isAdmin: (state) => state.roles.includes('admin'),
    isEditor: (state) => state.roles.includes('editor'),
    getUser: (state) => state.user,
  },
  actions: {
    async login(credentials) {
      this.loading = true;
      this.error = null;
      try {
        // Simulate API call
        console.log('Attempting login with:', credentials);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.user = { id: 1, name: 'Test User', email: 'test@example.com' };
        this.roles = ['user']; // Default role
        this.isLoggedIn = true;
        this.accessToken = 'fake_access_token'; // Placeholder if needed
        console.log('Login successful');
      } catch (err) {
        this.error = 'Login failed: ' + err.message;
        this.isLoggedIn = false;
      } finally {
        this.loading = false;
      }
    },
    async register(userData) {
      this.loading = true;
      this.error = null;
      try {
        console.log('Attempting registration with:', userData);
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Registration successful');
        // Optionally log in user after registration
      } catch (err) {
        this.error = 'Registration failed: ' + err.message;
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      this.loading = true;
      this.error = null;
      try {
        // Call API to logout (invalidate tokens on backend)
        await new Promise(resolve => setTimeout(resolve, 500));
        this.clearAuth();
        console.log('Logout successful');
      } catch (err) {
        this.error = 'Logout failed: ' + err.message;
      } finally {
        this.loading = false;
      }
    },
    setCaptchaToken(token) { this.captchaToken = token; },
    clearAuth() {
      this.user = null; this.accessToken = null; this.refreshToken = null;
      this.roles = []; this.isLoggedIn = false; this.captchaToken = null;
    }
  },
});