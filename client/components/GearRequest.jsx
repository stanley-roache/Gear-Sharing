import React from 'react'
import { connect } from 'react-redux'

import { sendRequest } from '../actions/mailing'
import { manageRequest } from '../actions/requests'

const fakeMessage =  { gear_id: '3', owner_id: '3', requester_id: '1', created_at: 12387643534, message: "Hey I like your face, it's not bad. Can I have?" }

export const GearRequest = props => {
  return (
    <div>
      <button onClick={() => props.sendRequestForItem(props.id)}>Email Owner</button>
      <button onClick={props.test}>Send it</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  sendRequestForItem: id => { dispatch(sendRequest(id)) },
  test: () => {dispatch(manageRequest(fakeMessage))}
})

export default connect(null, mapDispatchToProps)(GearRequest)