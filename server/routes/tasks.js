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

router.get('/', decodeToken, (req, res) => {
  return db
    .getTasks()
    .then(tasks => res.json(tasks))
    .catch(() => sendGenericErrorMessage(res))
})

router.put('/', getTokenDecoder(), (req, res) => {
  const { id } = req.body
  const assignee = Number(req.user.id)

  db.selectTask(id, assignee)
    .then(task => res.json(task))
    .catch(() => sendGenericErrorMessage(res))
})

router.delete('/', getTokenDecoder(), (req, res) => {
  db.deleteTask(req.body)
    .then(tasks => res.json(tasks))
    .catch(() => sendGenericErrorMessage(res))
})

// move these routes to users
router.get('/assigner', getTokenDecoder(), (req, res) => {
  const id = Number(req.user.id)
  return db
    .getTaskByAssigner(id)
    .then(displayTask)
    .catch(() => sendGenericErrorMessage(res))

  function displayTask (task) {
    res.json(task)
  }
})

router.get('/assignee', getTokenDecoder(), (req, res) => {
  const id = Number(req.user.id)

  return db
    .getTaskByAssignee(id)
    .then(displayTask)
    .catch(() => sendGenericErrorMessage(res))

  function displayTask (task) {
    res.json(task)
  }
})

router.put('/assignee', getTokenDecoder(), (req, res) => {
  const id = Number(req.body.id)

  return db
    .deselectTask(id)
    .then(task => res.json(task))
    .catch(() => sendGenericErrorMessage(res))
})

router.post('/newtask', getTokenDecoder(), (req, res) => {
  const { title, description, hours, category } = req.body

  const categoryId = category
  const assignerId = Number(req.user.id)
  const status = 'Open'

  db.getUserById(assignerId)
    .then(user => {
      if (user.balance < hours) {
        // If user doesn't have enough balance to create task
        res.json('Not enough balance')
      } else {
        // If user DOES have enough balance to create task
        db.addTask(categoryId, { assignerId, title, description, status, hours })
          .then(displayTasks)
          .catch(() => sendGenericErrorMessage(res))
      }
    })
  function displayTasks (tasks) {
    res.json(tasks)
  }
})

router.put('/completed', getTokenDecoder(), (req, res) => {
  const assignerId = Number(req.user.id)
  const { id, assigneeId, time } = req.body

  db.completeTask(id, assignerId, assigneeId, time)
    .then(task => res.json(task))
    .catch(() => sendGenericErrorMessage(res))
})

module.exports = router
