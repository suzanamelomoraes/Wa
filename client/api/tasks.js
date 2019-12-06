import request from 'superagent'

const apiURL = 'http://localhost:3000'

export function getTasks () {
  return request(apiURL + '/api/v1/tasks')
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function completeTask (id) {
  return request.post(apiURL + `/api/v1/tasks/${id}`)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}
