
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lost').del()
    .then(function () {
      // Inserts seed entries
      return knex('lost').insert([
        {
          id: 1,
          name: 'Rocco',
          species: 'Ratboi',
          photo: 'http://breakfastbunchrats.weebly.com/uploads/1/6/7/5/16750810/2871210.jpg',
          user_id: 1
        },
      ]);
    });
};
