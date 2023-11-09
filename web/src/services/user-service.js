import axios from "axios"


const service = axios.create ({
    baseURL: import.meta.env.REACT_APP_BASE_API_URL || "http://127.0.0.1:3000/v1" 
})

export function login(data){
    return service.post('/login', data)
}

export function create(data){
    return service.post('/users', data)
}

