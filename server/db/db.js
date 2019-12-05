const connection = require('./connection')

function getTasks (db = connection) {
  return db('tasks')
    .join('categories', 'tasks.cat_id', 'categories.id')
    .join('users', 'tasks.assigner', 'users.id')
    .select('tasks.name as title', 'categories.name as category', 'tasks.time as hours', 'tasks.description as description', 'tasks.assigner as assiger')
}

module.exports = {
  getTasks
}
