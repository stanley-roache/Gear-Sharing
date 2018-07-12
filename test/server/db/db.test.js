const db = require('../../../server/db/db')

const env = require('./test-environment')

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

test('getLost pets db function', () => {
  return db.getLost(testDb)
    .then(lostPets => {
      expect(lostPets).toHaveLength(1)
    })
})

test('add a lost pet to db', () => {
  return db.addLost({name: 'Hayden'}, testDb)
    .then(lostPet => {
        expect(lostPet).toEqual([2])
        return testDb('lost')
          .then(lostPets => {
            expect(lostPets).toHaveLength(2)
            expect(lostPets[1].name).toBe('Hayden')
          })
        })
      })
