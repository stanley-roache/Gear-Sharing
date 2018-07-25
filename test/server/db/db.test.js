const gear = require('../../../server/db/gear')
const users = require('../../../server/db/users')
const requests = require('../../../server/db/requests')
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

const fakeNewUser = {
  username: 'billyboi',
  first_name: 'bill',
  last_name: 'murray',
  email_address: 'bill@murray.com',
  password: 'klsjdgljsdg'
}

const fakeGearItem = {
  status: "Available",
  trustframework: "One",
  name: 'Dyna Drill',
  description: 'A drill that can be used on concrete',
  photo_url: 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2013/juigjhfj.jpg',
  user_id: 1
}

const expectedJoinKeys = [
  'id',
  'user_name',
  'status',
  'trustframework',
  'name',
  'description',
  'photo_url',
  'user_id'
]

const fakeGearItemUpdate = {
  name: 'Dyno Drilla'
}

const fakeUserUpdate = {
  first_name: 'Ichabod'
}

test('addGear function returns an ID of type numbers', () => {
  return gear.addGear(fakeGearItem, testDb)
    .then(ids => {
      const expected = 'number'
      const actual = typeof ids[0]
      expect(actual).toBe(expected)
    })
})

test('updateGear function causes one record to be changed', () => {
  return gear.updateGear(fakeGearItemUpdate, 1, testDb)
    .then(numUpdated => {
      expect(numUpdated).toBe(1)
    })
})

test('getGear function retrieves all gear', () => {
  return gear.getGear(testDb)
    .then(gearArray => {
      expect(gearArray).toHaveLength(24)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('getGearByGearId function gets a gear by ID', () => {
  return gear.getGearByGearId(1, testDb)
    .then(gear => {
      expect(gear).toBeTruthy()
      expect(gear.id).toBe(1)
    })
})

test('getGearWithUsernames function joins the users and gear', () => {
  gear.getGearWithUsernames(testDb)
    .then(actualArr => {
      actualArr.forEach(actual => {
        expectedJoinKeys.forEach(key => {
          expect(actual.hasOwnProperty(key)).toBeTruthy()
        })
      })
    })
})

test('getUserByName function does what it says it does', () => {
  return users.getUserByName('haydiggidydoc', testDb)
    .then(users => {
      expect(users.user_name).toEqual('haydiggidydoc')
  })
})

test('getUserById function gets a user by their Id', () => {
  return users.getUserById(2, testDb)
    .then(users => {
      expect(users.first_name).toEqual('Haydeen')
    })
})

test('getUsers function returns users', () => {
  return users.getUsers(testDb)
    .then(users => {
      expect(users).toHaveLength(4)
    })
})

test('updateUser function causes one user to change', () => {
  return users.updateUser(1, fakeUserUpdate, testDb)
    .then(numChanged => {
        expect(numChanged).toEqual(1)
    })
})

test('createUser function creates a new user', () => {
  return users.createUser(fakeNewUser, testDb)
    .then(users => {
      expect(users).toHaveLength(1)
    })
})

test('userExists function lets you know if a username is taken', () => {
  return users.userExists('Diddly', testDb)
    .then(userExists => {
      expect(userExists).toBeTruthy()
    })
})

test('getGearByGearIdWithUsername function joins the owner and gear', () => {
  gear.getGearByGearIdWithUsername(1, testDb)
    .then(actual => {
        expectedJoinKeys.forEach(key => {
          expect(actual.hasOwnProperty(key)).toBeTruthy()
        })
    })
})

// REQUEST TESTS

test('insertRequest does it"s job', () => {
  const fakeRequest =  { 
    gear_id: '1', 
    owner_id: '1', 
    requester_id: '2', 
    message: "Hey I like your drill, it's not bad. Can I have?" 
  }

  return requests.insertRequest(fakeRequest, true, testDb)
    .then(details => {
      const expected = 'number'
      const actual = typeof details.id
      expect(actual).toBe(expected)
      expect(details.owner_user_name).toBeDefined()
    })
})

test('updateRequest', () => {
  const update = {
    message: 'new message'
  }
  const id = 1

  return requests.updateRequest(id, update, testDb)
    .then(numUpdates => {
      expect(numUpdates).toBe(1)
    })
})

test('deleteRequest', () => {
  const id = 1

  return requests.deleteRequest(id, testDb)
    .then(numDeletes => {
      expect(numDeletes).toBe(1)
    })
})

test.skip('deleteRequest throws error if request with matching id doesnt exist', () => {
  const id = 1

  return requests.deleteRequest(id, testDb)
    .then(() => {
      expect(true).toBeFalsy()
    })
    .catch(err => {
      expect(err).toBeTruthy()
    })
})

describe('request joined queiries', () => {
  const user_id = 1

  const expectedKeyBase = [
    'id',
    'gear_id',
    'owner_id',
    'requester_id',
    'created_at',
    'message',
    'gear_name'
  ]

  test('getReceivedRequestsWithUsername has expected length', () => {
    return requests.getReceivedRequestsWithUsername(user_id, testDb)
      .then(requests => {
        expect(requests).toHaveLength(2)
      })
  })

  test('getReceivedRequestsWithUsername has expected keys', () => {
    const expectedKeys = [...expectedKeyBase, 'requester_user_name'].sort()
    return requests.getReceivedRequestsWithUsername(user_id, testDb)
      .then(itemArr => {
        const actual = Object.keys(itemArr[0]).sort()
        expect(actual).toEqual(expectedKeys)
    })
  })

  test('getSentRequestsWithUsername has expected length', () => {
    return requests.getSentRequestsWithUsername(user_id, testDb)
      .then(requests => {
        expect(requests).toHaveLength(1)
      })
  })

  test('getSentRequestsWithUsername has expected keys', () => {
    const expectedKeys = [...expectedKeyBase, 'owner_user_name'].sort()
    return requests.getSentRequestsWithUsername(user_id, testDb)
      .then(itemArr => {
        const actual = Object.keys(itemArr[0]).sort()
        expect(actual).toEqual(expectedKeys)
    })
  })
})
