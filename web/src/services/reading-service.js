import service from './base-api'


export function getReadings(data) {
    return service.get('/profile', { data });
}

export function readingsDetail(id, data) {
    return service.get(`/readings/${id}`, {  data,  });
}

export function multiReading(data) {
    return service.post('/readings', {multi: true}, data);
}


