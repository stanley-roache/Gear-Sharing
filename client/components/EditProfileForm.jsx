import React from 'react'
import {editProfileAction} from '../actions/profile'
import {connect} from 'react-redux'


export class EditProfileForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        first_name: props.user.firstName,
        last_name: props.user.lastName,
        email_address: props.user.email,
        profile_pic: '' 
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(editProfileAction(this.state))
    this.props.onFinish()
  }

  render() {
    return (
      <form className='edit-profile-form' onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input onChange={this.handleChange} type="text" value={this.state.first_name} name='first_name' />
        </label>
        <br />
        <label>
          Last Name:
          <input onChange={this.handleChange} type="text" value={this.state.last_name} name='last_name' />
        </label>
        <br />
        <label>
          Email Address:
          <input onChange={this.handleChange} type="text" value={this.state.email_address} name='email_address' />
        </label>
        <br />
        <label>
          Profile Picture:
          <input onChange={this.handleChange} type="text" value={this.state.profile_pic} name='profile_pic' />
        </label>
        <br />
        <input type="submit" value='Confirm Details' />
        <button onClick={this.props.onFinish}>Cancel</button>
      </form>
    )
  }
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(EditProfileForm)