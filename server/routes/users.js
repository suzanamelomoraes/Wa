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

// change the get route to the one set by auth routes
router.get('/', getTokenDecoder(), (req, res) => {
  const userId = req.user.id
  return db.getUserById(userId)
    .then(user => res.json(user))
    .catch(() => sendGenericErrorMessage(res))
})

router.get('/:id', getTokenDecoder(), (req, res) => {
  const userId = req.params.id
  return db.getUserById(userId)
    .then(user => res.json(user))
    .catch(() => sendGenericErrorMessage(res))
})

router.post('/', decodeToken, (req, res) => {
  const id = Number(req.user.id)
  const { addressDetails, mobile, email } = req.body

  return dbUser.updateUserDetails(id, email, mobile, addressDetails)
    .then(user => res.json(user))
    .catch(() => sendGenericErrorMessage(res))
})

module.exports = router
