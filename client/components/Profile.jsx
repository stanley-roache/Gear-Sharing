import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import scrollToComponent from 'react-scroll-to-component'

import GearList from './GearList'
import NewGearForm from './NewGearForm'
import EditProfileForm from './EditProfileForm'
import StarRatingComponent from 'react-star-rating-component';

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      addingItem: false,
      editingProfile: false,
      rating: 4,
      hovering: false,
      hoverRating: null
    }

    this.setFalse = this.setFalse.bind(this)
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

  setFalse(val) {
    this.setState({
      [val]: false
    })
  }

  renderForm(ref) {
    this.setState({
      [ref]: true
    })
    scrollToComponent(this.refs[ref], {
      align: 'top',
      duration: 1000
    })
  }

  render() {
    const { hoverRating, rating } = this.state
    // to wait on gear array & user info load:
    if (this.props.user.isFetching) {
      return (
        <p>Fetching!!!!!!!!!!!</p>
      )
    }

    // once loaded:
    else {
      return (
        <div className='container'>
          {/* {!this.props.auth.isAuthenticated && <Redirect to='/login'/>} */}
          {this.props.user.message && <span className="has-text-danger is-large">{this.props.user.message}</span>}

          <div className='section profile'>

            <div className='columns'>
              <div className='column is-12 tab'>
                <p className='is-small is-pulled-right tab'>Profile</p>
                <p className='is-small is-pulled-right tab'>My Messages</p>
              </div>
            </div>

            <div className='columns is-multiline'>

              <div className='column is-6'>
                <img className='tempimgcss' src={this.props.user.profilePic} />
              </div>

              <div className='column is-6'>
                <div className='columns is-multiline'>
                  <div className='column is-12'>
                    <h1 className='title is-1'>@{this.props.user.username}</h1>
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
                    <br />

                    {!this.state.editingProfile && !this.state.addingItem
                      && <a className='button button-pad' onClick={() => this.renderForm('editingProfile')}>Edit Profile</a>}
                  </div>
                </div>
              </div>
            </div>

            <div className='profile-gear'>
              <div className='level'>
                <div className='level-left'>
                  <div className='level-item'>
                    <h1 className='title is-1'>MY TOOLS</h1>
                  </div>
                </div>
                <div className='level-right'>
                  <div className='level-item'>
                    {!this.state.addingItem && !this.state.editingProfile
                      && <button className='button is-black is-large button-pad' onClick={() => this.renderForm('addingItem')}>Add Tool</button>}
                  </div>
                </div>
              </div>
              <hr />

              <GearList />
            </div>

            <div ref='addingItem'>
              {this.state.addingItem
                && <NewGearForm finish={() => this.setFalse('addingItem')} />}
            </div>


            <div ref='editingProfile'>
              {this.state.editingProfile
                && <EditProfileForm onFinish={() => this.setFalse('editingProfile')} />}
            </div>

          </div>
        </div >
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
