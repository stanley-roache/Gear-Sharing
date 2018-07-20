const initialState = {}

export default function gear(state = initialState, action) {
    switch (action.type) {
        case 'GEAR_REQUEST':
            return {
                ...state,
                isFetching: action.isFetching,
                isSaving: action.isSaving
            }
        case 'SET_GEAR':
            return {
                ...state,
                gear: action.gear,
                isFetching: action.isFetching,
                isSaving: action.isSaving
            }
        case 'GEAR_ERROR':
            return {
                ...state,
                isFetching: action.isFetching,
                isSaving: action.isSaving,
                errorMessage: action.message
            }
        default:
            return state
    }
}