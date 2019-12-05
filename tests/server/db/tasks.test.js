const env = require('./test.environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('Taks database tests', () => {
  it('getTasks returns an array of 3 tasks', () => {
    expect.assertions(1)

    const expected = 3

    return db.getTasks(testDb)
      .then(tasks => {
        const actual = tasks.length
        expect(actual).toBe(expected)
      })
  })
})
