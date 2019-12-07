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

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  return db.getTask(id)
    .then(displayTask)
    .catch(() => sendGenericErrorMessage(res))

  function displayTask (task) {
    res.json(task)
  }
})

router.get('/assigner/:id', (req, res) => {
  const id = Number(req.params.id)

  return db.getTaskByAssigner(id)
    .then(displayTask)
    .catch(() => sendGenericErrorMessage(res))

  function displayTask (task) {
    res.json(task)
  }
})

router.get('/assignee/:id', (req, res) => {
  const id = Number(req.params.id)

  return db.getTaskByAssignee(id)
    .then(displayTask)
    .catch(() => sendGenericErrorMessage(res))

  function displayTask (task) {
    res.json(task)
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

router.put('/', (req, res) => {
  const { id, assignee } = req.body

  db.selectTask(id, assignee)
    .then(task => res.json(task))
    .catch(() => sendGenericErrorMessage(res))
})

router.put('/completed', (req, res) => {
  const { id } = req.body

  db.completeTask(id)
    .then(task => res.json(task))
    .catch(() => sendGenericErrorMessage(res))
})

module.exports = router
