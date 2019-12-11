exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.integer('mobile')
    table.string('hash')
    table.integer('balance')
    table.text('address')
    table.integer('latitude')
    table.integer('longitude')
    table.string('image')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
