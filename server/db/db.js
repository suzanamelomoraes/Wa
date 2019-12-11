const connection = require('./connection')

function getCategories (db = connection) {
  return db('categories')
}

function getTasks (db = connection) {
  return db('tasks')
    .join('categories', 'tasks.cat_id', 'categories.id')
    .join('users', 'tasks.assigner', 'users.id')
    .select(
      'tasks.id as taskId',
      'tasks.cat_id as categoryId',
      'tasks.assigner as assignerId',
      'tasks.name as title',
      'categories.name as category',
      'tasks.description as description',
      'status',
      'tasks.time as hours',
      'users.image as image',
      'users.name as assignerName',
      'users.latitude as latitude',
      'users.longitude as longitude'
    )
}

function getTask (id, db = connection) {
  return db('tasks')
    .where('id', id)
    .select(
      'id',
      'cat_id as categoryId',
      'assigner as assignerId',
      'name as title',
      'description',
      'status',
      'time as hours',
      'assignee as assignee'
    )
    .first()
}

function getTaskByAssigner (id, db = connection) {
  return db('tasks')
    .where('assigner', id)
    .select(
      'id',
      'cat_id as categoryId',
      'assigner as assignerId',
      'name as title',
      'description',
      'status',
      'time as hours',
      'assignee as assignee'
    )
}

function getTaskByAssignee (id, db = connection) {
  return db('tasks')
    .where('assignee', id)
    .join('users', 'tasks.assigner', 'users.id')
    .join('categories', 'tasks.cat_id', 'categories.id')
    .select(
      'tasks.id',
      'tasks.cat_id as categoryId',
      'tasks.assigner as assignerId',
      'tasks.name as title',
      'tasks.description',
      'tasks.status',
      'tasks.time as hours',
      'tasks.assignee as assignee',
      'users.name as assignerName',
      'users.mobile as assignerMobile',
      'users.email as assignerEmail',
      'users.image as assignerImage',
      'categories.name as category'
    )
}

function selectTask (id, assignee, db = connection) {
  return db('tasks')
    .where('id', id)
    .update({
      assignee: assignee,
      status: 'In progress'
    })
    .then(() => getTask(id, db))
}

function deselectTask (id, db = connection) {
  return db('tasks')
    .where('id', id)
    .update({
      assignee: null,
      status: 'Open'
    })
    .then(() => getTask(id, db))
}

function completeTask (id, assignerId, assigneeId, time, db = connection) {
  return db('tasks')
    .where('id', id)
    .update({
      status: 'Completed',
      assigner: null
    })
    .then(() => {
      return db('users')
        .where('id', assigneeId)
        .increment({
          balance: time
        })
        .then(() => getTask(id, db))
    })
}

function addTask (
  categoryId,
  { assignerId, title, description, status, hours },
  db = connection
) {
  return db('users')
    .where('id', assignerId)
    .decrement({
      balance: hours
    })
    .then(() => {
      return db('tasks')
        .insert({
          cat_id: categoryId,
          assigner: assignerId,
          name: title,
          description,
          status,
          time: hours
        })
        .then(() => getTasks(db))
    })
}

function deleteTask ({ id, assignerId, hours }, db = connection) {
  return db('users')
    .where('id', assignerId)
    .increment({
      balance: hours
    })
    .then(() => {
      return db('tasks')
        .where('id', id)
        .del()
        .then(() => getTasks(db))
    })
}

function getUsers (db = connection) {
  return db('users')
}

function getUserById (id, db = connection) {
  return db('users')
    .where('id', id)
    .first()
}

module.exports = {
  getTasks,
  getCategories,
  selectTask,
  addTask,
  getTask,
  completeTask,
  getUsers,
  getTaskByAssignee,
  getTaskByAssigner,
  getUserById,
  deselectTask,
  deleteTask
}
