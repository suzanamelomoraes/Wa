const express = require('express')
const { getTokenDecoder } = require('authenticare/server')
const decodeToken = getTokenDecoder(false)

const db = require('../db/db')

const router = express.Router()

const sendGenericErrorMessage = res => {
  res
    .status(500)
    .send("An unexpected error has occurred and we're looking into it")
}

router.get('/', (req, res) => {
  return db
    .getTasks()
    .then(tasks => res.json(tasks))
    .catch(() => sendGenericErrorMessage(res))
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  return db
    .getTask(id)
    .then(displayTask)
    .catch(() => sendGenericErrorMessage(res))

  function displayTask (task) {
    res.json(task)
  }
})

// move these routes to users
router.get('/assigner/:id', decodeToken, (req, res) => {
  const id = Number(req.params.id)

  return db
    .getTaskByAssigner(id)
    .then(displayTask)
    .catch(() => sendGenericErrorMessage(res))

  function displayTask (task) {
    res.json(task)
  }
})

router.get('/assignee/:id', decodeToken, (req, res) => {
  const id = Number(req.params.id)

  return db
    .getTaskByAssignee(id)
    .then(displayTask)
    .catch(() => sendGenericErrorMessage(res))

  function displayTask (task) {
    res.json(task)
  }
})

router.post('/newtask', decodeToken, (req, res) => {
  const { assigner, title, description, hours, category } = req.body
  const categoryId = category
  const assignerId = Number(assigner)
  const status = 'open'
  db.addTask(categoryId, { assignerId, title, description, status, hours })
    .then(displayTasks)
    .catch(() => sendGenericErrorMessage(res))

  function displayTasks (tasks) {
    res.json(tasks)
  }
})

router.put('/', decodeToken, (req, res) => {
  const { id, assignee } = req.body

  db.selectTask(id, assignee)
    .then(task => res.json(task))
    .catch(() => sendGenericErrorMessage(res))
})

router.put('/completed', decodeToken, (req, res) => {
  const { id, assignerId, assigneeId, time } = req.body

  db.completeTask(id, assignerId, assigneeId, time)
    .then(task => res.json(task))
    .catch(() => sendGenericErrorMessage(res))
})

module.exports = router
