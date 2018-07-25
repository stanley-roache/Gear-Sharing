import React from 'react'
import { connect } from 'react-redux'

import { manageRequest } from '../actions/requests'

class GearRequest extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.buildMessage = this.buildMessage.bind(this)
    this.cancel = this.cancel.bind(this)
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit() {
    const message = this.buildMessage()
    this.props.dispatch(manageRequest(message))
    this.props.onFinish()
  }

  buildMessage() {
    return {
      gear_id: this.props.gear_id,
      owner_id: this.props.owner_id,
      requester_id: this.props.requester_id,
      message: this.state.message
    }
  }

  cancel() {
    this.setState({
      message: ''
    })
    this.props.onFinish()
  }


  render() {
    return (
      <div className='send-message-form'>
        <label>
          Send a message with your request:
          <input onChange={this.handleChange} type="text" value={this.state.message} name='message' />
        </label>
        <br />
        <button onClick={this.handleSubmit}>Send Request</button>
        <button onClick={this.cancel}>Cancel</button>
      </div>
    )
  }
}

export default connect()(GearRequest)