import React from 'react'
import { connect } from 'react-redux'
import { editGearItem } from '../actions/gear'

export class GearEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.item

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
    this.props.dispatch(editGearItem(this.state))
    this.props.onFinish()
  }

  render() {
    return (
      <div className='box add-gear'>
        <form className='form' onSubmit={this.handleSubmit}>
          <h1 className="title is-1 has-text-centered">Edit Tool</h1>
          <hr />

          <label className="label is-medium">Name
              <input required className="input is-medium is-fullwidth" type="text" onChange={this.handleChange} value={this.state.name} name='name' />
          </label>

          <div className='columns'>
            <div className='column is-6'>
              <label className='label is-medium' name='status'>Availability</label>
            </div>

            <div className='column is-6'>
              <div className='select is-pulled-right'>
                <select name='status' onChange={this.handleChange} value={this.state.status}>
                  <option className='option' value='Available'>Available</option>
                  <option className='option' value='Not Available'>Not Available</option>
                </select>
              </div>
            </div>
          </div>

          <label className='label is-medium'>Description
            <textarea className="textarea is-small is-fullwidth" rows='3' name='description' onChange={this.handleChange} value={this.state.description}></textarea>
          </label>

          <label className="label is-medium">Photo url
            <input className="input is-medium is-fullwidth" type="text" name="photo_url" onChange={this.handleChange} value={this.state.photo_url} />
          </label>

          <div className='columns'>
            <div className='column is-6'>
              <label className="label is-medium" name='trustframework'>Lending conditions</label>
            </div>

            <div className='column is-6'>
              <div className='select is-pulled-right'>
                <select name='trustframework' onChange={this.handleChange} value={this.state.trustframework}>
                  <option className='option' value='One'>Free borrowing</option>
                  <option className='option' value='Two'>Upkeep Koha</option>
                  <option className='option' value='Three'>Conditional (Contact Owner)</option>
                </select>
              </div>
            </div>
          </div>

          <hr />
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

export default connect(mapStateToProps)(GearEdit)