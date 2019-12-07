import request from 'superagent'
const apiURL = 'http://localhost:3000/api/v1/users'

export function getUserDetails (id) {
  return request.get(`${apiURL}/${id}`)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}