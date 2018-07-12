import React from 'react'
import { connect } from 'react-redux'

import { addLostPet } from '../actions/lostPets'

class LostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      species: 'Dog',
      photo: ''
    }

    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }

  updateDetails(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit(e) {
    e.preventDefault()
    this.props.dispatch(addLostPet(this.state))
  }


  render() {
    
    return (
      <form>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input name="name"  onChange={this.updateDetails}class="input" type="text" />
          </div>
        </div>

        <br/>

        <div class="field">
          <label class="label">Species</label>
          <div class="select">
            <select onChange={this.updateDetails} name="species">
              <option>Dog</option>
              <option>Cat</option>
              <option>Fish</option>
            </select>
          </div>
        </div>

        <br/>

        <div class="field">
          <label class="label">Image URL</label>
          <div class="control">
            <input name="photo" onChange={this.updateDetails}class="input is-danger" />
          </div>
        </div>

      <br/>

        <div class="field is-grouped">
          <div class="control">
            <button onClick={(e) => this.submit(e)} class="button is-primary is-link">Submit</button>
          </div>
        </div>
      </form >
    )
  }
}



export default connect()(LostForm);