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
      <div className='section' id='navbar'>
        <div className='columns is-centered has-text-centered'>
          <div className='column is-3'>
            <p>ALL TOOLS</p>
          </div>
          <div className='column is-6'>
            <h1 className='title is-3'>ToolPool</h1>
          </div>
          <div className='column is-3'>
            <p>LOGIN/REGISTER</p>
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
