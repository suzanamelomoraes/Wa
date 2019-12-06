const env = require('./test.environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('Categories database tests', () => {
  it('getCategories returns an array of 16 categories', () => {
    expect.assertions(1)

    const expected = 16

    return db.getCategories(testDb)
      .then(categories => {
        const actual = categories.length
        expect(actual).toBe(expected)
      })
  })
})
