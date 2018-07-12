const conn = require('./connection')

// get
function getLost(testDb) {
  const db = testDb || conn
  return db('lost').select()
}

//post
function addLost(pet, testDb) {
  const db = testDb || conn
  return db('lost').insert(pet)
}

module.exports = {
  getLost,
  addLost
}
