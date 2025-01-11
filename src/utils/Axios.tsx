// utils/axiosInstance.ts
import axios from 'axios';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Base URL of your Laravel API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercept requests to add the token to headers (if available)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optionally, you can add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally here (like token expiration)
    return Promise.reject(error);
  }
);

export default axiosInstance;
