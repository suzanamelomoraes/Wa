const connection = require('./connection')

function getCategories (db = connection) {
  return db('categories')
}

function getTasks (db = connection) {
  return db('tasks')
    .join('categories', 'tasks.cat_id', 'categories.id')
    .join('users', 'tasks.assigner', 'users.id')
    .select('tasks.id as taskId', 'tasks.cat_id as categoryId', 'tasks.assigner as assignerId', 'tasks.name as title', 'categories.name as category', 'tasks.description as description', 'status', 'tasks.time as hours', 'users.image as image', 'users.name as assignerName')
}

function selectTask (id, assignee, db = connection) {
  return db('tasks')
    .where('id', id)
    .update({
      assignee: assignee,
      status: 'in progress'
    })
    .then(() => getTask(id, db))
}

function getTask (id, db = connection) {
  return db('tasks')
    .where('id', id)
    .select('id', 'cat_id as categoryId', 'assigner as assignerId', 'name as title', 'description', 'status', 'time as hours', 'assignee as assignee')
    .first()
}

function addTask (categoryId, { assignerId, title, description, status, hours }, db = connection) {
  return db('tasks').insert({
    cat_id: categoryId,
    assigner: assignerId,
    name: title,
    description,
    status,
    time: hours
  })
    .then(() => getTasks(db))
}

module.exports = {
  getTasks,
  getCategories,
  selectTask,
  addTask,
  getTask
}
