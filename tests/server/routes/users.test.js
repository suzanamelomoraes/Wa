const request = require('supertest')

const server = require('../../../server/server')

const mockUsers = [
  {
    id: 1,
    name: 'Don',
    email: 'don@devacademy.com',
    mobile: 99999999,
    hash: 'lacucaracha',
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
    hash: 'potatoes',
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
    hash: 'lacucaracha',
    balance: 3,
    address: '12 Morgan Street, Newmarket, 0600',
    latitude: 1234,
    longitude: 4321,
    image: 'avatar01' }

jest.mock('../../../server/db/db', () => ({
  getUsers: () => Promise.resolve(mockUsers),
  getUserById: () => Promise.resolve(mockUser)

}))