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
      <nav className="navbar">
        <div className="container">
          <div id="navbarMenuHeroA" className='navbar-menu'>
            <div className="navbar-end">
              {this.props.auth.isAuthenticated
                ? [
                  <Link key='logoutbutton' to="/" onClick={this.props.logout} className="navbar-item is-large">Logout</Link>,
                ]
                : [
                  <Link key='loginbutton' className="navbar-item is-large" to='/login'>Login</Link>,
                  <Link key='registerbutton' className="navbar-item" to='/register'>Register</Link>,
                ]
              }
            </div>
          </div>
        </div>
      </nav>
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
