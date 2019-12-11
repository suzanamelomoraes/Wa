const connection = require('./connection')
const { generateHash } = require('authenticare/server')

module.exports = {
  createUser,
  userExists,
  getUserById,
  updateUserDetails,
  getUserByName
}

function createUser (user, db = connection) {
  return userExists(user.username, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('User exists'))
      }
    })
    .then(() => generateHash(user.password))
    .then(passwordHash => {
      return db('users').insert({ name: user.username, hash: passwordHash })
    })
}

function userExists (username, db = connection) {
  return db('users')
    .count('id as n')
    .where('name', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserById (id, db = connection) {
  return db('users')
    .where('id', id)
    .first()
}

function updateUserDetails (id, email, mobile, addressDetails, db = connection) {
  return db('users')
    .where('id', id)
    .update({
      email: email,
      mobile: mobile,
      balance: 5,
      address: addressDetails.address,
      latitude: addressDetails.geolocation.lat,
      longitude: addressDetails.geolocation.lng,
      image: '/images/avatar01.png'
    })
    .then(getUserById(id, db))
}

function getUserByName (username, db = connection) {
  return db('users')
    .select()
    .where('name', username)
    .first()
}
