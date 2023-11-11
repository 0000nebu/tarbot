import service from './base-api'

export function login(data) {
    return service.post('/login', data)
        .then(response => response.data)
}

export function create(data) {
    return service.post('/users', data)
}

