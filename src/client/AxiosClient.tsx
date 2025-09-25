import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:7000",
});


// Add a token if needed
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  console.log("token", token);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
