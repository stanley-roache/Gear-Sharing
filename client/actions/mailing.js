import request from '../utils/api'

function requestMailOut() {
    return {
        type: 'REQUEST_MAILOUT'
    }
}

function sentMail(gear_id) {
    return {
        type: 'MAILOUT_SUCCESS',
        gear_id
    }
}

function mailingError(message) {
    return {
        type: 'MAILOUT_ERROR',
        message
    }
}

export function sendRequest(message, didSucceed) {
    const gearId = message.gear_id
    const messageBody = message.message
    return dispatch => {
        dispatch(requestMailOut())
        request('post', 'mail/request', {gearId, messageBody})
            .then(() => {
                dispatch(sentMail(gearId))
                didSucceed(true)
            })
            .catch(err => {
                dispatch(mailingError(err.response.body.message))
                didSucceed(false)
            })
    }
}