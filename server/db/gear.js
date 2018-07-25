const conn = require('./connection')

const gearUserJoinKeys = [
  'gear.id as id',
  'name',
  'description',
  'status',
  'trustframework',
  'photo_url',
  'user_id',
  'user_name'
]

const gearUserJoinKeysFull = [
  ...gearUserJoinKeys,
  'first_name',
  'last_name',
  'email_address',
  'profile_pic',
]

function getGearWithUsernames(testDb) {
  const db = testDb || conn
  return db('gear')
    .join('users', 'users.id', 'gear.user_id')
    .select(...gearUserJoinKeys)
}

function getGear(testDb) {
  const db = testDb || conn
  return db('gear')
    .select()
}

function getGearByGearId(id, testDb) {
  const db = testDb || conn
  return db('gear')
    .where({ id })
    .first()
}

function getGearByGearIdWithUser(id, testDb) {
  const db = testDb || conn
  return db('gear')
    .join('users', 'gear.user_id', 'users.id')
    .where('gear.id', id)
    .select(...gearUserJoinKeysFull)
    .first()
}

function getGearByGearIdWithUsername(id, testDb) {
  const db = testDb || conn
  return db('gear')
    .join('users', 'gear.user_id', 'users.id')
    .where('gear.id', id)
    .select(...gearUserJoinKeys)
    .first()
}

function getGearByUserId(user_id, testDb) {
  const db = testDb || conn
  return db('gear')
    .where({ user_id })
}

function addGear(gear, testDb) {
  const db = testDb || conn
  return db.insert([gear], 'id').into('gear')
}

function updateGear(gear, id, testDb) {
  const db = testDb || conn
  return db('gear').where({ id }).update(gear)
}

function removeGearById(id, testDb) {
  const db = testDb || conn
  return db('gear').where({ id }).del()
}


module.exports = {
  getGearWithUsernames,
  getGear,
  getGearByGearId,
  getGearByGearIdWithUser,
  getGearByGearIdWithUsername,
  getGearByUserId,
  addGear,
  updateGear,
  removeGearById
}

