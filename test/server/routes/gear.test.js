import request from 'supertest'
import server from '../../../server/server'

jest.mock('../../../server/db/gear', () => ({
  getGearByGearId: (id) => {
    return (id
      ? Promise.resolve({id, name: 'doodad', description: 'cool as'})
      : Promise.reject('database err')
    )},
  getGearWithUsers: null,
  getGear: () => Promise.resolve([1,2,3]),
  getGearByUserId: null,
  addGear: null,
  updateGear: null,
  removeGearById: null
}))

describe('gear route tests', () => {
  describe('public routes', () => {
    describe('get single item', () => {
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

      it('get single can throw err', () => {
        const id = 0

        return request(server)
          .get(`/api/gear/single/${id}`)
          .expect(500)
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