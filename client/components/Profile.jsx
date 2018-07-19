import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

import GearList from './GearList'
import NewGearForm from './NewGearForm'

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      addingItem: false
    }

    this.cancelAdd = this.cancelAdd.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  cancelAdd() {
    this.setState({
      addingItem: false
    })
  }

  renderForm() {
    this.setState({
      addingItem: true
    })
  }

  render() {
    return (
        <div className='profile-display'>
            <h2>{this.props.user.firstName}</h2>
            <h2>{this.props.user.lastName}</h2>
            <p>{this.props.user.email}</p>
            <GearList />
            {!this.state.addingItem && <button onClick={() => this.renderForm()}>Add Gear Item</button>}
            {this.state.addingItem && <NewGearForm finish={() => this.cancelAdd()}/>}
        </div>
    )
  }
}
  
  // <Route exact path="/newItem" component={NewGearForm} />
const mapStateToProps = (state) => (
    {
        auth: state.auth,
        user: state.user
    }
)

export default connect(mapStateToProps)(Profile)