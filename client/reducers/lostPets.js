export const initialState = []

export default function lostPets(state = initialState, action) {
    switch (action.type) {

        case 'RECEIVE_LOST_PETS':
            return action.lostPets;
        case 'ADD_LOST_PET':
            return [...state, action.lostPet];
        default:
            return state;
    }
}