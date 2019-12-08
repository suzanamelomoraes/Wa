const nock = require('nock')
const apiURL = 'http://localhost:3000'
const { getTasks, completeTask, addMahi } = require('../../../client/api/tasks')

test('Testing for true is truthy', () => {
  expect(true).toBeTruthy()
})

describe('Testing tasks api', () => {
  it('getTasks function returns expected array', () => {
    // Arrange
    const expected = [{ name: 'bob' }, { name: 'jones' }]
    nock(apiURL)
      .get('/api/v1/tasks')
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
})

describe('Test for completeTask function calls correct route', () => {
  it('completeTask ', () => {
    // Arrange
    const expected = true
    const id = 5
    nock(apiURL)
      .put(`/api/v1/tasks/completed`)
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

describe('Tests for addMahi function', () => {
  it('getTasks function returns expected array', () => {
    const expected = {
      id: 5,
      assigner: 2,
      title: 'help me move',
      category: 5,
      time: 5,
      description: 'I am moving down the street, please help me pack and label the contents of my home'
    }

    const mahi = {
      assigner: 2,
      title: 'help me move',
      category: 5,
      time: 5,
      description: 'I am moving down the street, please help me pack and label the contents of my home'
    }

    nock(apiURL)
      .post('/api/v1/tasks/newtask', mahi)
      .reply(200, expected)

    return addMahi(mahi)
      .then(addedMahi => {
        expect(addedMahi).toEqual(expected)
      })
      .catch((err) => {
        expect(err).toBeNull()
      })
  })
})

