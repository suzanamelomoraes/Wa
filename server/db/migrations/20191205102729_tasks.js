exports.up = (knex, Promise) => {
  return knex.schema.createTable('tasks', table => {
    table.increments('id')
    table.integer('cat_id').references('categories.id')
    table.integer('assigner').references('users.id')
    table.integer('assignee')
    table.string('name')
    table.text('description')
    table.string('status')
    table.integer('time')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tasks')
}
