const env = require('./test.environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('Users database tests', () => {
  it('getUsers returns an array of 4 users object', () => {
    expect.assertions(1)

    const expected = 4

    return db.getUsers(testDb)
      .then(users => {
        const actual = users.length
        expect(actual).toBe(expected)
      })
  })
})
