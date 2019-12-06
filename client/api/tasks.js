import request from 'superagent'

const apiURL = 'http://localhost:3000/api/v1/tasks'

const err = 'An unexpected error has occurred and we are looking into it'

export function getTasks () {
  return request(apiURL)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function addMahi (mahi) {
  return request.post(apiURL)
    .send(mahi)
    .then(res => res.body)
    .catch(() => { throw new Error(err) })
}
