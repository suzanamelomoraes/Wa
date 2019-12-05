const nock = require('nock')
// const apiURL = 'http://localhost:3000/api/v1'
const { getTasks } = require('../../../client/api/tasks')

test('Testing for true is truthy', () => {
  expect(true).toBeTruthy()
})

describe('Testing tasks api', () => {
  it('getTasks function returns expected array', () => {
    // Arrange
    const expected = [{ name: 'bob' }, { name: 'jones' }]
    nock('http://localhost:3000')
      .get('/api/v1/tasks')
      .reply(200, [{ name: 'bob' }, { name: 'jones' }])

    // Act & Assert
    return getTasks()
      .then((data) => {
        expect(data).toEqual(expected)
      })
      .catch((err) => {
        expect(err).toBeNull()
      })
  })
})
