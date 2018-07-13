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

// get
function getFound(testDb) {
  const db = testDb || conn
  return db('found').select()
}

//post
function addFound(pet, testDb) {
  const db = testDb || conn
  return db('found').insert(pet)
}

module.exports = {
  getLost,
  addLost,
  getFound,
  addFound
}
