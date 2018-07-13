const request = require('superagent')

export const ADD_LOST_PET = 'ADD_LOST_PET'
export const RECEIVE_LOST_PETS = 'RECEIVE_LOST_PETS'

const lostUrl = '/api/lost'

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

// Thunk
export function fetchLostPets() {
    return (dispatch) => {
      return request
        .get(lostUrl)
        .then(res => {
            const lostPets = res.body
            dispatch(receiveLostPets(lostPets))
        })
        .catch(err => {
            if (err) throw err
        })
    }
  }

export function insertLostPet(pet) {
    return (dispatch) => {

        return request
            .post(lostUrl)
            .send(pet)
            .then(() => {
                dispatch(addLostPet(pet))
            })
            .catch(err => {
                if (err) throw err
            })
            
    }
}