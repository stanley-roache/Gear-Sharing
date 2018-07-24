
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        { gear_id: '1', owner_id: '1', requester_id: '2', message: "Hey I like your drill, it's not bad. Can I have?" },
        { gear_id: '2', owner_id: '2', requester_id: '1', message: "I'd love to use this fine piece of equipment on the 1st of july 2019 thanks." },
        { gear_id: '7', owner_id: '3', requester_id: '4', message: "Is this available next Monday? Need to clean the roof for the landlord..." },
        { gear_id: '15', owner_id: '4', requester_id: '3', message: "How many heffalumps does it take to change a lightbulb? One, with this fine piece of equipment. Can I borrow?" },
        { gear_id: '16', owner_id: '2', requester_id: '3', message: "Hey I'm swinging through Brooklyn next week and would love to wear this amazing thing to a party, is that ok with you?" },
        { gear_id: '4', owner_id: '1', requester_id: '4', message: "Squip squop squoop, i'd like to use" },
        { gear_id: '21', owner_id: '4', requester_id: '2', message: "Hi my name Jeffrey, I've been using this app for some time now, Can I borrow this thing? I'm trustworthy" }
      ]);
    });
};
