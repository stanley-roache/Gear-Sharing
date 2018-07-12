import React from 'react'
import { connect } from 'react-redux'

import { addLostPet, insertLostPet } from '../actions/lostPets'

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
    this.props.dispatch(insertLostPet(this.state))
  }

  render() {

    return (
      <div className="box formBox">
        <form>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input name="name" onChange={this.updateDetails} className="input" type="text" />
            </div>
          </div>

          <br />

          <div className="field">
            <label className="label">Species</label>
            <div className="select">
              <select onChange={this.updateDetails} name="species">
                <option>Dog</option>
                <option>Cat</option>
                <option>Fish</option>
                <option>Rat</option>
                <option>Rock</option>
              </select>
            </div>
          </div>

          <br />

          <div className="field">
            <label className="label">Image URL</label>
            <div className="control">
              <input name="photo" onChange={this.updateDetails} className="input is-danger" />
            </div>
          </div>

          <br />

          <div className="field is-grouped">
            <div className="control buttonControl">
              <button onClick={(e) => this.submit(e)} className="button formButton is-primary is-link">Submit</button>
            </div>
          </div>
        </form >
      </div>
    )
  }
}

export default connect()(LostForm)