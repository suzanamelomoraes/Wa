const express = require('express')

const db = require('../db/db')

const router = express.Router()

const sendGenericErrorMessage = (res) => {
  res.status(500).send(
    "An unexpected error has occurred and we're looking into it"
  )
}

router.get('/', (req, res) => {
  return db.getTasks()
    .then(tasks => res.json(tasks))
    .catch(() => sendGenericErrorMessage(res))
})

router.put('/selectTask', (req, res) => {
  const { id, assignee, status } = req.body

  db.selectTask({ id, assignee, status })
    .then(tasks => res.json(tasks))
    .catch(() => sendGenericErrorMessage(res))
})

module.exports = router
