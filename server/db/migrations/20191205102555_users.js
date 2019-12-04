
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.number('mobile')
    table.string('password')
    table.number('balance')
    table.text('address')
    table.number('latitude')
    table.number('longitude')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}