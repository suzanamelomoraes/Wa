import request from 'superagent'

const apiURL = 'http://localhost:3000'

const acceptJsonHeader = { 'Accept': 'application/json' }

export function getCategories () {
  return request(apiURL + '/api/v1/categories')
    .set(acceptJsonHeader)
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}
