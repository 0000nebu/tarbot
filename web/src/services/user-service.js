import service from './base-api'

export async function login(data) {
    return service.post('/login', data)
        .then(response => response.data)
}

export async function create(data) {
    return service.post('/users', data)
}

export async function userDetail(data) {
    return service.get('/detail', {data})
    
}

export async function logoutApi() {
    return service.post("/logout");
  }
  
  