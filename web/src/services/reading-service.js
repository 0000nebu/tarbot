import service from './base-api'

export function getReadings(data) {
    return service.get('/profile', { data });
}

export function readingsDetail(id, data) {
    return service.get(`/readings/${id}`);
}

export function multiReading(data) {
    return service.post('/readings', {multi: true}, data);
}

export function singleReading(data) {
    return service.post('/readings', data);
}

export function updateReading( id, data) {
    return service.patch(`/readings/${id}`, data);
}





