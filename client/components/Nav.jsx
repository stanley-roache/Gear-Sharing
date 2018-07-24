import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {
    return (
      <div className='section'>
        <div className='columns is-centered has-text-centered'>
          <div className='column is-3'>
            <p><Link to="/toolpool">ALL TOOLS</Link></p>
          </div>
          <div className='column is-6'>
            <h1 className='title is-3'><Link to="/">TOOLPOOL</Link></h1>
          </div>
          <div className='column is-3'>
            {this.props.auth.isAuthenticated
              ? [
                <div>
                <Link to="/profile">PROFILE</Link>
                <Link className="navBarItem" to="/" onClick={this.props.logout}>LOGOUT</Link>
                </div>
                ]
                : [
                  <Link to='/login'>LOGIN</Link>
                ]
              }
          </div>
          </div>
          <hr/>
        </div>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => dispatch(logoutUser())
    }
  }

  const mapStateToProps = ({ auth }) => {
    return {
      auth
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Nav)
