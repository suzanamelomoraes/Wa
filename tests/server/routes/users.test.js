const request = require('supertest')

const server = require('../../../server/server')

const mockUsers = [
  {
    id: 1,
    name: 'Don',
    email: 'don@devacademy.com',
    mobile: 99999999,
    password: 'lacucaracha',
    balance: 3,
    'address': '12 Morgan Street, Newmarket, 0600',
    latitude: 1234,
    longitude: 4321,
    image: 'avatar01'
  },
  {
    id: 2,
    name: 'Bryce',
    email: 'bryce@devacademy.com',
    mobile: 99999999,
    password: 'potatoes',
    balance: 3,
    address: '12 Morgan Street, Newmarket, 0600',
    latitude: 1234,
    longitude: 4321,
    image: 'avatar01'
  }
]

const mockUser =
  { id: 1,
    name: 'Don',
    email: 'don@devacademy.com',
    mobile: 99999999,
    password: 'lacucaracha',
    balance: 3,
    address: '12 Morgan Street, Newmarket, 0600',
    latitude: 1234,
    longitude: 4321,
    image: 'avatar01' }

jest.mock('../../../server/db/db', () => ({
  getUsers: () => Promise.resolve(mockUsers),
  getUserById: () => Promise.resolve(mockUser)

}))

describe('Gets all users', () => {
  it('GET /users', () => {
    return request(server)
      .get('/api/v1/users')
      .then((res) => {
        expect(res.body).toEqual(mockUsers)
      })
  })
})

describe('Gets a user by Id', () => {
  it('GET /:id', () => {
    return request(server)
      .get('/api/v1/users/1')
      .then((res) => {
        expect(res.body).toEqual(mockUser)
      })
  })
})
