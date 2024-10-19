// src/api.js
import axios from 'axios';

// Set up Axios instance for API calls
const api = axios.create({
  baseURL: 'http://localhost:5000/api/projects',  // Your backend's base URL
  headers: {
    'Content-Type': 'multipart/form-data',  // For file uploads
  },
});

export default api;
