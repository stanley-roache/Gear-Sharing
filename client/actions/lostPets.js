export const RECEIVE_LOST_PETS = 'RECEIVE_LOST_PETS'
export const ADD_LOST_PET = 'ADD_LOST_PET'

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