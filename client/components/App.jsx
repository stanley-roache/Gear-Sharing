import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'

const App = ({ auth }) => (
  <Router>
    <div className="container has-text-centered">
      <div className="hero is-small is-success">
        <div className="hero-body has-text-centered">
          <Link to='/'><h1 className="title is-1">Home</h1></Link>
          <Nav />
        </div>
      </div>

      <div className=''>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    </div>
  </Router>
)

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
