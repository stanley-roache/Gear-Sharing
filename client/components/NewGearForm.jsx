import React from 'react'
import { addGearItem } from '../actions/gear'
import { connect } from 'react-redux'


export class NewGearForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      photo_url: '',
      trustframework: "One",
      status: 'Available',
      user_id: this.props.user.id
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
    this.props.dispatch(addGearItem(this.state))
    this.props.onFinish()
  }

  render() {
    return (
        <div className='box add-gear'>
          <form className='form' onSubmit={this.handleSubmit}>
            <h1 className="title is-1 has-text-centered">Add Tool</h1>
            <hr />

            <label className="label is-medium">Name
              <input required className="input is-medium is-fullwidth" placeholder="What's this tool called?" type="text" name="name" onChange={this.handleChange} value={this.state.name} />
            </label>

            <label className="label is-medium">Description
              <textarea required className="textarea is-medium is-fullwidth" placeholder="e.g. runs good, needs oil..." name="description" onChange={this.handleChange} value={this.state.description}></textarea>

            </label>

            <label className="label is-medium">Photo url
              <input required className="input is-medium is-fullwidth" placeholder="Past a link to an online photo" type="text" name="photo_url" onChange={this.handleChange} value={this.state.photo_url} />
            </label>

            <div className='columns'>
              <div className='column is-6'>
                <label className="label is-medium" name='trustframework'>Lending conditions</label>
              </div>

              <div className='column is-6'>
                <div className='select is-pulled-right'>
                  <select name='trustframework' onChange={this.handleChange}>
                    <option className='option' value='One'>Free borrowing</option>
                    <option className='option' value='Two'>Upkeep Koha</option>
                    <option className='option' value='Three'>Conditional (contact to talk)</option>
                  </select>
                </div>
              </div>
            </div>

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

export default connect(mapStateToProps)(NewGearForm)
