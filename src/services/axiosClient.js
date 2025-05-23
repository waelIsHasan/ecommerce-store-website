import axios from "axios";
export const axiosClient = axios.create({
    baseURL: "https://api.your-ecom-store.com",
  headers: {
    "Content-Type": "application/json",
  },
})
// Add interceptors for auth, errors, etc.
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});