const db = require('../../../server/db/db')

const env = require('./test-environment')

const testFoundPet = {
  species: 'Dog',
  photo: 'https://i.pinimg.com/736x/65/76/82/6576829e1c5c8184a6e4d1eae5d45c32--dumbo-rat-ratti.jpg',
  user_id: 3
}

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

test('getLost pets db function', () => {
  return db.getLost(testDb)
    .then(lostPets => {
      expect(lostPets).toHaveLength(10)
    })
})

test('add a lost pet to db', () => {
  return db.addLost({name: 'Hayden'}, testDb)
    .then(lostPet => {
        expect(lostPet).toEqual([11])
        return testDb('lost')
          .then(lostPets => {
            expect(lostPets).toHaveLength(11)
            expect(lostPets[10].name).toBe('Hayden')
          })
        })
      })

    test('getFound pets db function', () => {
        return db.getFound(testDb)
          .then(foundPets => {
            expect(foundPets).toHaveLength(10)
          })
    })

      test('add a found pet to db', () => {
        return db.addFound(testFoundPet, testDb)
          .then(foundPet => {
              expect(foundPet).toEqual([11])
              return testDb('found')
                .then(foundPets => {
                  expect(foundPets).toHaveLength(11)
                })
              })
            })
