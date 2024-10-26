import axios from "axios"

const service = axios.create ({
    baseURL: import.meta.env.VITE_BASE_API_URL || "http://127.0.0.1:3000/v1" || "http://localhost:3000/v1",
    withCredentials: true,
})

service.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (
        error.response.status === 401 &&
        window.location.pathname !== "/login"
      ) {
        localStorage.removeItem("user");
        window.location.assign("/login");
      } else {
        return Promise.reject(error);
      }
    }
  );

export default service;