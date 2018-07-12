const {hashSync} = require('bcrypt')
const saltRounds = 10

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          user_name: 'symesharr',
          email_address: 'harrison@devacademy.co.nz',
          contact_details: 'Ring the bell ;)',
          hash: hashSync('Krang', saltRounds)
        }
        {
          id: 2,
          user_name: 'haydenb',
          email_address: 'hblummont1@gmail.com',
          contact_details: 'Play RuPaul\'s Drag race theme loudly',
          hash: hashSync('Krang', saltRounds)
        }
        {
          id: 3,
          user_name: 'chuck',
          email_address: 'rich@imrich.co.usa',
          contact_details: 'Send a driver',
          hash: hashSync('Krang', saltRounds)
        }
      ]);
    });
};
