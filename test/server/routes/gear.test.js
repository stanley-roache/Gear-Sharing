import request from 'supertest'
import server from '../../../server/server'

jest.mock('../../../server/db/gear', () => ({
  getGearByGearId: (id) => Promise.resolve({id: 1, name: 'doodad', description: 'cool as'}),
  getGearWithUsers: null,
  getGear: () => Promise.resolve([1,2,3]),
  getGearByUserId: null,
  addGear: null,
  updateGear: null,
  removeGearById: null
}))

describe('gear route tests', () => {
  describe('public routes', () => {
    it('get request for single gear item', () => {
      const id = 1

      return request(server)
        .get(`/api/gear/single/${id}`)
        .expect(200)
        .then(res => {
          const gearItem = res.body

          expect(gearItem.id).toBe(id)
        })
    })

    it('get request for all gear', () => {
      return request(server)
        .get(`/api/gear/all`)
        .expect(200)
        .then(res => {
          const gearList = res.body

          expect(gearList).toHaveLength(3)
        })
    })
  })
})