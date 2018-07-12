import request from 'supertest'
import server from '../../server/server'


test('GET request to lost route works', () => {

  return request(server)
    .get('/api/lost')
    .expect(200)
    // .then(res => {
    //   res.json({lostPets})
    // })
 
})