const connection = require('./connection')

function getCategories (db = connection) {
  return db('categories')
}

function getTasks (db = connection) {
  return db('tasks')
    .join('categories', 'tasks.cat_id', 'categories.id')
    .join('users', 'tasks.assigner', 'users.id')
    .select('tasks.cat_id as categoryId', 'tasks.assigner as assignerId', 'tasks.name as title', 'categories.name as category', 'tasks.description as description', 'status', 'tasks.time as hours', 'users.image as image', 'users.name as assignerName')
}

function addTask ({ categoryId, assignerId, title, description, status, hours, image }, db = connection) {
  return db('tasks').insert({
    cat_id: categoryId,
    assigner: assignerId,
    name: title,
    description,
    status,
    time: hours,
    image
  })
}

module.exports = {
  getTasks,
  getCategories,
  addTask
}
