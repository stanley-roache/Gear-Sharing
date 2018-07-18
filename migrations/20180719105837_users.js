
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('users', table => {
      table.increments('id')
      table.string('name')
      table.string('user_name')
      table.string('email_address')
      table.string('contact_details')
      table.string('hash')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
  };
