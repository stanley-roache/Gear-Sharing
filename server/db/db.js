const conn = require('./connection')

function getLost(testDb) {
  const db = testDb || conn
  return db('lost').select()
}

function addLost(pet, testDb) {
  const db = testDb || conn
  return db('lost').insert(pet)
}

module.exports = {
  getLost,
  addLost
}
