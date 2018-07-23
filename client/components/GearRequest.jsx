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
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const message = this.buildMessage()
    this.props.dispatch(manageRequest(message))
    this.props.onFinish()
  }

  buildMessage() {
    return {
      gear_id: this.props.gear_id,
      owner_id: this.props.owner_id,
      requester_id: this.props.requester_id,
      created_at: Math.round(Date.now() / 1000),
      message: this.state.message
    }
  }


  render() {
    return (
      <form className='new-request-form' onSubmit={this.handleSubmit}>
        <label>
          Send a message with your request: 
          <input onChange={this.handleChange} type="text" value={this.state.message} name='message' />
        </label>
        <br />
        <input type="submit" value='Send Request' />
        <button onClick={this.props.onFinish}>Cancel</button>
      </form>
    )
  }
}

export default connect()(GearRequest)