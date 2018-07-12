import request from 'superagent'

export const ADD_LOST_PET = 'ADD_LOST_PET'
export const RECEIVE_LOST_PETS = 'RECEIVE_LOST_PETS'

export function receiveLostPets(lostPets) {
    return {
        type: RECEIVE_LOST_PETS, 
        lostPets
    }
}

export function addLostPet(lostPet) {
    return {
        type: ADD_LOST_PET,
        lostPet
    }
}

export function fetchLostPets() {
    return dispatch => {
      return request
        .get('api/lost')
        .then(res => {
            const lostPets = res.body
            dispatch(receiveLostPets(receiveLostPets))
        })
        .catch(err => {
            if (err) throw err
        })
    }
  }