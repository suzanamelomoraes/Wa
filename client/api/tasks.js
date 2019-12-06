import request from 'superagent'

const apiURL = 'http://localhost:3000'

export function getTasks () {
  return request.get(apiURL)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}

export function completeTask (id) {
  return request.put(apiURL + `/${id}`)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}
