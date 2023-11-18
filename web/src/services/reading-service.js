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

export function updateAdviceLove( id, data) {
    return service.post(`/readings/${id}/adviceLove`, data);
}

export function updateAdviceEmoji( id, data) {
    return service.post(`/readings/${id}/adviceEmoji`, data);
}




