const env = require('./test.environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('Taks database tests', () => {
  it('selectTask returns status 200', () => {
    expect.assertions(1)

    const expected = 3

    return db.getTasks(testDb)
      .then(tasks => {
        const actual = tasks.length
        expect(actual).toBe(expected)
      })
  })
})
