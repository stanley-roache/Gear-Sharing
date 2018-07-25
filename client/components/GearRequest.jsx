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
      message: this.state.message
    }
  }

  render() {
    return (
      <div className='box add-gear'>
        <form className='form' onSubmit={this.handleSubmit}>
          <h1 className="title is-1 has-text-centered">Request {this.props.name}</h1>
          <hr />

          <label className="label is-medium">Send a message with your request
            <textarea required rows='8' className="textarea is-medium is-fullwidth" placeholder="e.g. when you are wanting it, what you plan to do, talking about the borrowing conditions. Be a goodie" onChange={this.handleChange} value={this.state.message} name='message'></textarea>
          </label>

          <input className="submit button-pad button is-centered is-black is-large" type='submit' value='Send Request' />
        </form>
      </div>
    )
  }
}

export default connect()(GearRequest)