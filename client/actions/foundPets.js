const request = require('superagent')

export const ADD_FOUND_PET = 'ADD_FOUND_PET'
export const RECEIVE_FOUND_PETS = 'RECEIVE_FOUND_PETS'

const foundUrl = '/api/found'

export function receiveFoundPets(foundPets) {
    return {
        type: RECEIVE_FOUND_PETS, 
        foundPets
    }
}

export function addFoundPet(foundPet) {
    return {
        type: ADD_FOUND_PET,
        foundPet
    }
}

// Thunk
export function fetchFoundPets() {
    return (dispatch) => {
      return request
        .get(foundUrl)
        .then(res => {
            const foundPets = res.body
            dispatch(receiveFoundPets(foundPets))
        })
        .catch(err => {
            if (err) throw err
        })
    }
  }

export function insertFoundPet(pet) {
    return (dispatch) => {

        return request
            .post(foundUrl)
            .send(pet)
            .then(() => {
                dispatch(addFoundPet(pet))
            })
            .catch(err => {
                if (err) throw err
            })
            
    }
}