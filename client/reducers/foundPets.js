export const initialState = []

export default function foundPets(state = initialState, action) {
    switch (action.type) {

        case 'RECEIVE_FOUND_PETS':
            return action.foundPets;
        case 'ADD_FOUND_PET':
            return [...state, action.foundPet];
        default:
            return state;
    }
}