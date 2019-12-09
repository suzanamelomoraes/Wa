const express = require('express')

const db = require('../db/db')
const dbUser = require('../db/users')

const { getTokenDecoder } = require('authenticare/server')
const decodeToken = getTokenDecoder(false)

const router = express.Router()

const sendGenericErrorMessage = (res) => {
  res.status(500).send(
    "An unexpected error has occurred and we're looking into it"
  )
}

router.get('/', (req, res) => {
  return db.getUsers()
    .then(displayUsers)
    .catch(() => sendGenericErrorMessage(res))

  function displayUsers (users) {
    res.json(users)
  }
})

// change the get route to the one set by auth routes
router.get('/:id', (req, res) => {
  const userId = Number(req.params.id)

  return db.getUserById(userId)
    .then(user => res.json(user))
    .catch(() => sendGenericErrorMessage(res))
})

router.post('/', decodeToken, (req, res) => {
  const id = req.user.id
  const { details, geocode } = req.body
  return dbUser.updateUserDetails(id, details, geocode)
    .then(user => res.json(user))
    .catch(() => sendGenericErrorMessage(res))
})

module.exports = router
