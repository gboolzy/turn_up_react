import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.sagfieldsclean.co.uk",
});

// Add a token if needed
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
