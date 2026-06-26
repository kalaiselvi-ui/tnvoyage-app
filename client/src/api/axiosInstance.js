import axios from "axios";

// Create the axios instance
const API = axios.create({
  // Falls back to localhost if the environment variable isn't set
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // baseURL: "http://localhost:3000/api",
  // timeout: 10000, // Optional: times out after 10 seconds
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
