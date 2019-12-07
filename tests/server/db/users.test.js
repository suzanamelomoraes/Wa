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

it('getUserById gets a single user by id', () => {
  const id = 4
  const expected = {
    id: 4,
    name: 'Testuser4',
    email: 'jess@devacademy.com',
    mobile: 99999999,
    password: 'great',
    balance: 3,
    address: '12 Morgan Street, Newmarket, 0600',
    latitude: 1234,
    longitude: 4321,
    image: 'images/avatar01.png'
  }

  return db.getUserById(id, testDb)
    .then(user => {
      const actual = user
      expect(actual).toEqual(expected)
    })
    .catch(err => expect(err).toBeNull())
})
