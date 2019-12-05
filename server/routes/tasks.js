const express = require('express')

const db = require('../db/db')

const router = express.Router()



const sendGenericErrorMessage = (res) => {
  res.status(500).send(
    "An unexpected error has occurred and we're looking into it"
  )
}

router.get('/tasks', (req, res) => {
  return db.getTasks()
    .then(tasks => res.json(tasks))
    .catch(() => sendGenericErrorMessage(res))
})

module.exports = router
