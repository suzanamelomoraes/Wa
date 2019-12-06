const nock = require('nock')
const apiURL = 'http://localhost:3000'
const { getCategories } = require('../../../client/api/categories')

test('Testing for true is truthy', () => {
  expect(true).toBeTruthy()
})

describe('Testing categories api', () => {
  it('getCategories function returns expected array', () => {
    // Arrange
    const expected = [{ name: 'Automotive' }, { name: 'Sports' }]
    nock(apiURL)
      .get('/api/v1/categories')
      .reply(200, [{ name: 'Automotive' }, { name: 'Sports' }])

    // Act & Assert
    return getCategories()
      .then((data) => {
        expect(data).toEqual(expected)
      })
      .catch((err) => {
        expect(err).toBeNull()
      })
  })
})
