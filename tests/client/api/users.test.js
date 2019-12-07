const nock = require('nock')
const apiURL = 'http://localhost:3000'

const { getUserDetails } = require('../../../client/api/users')

describe('Testing tasks api', () => {
  it('getTasks function returns expected array', () => {
    const expected = {
      name: 'Steve Jobs',
      image: '/images/avatar02.png',
      about: 'Coding Enthusiast',
      mobile: '021 456 4445',
      email: 'steve.jobs@apple.com',
      address: '12 Morgan Street, Newmarket, Auckland, NewZealand'
    }
    nock(apiURL)
      .get('/api/v1/users')
      .reply(200, expected)

    return getUserDetails
      .then(userDetails => {
        expect(userDetails).toEqual(expected)
      })
      .catch((err) => {
        expect(err).toBeNull()
      })
  })
})