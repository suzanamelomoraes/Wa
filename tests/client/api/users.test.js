const nock = require('nock')
const apiURL = 'http://localhost:3000'

const { getUserDetails } = require('../../../client/api/users')

describe('Testing tasks api', () => {
  it('getUserDetails function returns expected object', () => {
    const expected = {
      id: 1,
      name: 'Steve Jobs',
      image: '/images/avatar02.png',
      about: 'Coding Enthusiast',
      mobile: '021 456 4445',
      email: 'steve.jobs@apple.com',
      address: '12 Morgan Street, Newmarket, Auckland, New Zealand'
    }
    const id = 1
    nock(apiURL)
      .get('/api/v1/users/1')
      .reply(200, expected)

    return getUserDetails(id)
      .then(userDetails => {
        expect(userDetails).toEqual(expected)
      })
      .catch((err) => {
        expect(err).toBeNull()
      })
  })
})