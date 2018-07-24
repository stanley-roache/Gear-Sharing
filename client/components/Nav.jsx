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
            <p><a href="#/toolpool">ALL TOOLS</a></p>
          </div>
          <div className='column is-6'>
            <h1 className='title is-3'><a href="#/">ToolPool</a></h1>
          </div>
          <div className='column is-3'>
            <p><a href="#/login">LOGIN/REGISTER</a></p>
          </div>
        </div>
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
