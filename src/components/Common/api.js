import axios from 'axios';
import { useAuthStore } from '../stores/auth';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add Authorization header if access token is available
api.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    // Only add Authorization header if accessToken is explicitly managed by frontend
    // If access token is *also* httpOnly, this might not be needed.
    // For now, keeping it as a placeholder if backend returns access token in body.
    if (authStore.accessToken) {
      config.headers.Authorization = `Bearer ${authStore.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling 401 errors and refreshing tokens
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const authStore = useAuthStore();

    // If error is 401 and it's not the refresh token request itself
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh token. Backend handles httpOnly refresh token.
        // This endpoint should return a new httpOnly access token or indicate success.
        await axios.post(`${API_BASE_URL}/auth/refresh`, {}, { withCredentials: true });
        // If refresh is successful, retry the original request.
        return api(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        authStore.clearAuth(); // Clear auth state on refresh failure
        // Optionally, redirect to login page here or let components handle it
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;