const env = require('./test.environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('Tasks database tests', () => {
  it('getTasks returns an array of 3 tasks', () => {
    expect.assertions(1)

    const expected = 3

    return db.getTasks(testDb)
      .then(tasks => {
        const actual = tasks.length
        expect(actual).toBe(expected)
      })
  })

  it('addTask increases length of tasks list array by 1', () => {
    expect.assertions(1)

    const expected = 4
    const categoryId = 1
    const newTask = {
      assignerId: 3,
      title: 'Walk with dog',
      description: 'Take the dog to walk',
      status: 'completed',
      hours: 1
    }

    return db.addTask(categoryId, newTask, testDb)
      .then(tasks => {
        expect(tasks).toHaveLength(expected)
      })
  })
})
