const env = require('./test.environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('Tasks database tests', () => {
  it('selectTask returns the changed object', () => {
    expect.assertions(2)

    const id = 1
    const assignee = 2

    return db.selectTask(id, assignee, testDb)
      .then(task => {
        expect(task.assignee).toEqual(2)
        expect(task.status).toMatch('in progress')
      })
  })
})
