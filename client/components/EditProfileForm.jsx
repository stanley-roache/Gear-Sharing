import React from 'react'
import { editProfileAction } from '../actions/profile'
import { connect } from 'react-redux'


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
      <div className='box edit-profile'>
        <form className='form' onSubmit={this.handleSubmit}>
          <h1 className="title is-1 has-text-centered">Edit Profile</h1>
          <hr/>

           <label className="label is-medium">First Name
              <input required className="input is-medium is-fullwidth" type="text" name='first_name' onChange={this.handleChange} value={this.state.first_name} />
            </label>

            <label className="label is-medium">Last Name
              <input required className="input is-medium is-fullwidth" type="text" name="last_name" onChange={this.handleChange} value={this.state.last_name} />
            </label>

            <label className="label is-medium">Email Address
              <input required className="input is-medium is-fullwidth" type="email" name="email_address" onChange={this.handleChange} value={this.state.email_address} />
            </label>

            <label className="label is-medium">Profile Picture
              <input required className="input is-medium is-fullwidth" placeholder="Past a link to an online photo" type="text" name="photo_url" onChange={this.handleChange} value={this.state.profile_pic} />
            </label>
            <hr/>
          <input className="submit button-pad button is-centered is-black is-large" type="submit" value='Submit' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(EditProfileForm)