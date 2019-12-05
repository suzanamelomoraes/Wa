const connection = require('./connection')

function getCategories (db = connection) {
  return db('categories')
}

function getTasks (db = connection) {
  return db('tasks')
    .join('categories', 'tasks.cat_id', 'categories.id')
    .join('users', 'tasks.assigner', 'users.id')
    .select('tasks.name as title', 'categories.name as category', 'tasks.time as hours', 'tasks.description as description', 'users.name as assigner', 'image')
}

module.exports = {
  getTasks,
  getCategories
}
