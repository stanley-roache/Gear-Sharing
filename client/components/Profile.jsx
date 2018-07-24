import React from 'react'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import scrollToComponent from 'react-scroll-to-component'

import GearList from './GearList'
import NewGearForm from './NewGearForm'
import EditProfileForm from './EditProfileForm'

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      addingItem: false,
      editingProfile: false
    }

    this.setFalse = this.setFalse.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  setFalse(val) {
    this.setState({
      [val]: false
    })
  }

  renderForm(ref) {
    this.setState({
      [ref]: true
    })
    scrollToComponent(this.refs[ref],{
      align: 'top',
      duration: 1000
    })
  }

  render() {
    return (
        <div className='profile-display'>
        
          {!this.props.auth.isAuthenticated && <Redirect to='/login'/>}

          {this.props.user.message && <span className="has-text-danger is-large">{this.props.user.message}</span>}
          <img className='tempimgcss' src='http://getdrawings.com/img/person-silhouette-standing-4.jpg' />
          <h2>{this.props.user.firstName}</h2>
          <h2>{this.props.user.lastName}</h2>
          <p>{this.props.user.email}</p>
          <GearList />
          {!this.state.addingItem && !this.state.editingProfile
            && <button onClick={() => this.renderForm('addingItem')}>Add Gear Item</button>}
          <div ref='addingItem'>
            {this.state.addingItem 
              && <NewGearForm finish={() => this.setFalse('addingItem')}/>}
          </div>
          {!this.state.editingProfile && !this.state.addingItem
            && <button onClick={() => this.renderForm('editingProfile')}>Edit Profile</button>}
          <div ref='editingProfile'>
            {this.state.editingProfile 
              && <EditProfileForm onFinish={() => this.setFalse('editingProfile')} />}
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => (
    {
        auth: state.auth,
        user: state.user
    }
)

export default connect(mapStateToProps)(Profile)