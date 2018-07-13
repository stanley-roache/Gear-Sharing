const conn = require('./connection')

// lost get
function getLost(testDb) {
  const db = testDb || conn
  return db('lost').select()
}

// lost post
function addLost(pet, testDb) {
  const db = testDb || conn
  return db('lost').insert(pet)
}

function getFound(testDb) {
  const db = testDb || conn
  return db('found').select()
}

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
