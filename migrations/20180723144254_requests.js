
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('requests', table => {
      table.increments('id').primary()
      table.integer('gear_id')
      table.integer('owner_id')
      table.integer('requester_id')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.string('message')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('requests')
  };
