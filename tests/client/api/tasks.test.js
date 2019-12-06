const nock = require('nock')
const { getTasks, addMahi } = require('../../../client/api/tasks')

const apiUrl = 'http://localhost:3000/api/v1'

test('Testing for true is truthy', () => {
  expect(true).toBeTruthy()
})

describe('Testing tasks api', () => {
  it('getTasks function returns expected array', () => {
    // Arrange
    const expected = [{ name: 'bob' }, { name: 'jones' }]
    nock(apiUrl)
      .get('/tasks')
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

    nock(apiUrl)
      .post('/tasks', mahi)
      .reply(200, expected)

    return addMahi(mahi)
      .then(addedMahi => {
        expect(addedMahi).toEqual(expected)
      })
  })
  it('should throw error for status 500', () => {
    const err = 'An unexpected error has occurred and we are looking into it'

    const mahi = {
      assigner: 2,
      title: 'help me move',
      category: 5,
      time: 5,
      description: 'I am moving down the street, please help me pack and label the contents of my home'
    }

    nock(apiUrl)
      .post('/tasks', mahi)
      .reply(500, err)

    return expect(addMahi(mahi)).rejects.toThrow(err)
  })
})
