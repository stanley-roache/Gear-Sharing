import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import scrollToComponent from 'react-scroll-to-component'

import GearList from './GearList'
import NewGearForm from './NewGearForm'
import StarRatingComponent from 'react-star-rating-component';

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      addingItem: false,
      rating: 4,
      hovering: false,
      hoverRating: null
    }

    this.cancelAdd = this.cancelAdd.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.rate = this.rate.bind(this)
    this.endHover = this.endHover.bind(this)
    this.changeHoverRating = this.changeHoverRating.bind(this)
  }

  endHover() {
    this.setState({ hoverRating: null })
  }

  changeHoverRating(hoverRating) {
    this.setState({ hoverRating })
  }

  rate(rating) {
    this.setState({ rating, hoverRating: null })
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
    scrollToComponent(this.refs.form, {
      align: 'top',
      duration: 1000
    })
  }

  render() {
    // to wait on gear array & user info load:
    if (this.props.user.isFetching) {
      return (
        <p>Fetching!!!!!!!!!!!</p>
      )
    }

    // once loaded:
    else {
      return (
        <div className='section'>
          {/* {!this.props.auth.isAuthenticated && <Redirect to='/login'/>} */}
          {this.props.user.message && <span className="has-text-danger is-large">{this.props.user.message}</span>}

          <div className='section'>

            <div className='columns is-multiline'>

              <div className='column is-6'>
                <img className='tempimgcss' src={this.props.user.profilePic} />
              </div>

              <div className='column is-6'>
                <div className='columns is-multiline'>
                  <div className='column is-8'>
                    <h1 className='title is-1'>@{this.props.user.username}</h1>
                  </div>

                  <div className='column is-4 tab'>
                    <p className='is-small is-pulled-right tab'>Profile</p>
                    <p className='is-small is-pulled-right tab'>My Messages</p>
                  </div>

                  <div className='column is-12'>
                    <h5 className='title is-5' id='name'>{this.props.user.firstName} {this.props.user.lastName}</h5>
                    <p>{this.props.user.email}</p>
                    <p className='rating'>Trust Rating: </p>
                      <span className='rating'><StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={this.hoverRating || this.rating}
                        onStarClick={this.rate}
                        onStarHover={this.changeHoverRating}
                        onStarHoverOut={this.endHover}
                        starColor='gold'
                      />
                    </span>
                    <br/>
                    
                    <a className='button edit'>Edit Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='section'>
            <GearList />
          </div>

          <div className='section'>
            {!this.state.addingItem
              && <button onClick={() => this.renderForm()}>Add Gear Item</button>}
            <div ref='form'>
              {this.state.addingItem
                && <NewGearForm finish={() => this.cancelAdd()} />}
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => (
  {
    auth: state.auth,
    user: state.user
  }
)

export default connect(mapStateToProps)(Profile)
