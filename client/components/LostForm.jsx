import React from 'react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router'

import { addLostPet, insertLostPet } from '../actions/lostPets'

class LostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      species: 'Dog',
      photo: '',
      submitted: false
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

    const {name, species, photo} = this.state

    const pet = {
      name,
      species,
      photo
    }

    this.props.dispatch(insertLostPet(pet))
      .then(() => {
        this.setState({
          submitted: true
        })
      })
  }

  render() {

      return this.state.submitted ? (
        <Redirect to="/lost" />
      ) : (
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