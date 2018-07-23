import request from '../utils/api'

export function postRequest(message) {
    return dispatch => {
        dispatch(requestMessageSave())
        return request('post', 'request/new', message)
            .then((res) => {
                dispatch(setRequest(message))
            })
            .catch(err => {
                dispatch(requestError(err.message))
            })
    }
}

export function requestMessageSave() {
    return {
        type: 'REQUEST_MESSAGE_SAVE'
    }
}

export function setRequest(request) {
    return {
        type: 'SET_REQUEST',
        request
    }
}


export function requestError(message) {
    return {
        type: 'REQUEST_ERROR',
        isFetching: false,
        isSaving: false,
        message
    }
}