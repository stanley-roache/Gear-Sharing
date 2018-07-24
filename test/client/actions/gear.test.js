import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../../client/actions/gear'
import {requestGear, setGear, gearError} from '../../../client/actions/gear'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('../../../client/utils/api', () => (method, url, data) => {
    return Promise.resolve({
        body: [
            'Drill',
            'Another Drill'
        ]
    })
})

test('test get some gear', () => {
    const store = mockStore({})
    const fakeGear = [
        'Drill',
        'Another Drill'
    ]
  
    const expectedActions = [
        { type: 'GEAR_REQUEST', isFetching: true, isSaving: false },
        { type: 'SET_GEAR', gear: fakeGear, isFetching: false, isSaving: false }
    ]

    const dispatchedStore = store.dispatch(
        actions.getGear()
    )
    return dispatchedStore.then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    })
})


describe('actions', () => {
    it('setting isFetching to true', () => {
        const expectedAction = {
            type: 'GEAR_REQUEST',
            isFetching: true,
            isSaving: false
        }
        expect(actions.requestGear()).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('is setting gear into state', () => {
        const gear =   {
            id: 1,
            status: "Available",
            trustframework: "One",
            name: 'Dyna Drill',
            description: 'A drill that can be used on concrete',
            photo_url: 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2013/juigjhfj.jpg',
            user_id: 1
          }
        const expectedAction = {
            type: 'SET_GEAR',
            gear:gear,
            isFetching: false,
            isSaving: false
        }
        expect(actions.setGear(gear)).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('displaying a  gear error', () => {
        const message = 'error grabbing full gear list'
        const expectedAction = {
            type: 'GEAR_ERROR',
            isFetching: false,
            isSaving: false,
            message
        }
        expect(actions.gearError(message)).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('setting isSaving to true for adding gear', () => {
        const expectedAction = {
            type: 'REQUEST_GEAR_SAVE',
            isFetching: false,
            isSaving: true
        }
        expect(actions.requestGearSave()).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create a new gear item', () => {
        const item = 'Blender'
        const expectedAction = {
            type: 'GEAR_ADD',
            item
        }
        expect(actions.gearAdd(item)).toEqual(expectedAction)
    })
})
