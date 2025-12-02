import axios from "axios";
//axios instance for making api requests

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://community-api-backend.onrender.com",
  withCredentials: true,
});

export default api;
