
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('gear', table => {
      table.increments('id')
      table.string('status')
      table.sting('trustframework')
      table.string('name')
      table.string('description')
      table.string('photo')
      table.integer('user_id')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('gear')
  };
