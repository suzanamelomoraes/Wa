const express = require('express')

const db = require('../db/db')

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

router.get('/:id', (req, res) => {
  const userId = Number(req.params.id)

  return db.getUserById(userId)
    .then(user => res.json(user))
    .catch(() => sendGenericErrorMessage(res))
})

module.exports = router
