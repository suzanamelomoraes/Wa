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

router.put('/', (req, res) => {
  const { id, assignee } = req.body

  db.selectTask({ id, assignee })
    .then(res.sendStatus(200))
    .catch(() => sendGenericErrorMessage(res))
})

module.exports = router
