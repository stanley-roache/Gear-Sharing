const conn = require('./connection')

// add gear post
function addGear(gear, testDb) {
  const db = testDb || conn
  return db('gear').insert(gear)
}

function updateGear(gear, id, testDb) {
  const db = testDb || conn
  return db('gear').where({id}).update(gear)
}

module.exports = {
  addGear,
  updateGear
}
