import request from 'superagent'

const apiURL = 'http://localhost:3000/api/v1'

export function getOfferings (id) {
  return request
    .get(`${apiURL}/tasks/assigner/${id}`)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function getUser (id) {
  return request
    .get(`${apiURL}/users/${id}`)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}
