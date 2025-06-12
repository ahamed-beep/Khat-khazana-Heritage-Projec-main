import axios from "axios";

const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "https://backend-heritage-project-production.up.railway.app/api"; // 👈 apna actual backend URL yahan daal

const axiosinstacne = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Interceptor
axiosinstacne.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosinstacne;
