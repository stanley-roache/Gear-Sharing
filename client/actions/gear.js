import request from '../utils/api'

export function getGear() {
  return dispatch => {
    dispatch(requestGear())
    return request('get', 'gear')
      .then((res) => {
        let gear = res.body
        dispatch(setGear(gear))
      })
      .catch(err => {
        dispatch(gearError(err.response.body.message))
      })
  }
}

  export function requestGear () {
    return {
      type: 'GEAR_REQUEST',
      isFetching: true,
      isSaving: false
    }
  }

  export function setGear (gear) {
    return {
      type: 'SET_GEAR',
      gear:gear,
      isFetching: true,
      isSaving: false
    }
  }

  export function gearError (message) {
    return {
      type: 'GEAR_ERROR',
      isFetching: false,
      isSaving: false,
      message
    }
  }