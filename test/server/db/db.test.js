var request = require('supertest')

var server = require('../../../server/server')
// var lostDb = require('../../../server/db/db/users')
var setupDb = require('.././setup-db')

// test.cd is an ava function, you are using jest
// they're set up differently
// jest is easier imo
test('GET /',() => {
  request(server)
    .get('/api/lost')
    .expect(200)
    .end((err,res) => {
      if (err) console.log(err);
      expect(res.body.length).toBe(1)
    })
})
