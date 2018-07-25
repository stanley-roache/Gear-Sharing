const server = require('../../../server/server')
const request = require('supertest')(server)
const { createToken } = require('../../../server/auth/token')

require('dotenv').config()

jest.mock('../../../server/db/gear', () => ({
    getGearByGearIdWithUser: id => Promise.resolve({ name: 'test gear' })
}))

jest.mock('../../../server/db/users', () => ({
    getUserById: id => Promise.resolve({ name: 'test user' })
}))

jest.mock('../../../server/mail/sendGrid', () => ({
    sendRequest: someObject => Promise.resolve()
}))

describe('mail route tests', () => {
    const fakeUser = {
        user_id: 1,
        user_name: 'Phoney'
    }

    const fakeToken = createToken(fakeUser, process.env.JWT_SECRET)

    const fakeMessage = {message: 'some text'}

    it('returns OK when database succeeds', () => {
        return request.post('/api/mail/request')
            .set('Authorization', `Bearer ${fakeToken}`)
            .send(fakeMessage)
            .expect(200)
    })
})