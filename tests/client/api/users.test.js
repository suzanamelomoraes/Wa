const nock = require('nock')
const apiURL = 'http://localhost:3000'

const { getOfferings } = require('../../../client/api/users')

describe('Testing getOfferings api', () => {
  it('get Offerings function returns expected array', () => {
    const expected = [{ name: 'bob' }, { name: 'jones' }]
    const id = 2
    nock(apiURL)
      .get(`/api/v1/users/${id}`)
      .reply(200, expected)

    return getOfferings(id)
      .then((data) => {
        expect(data).toEqual(expected)
      })
      .catch((err) => {
        expect(err).toBeNull()
      })
  })
})
