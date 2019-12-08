import request from 'superagent'

const apiURL = 'http://localhost:3000/api/v1/tasks'

const err = 'An unexpected error has occurred and we are looking into it'

export function getTasks () {
  return request.get(apiURL)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function completeTask (id) {
  return request.put(apiURL + `/completed`)
    .send({ id: id })
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function addMahi (mahi) {
  return request.post(apiURL + '/newtask')
    .send(mahi)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function selectTask (id, assignee) {
  return request
    .put(apiURL)
    .send({ id, assignee })
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

