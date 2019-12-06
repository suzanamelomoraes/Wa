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
    .then(displayTasks)
    .catch(() => sendGenericErrorMessage(res))

  function displayTasks (tasks) {
    res.json(tasks)
  }
})

router.post('/newTask/:id', (req, res) => {
  const categoryId = Number(req.params.id)
  const { assignerId, title, description, status, hours } = req.body
  db.addTask(categoryId, { assignerId, title, description, status, hours })
    .then(displayTasks)
    .catch(() => sendGenericErrorMessage(res))

  function displayTasks (tasks) {
    res.json(tasks)
  }
})

module.exports = router
