import request from '../utils/api'
import {sendRequest} from './mailing'

function postRequest(message, didSucceed) {
    return dispatch => {
        dispatch(requestMessageSave())
        return request('post', 'request/new', message)
            .then((res) => {
                didSucceed(true)
            })
            .catch(err => {
                dispatch(requestError(err.message))
                didSucceed(false)
            })
    }
}

function requestMessageSave() {
    return {
        type: 'REQUEST_MESSAGE_SAVE'
    }
}

function setRequest(request) {
    return {
        type: 'SET_REQUEST',
        request
    }
}


function requestError(message) {
    return {
        type: 'REQUEST_ERROR',
        isFetching: false,
        isSaving: false,
        message
    }
}

export function manageRequest(message) {
    // send email
    // THEN send to DB
    // then send to state
    return dispatch => {
        const chain = new Promise((resolve, reject) => {
            dispatch(sendRequest(message.gear_id, succeeded => {
                succeeded ? resolve(): reject()
            }))
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                dispatch(postRequest(message, succeeded => {
                    succeeded ? resolve(): reject()
                }))
            })
        })
        .then(() => {
            dispatch(setRequest(message))
        })
    }
}