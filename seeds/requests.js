
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        { gear_id: '1', owner_id: '1', requester_id: '2', message: "Hey I like your drill, it's not bad. Can I have?" },
        { gear_id: '2', owner_id: '2', requester_id: '1', message: "Hey I like your face, it's not bad. Can I have?" }
      ]);
    });
};
