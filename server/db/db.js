const connection = require('./connection')

function getCategories (db = connection) {
  return db('categories')
}

function getTasks (db = connection) {
  return db('tasks')
    .join('categories', 'tasks.cat_id', 'categories.id')
    .join('users', 'tasks.assigner', 'users.id')
    .select('tasks.id as id', 'tasks.name as title', 'categories.name as category', 'tasks.time as hours', 'tasks.description as description', 'users.name as assigner')
}

function selectTask ({ id, assignee }, db = connection) {
  return db('tasks')
    .where('tasks.id', id)
    .update({
      assignee: assignee,
      status: 'in progress'
    })
}

module.exports = {
  getTasks,
  getCategories,
  selectTask
}
