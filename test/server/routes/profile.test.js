import request from 'supertest'
import server from '../../../server/server'
import {createToken} from '../../../server/auth/token'

const secret = "I hate to bust your bubble Morty but love is a chemical reaction that compels animals to mate. It hits hard, then slowly fades leaving you floundering in a failing marriage. Break the cycle, Morty! Focus on Science."

jest.mock('../../../server/db/gear.js', () => ({
  getGearByUserId: () => Promise.resolve([{id: 1,
    status: "Available",
    trustframework: "One",
    name: 'Dyna Drill',
    description: 'A drill that can be used on concrete',
    photo_url: 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2013/juigjhfj.jpg',
    user_id: 1}]
  )
}))

test.skip('GET gear by a user id', () => {
  return request(server)
    .get('/api/lost')
    .expect(200)
    .then(res => {
      expect(res.body).toEqual([
        {id: 4}
      ])
    })
})

test('public', () => {
    return request(server)
        .get('/api/profile/public')
        .expect(200)
})

test('Authenticate complains about no credentials', () => {
    return request(server)
      .get('/api/profile/gear')
      .expect(403)
      .then(res => {
        expect(res.body.info).toBe('Missing credentials')
      })
})

const fakeToken = createToken({
    user_name: "asdfggg",
    user_id: 3
}, secret)

const fakeTokenWithBadSecret = createToken({
    user_name: "asdfggg",
    user_id: 3
}, "asdfasdgasdf")

test('secret', () => {
    return request(server)
        .get('/api/profile/secret')
        .expect(403)
})

test('passes authentication gate', () => {
    return request(server)
        .get('/api/profile/gear')
        .set('Authorization', `Bearer ${fakeToken}`)
        .expect(200)
})
  