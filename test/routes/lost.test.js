import request from 'supertest'
import server from '../../server/server'

jest.mock('../../server/db/db.js', () => ({
  getLost: () => Promise.resolve([{id: 4}]
  ),
  addLost: () => Promise.resolve([5])
}))

test('GET request to lost route works', () => {

  return request(server)
    .get('/api/lost')
    .expect(200)
    .then(res => {
      expect(res.body).toEqual([
        {id: 4}
      ])
    })
 
})


test('POST /lost/ saves a pet and returns pet ID', () => {
  const expected = [5]
  return request(server)
  .post('/api/lost')
  .send({
    name: 'Kelly',
    species: 'bunny'
  })
  .expect('Content-Type', /json/)
  .then(res => {
    const actual = res.body
    expect(actual).toEqual(expected)
  })
})