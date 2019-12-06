import request from 'superagent'

const apiURL = 'http://localhost:3000'

export function getTasks () {
  return request(apiURL + '/api/v1/tasks')
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function selectTask (userID) {
  return request
    .put(apiURL + '/api/v1/tasks')
    .send(userID)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}
