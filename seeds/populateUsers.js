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
          name: 'Bradley Adams',
          user_name: 'wayneric',
          email_address: 'brad@devacademy.co.nz',
          contact_details: '0226968234',
          hash: hashSync('Krang', saltRounds)
        },
        {
          id: 2,
          user_name: 'Hayden',
          email_address: 'hblummont1@gmail.com',
          contact_details: 'Play RuPaul\'s Drag race theme loudly',
          hash: hashSync('Krang', saltRounds)
        },
        {
          id: 3,
          user_name: 'Reuben',
          email_address: 'reuban@imrich.co.usa',
          contact_details: 'Send a driver',
          hash: hashSync('Krang', saltRounds)
        }
      ]);
    });
};
