const db = require('../../../server/db/db')
const env = require('./test-environment')

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

// boilerplate code above this point

const fakeUser = {
  id: 1,
  username: 'billyboi',
  first_name: 'bill',
  last_name: 'murray',
  email_address: 'bill@murray.com'
}

test('getUserByName db func return', () => {

})










// test('getLost pets db function', () => {
//   return db.getLost(testDb)
//     .then(lostPets => {
//       expect(lostPets).toHaveLength(10)
//     })
// })

// test('add a lost pet to db', () => {
//   return db.addLost({name: 'Hayden'}, testDb)
//     .then(lostPet => {
//         expect(lostPet).toEqual([11])
//         return testDb('lost')
//           .then(lostPets => {
//             expect(lostPets).toHaveLength(11)
//             expect(lostPets[10].name).toBe('Hayden')
//           })
//         })
//       })

//     test('getFound pets db function', () => {
//         return db.getFound(testDb)
//           .then(foundPets => {
//             expect(foundPets).toHaveLength(10)
//           })
//     })

//       test('add a found pet to db', () => {
//         return db.addFound(testFoundPet, testDb)
//           .then(foundPet => {
//               expect(foundPet).toEqual([11])
//               return testDb('found')
//                 .then(foundPets => {
//                   expect(foundPets).toHaveLength(11)
//                 })
//               })
//             })
