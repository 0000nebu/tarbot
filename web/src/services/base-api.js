import axios from "axios"

const service = axios.create ({
    baseURL: import.meta.env.REACT_APP_BASE_API_URL || "http://127.0.0.1:3000/v1",
    withCredentials: true,
})

export default service;