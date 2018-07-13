exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('found', table => {
    table.increments('id')
    table.string('species')
    table.string('photo')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('found')
};
