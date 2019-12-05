import request from 'superagent'

const apiURL = 'http://localhost:3000'

export function getCategories () {
  return request(apiURL + '/api/v1/categories')
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}
