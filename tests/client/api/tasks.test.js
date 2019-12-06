const nock = require('nock')
const apiURL = 'http://localhost:3000/api/v1'
const { getTasks, completeTask } = require('../../../client/api/tasks')

test('Testing for true is truthy', () => {
  expect(true).toBeTruthy()
})

describe('Testing tasks api', () => {
  it('getTasks function returns expected array', () => {
    // Arrange
    const expected = [{ name: 'bob' }, { name: 'jones' }]
    nock(apiURL)
      .get('/tasks')
      .reply(200, expected)

    // Act & Assert
    return getTasks()
      .then((data) => {
        expect(data).toEqual(expected)
      })
      .catch((err) => {
        expect(err).toBeNull()
      })
  })

  it('completeTask ', () => {
    // Arrange
    const expected = true
    const id = 5
    nock(apiURL)
      .post(`/tasks/${id}`)
      .reply(200, expected)

    // Act & Assert
    return completeTask(id)
      .then((response) => {
        expect(response).toBe(expected)
      })
      .catch((err) => {
        expect(err).toBeNull()
      })
  })
})
