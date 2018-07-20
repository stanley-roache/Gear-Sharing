import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Profile from './Profile'

//************ just for testing - to be moved to gear container jsx file
import { getGear } from "../actions/gear";
//



class App extends React.Component {
  constructor(props) {
    super(props)
  }

  //************ just for testing - to be moved to gear container jsx file
  componentDidMount() {
    console.log('dispatching getGear')
    this.props.dispatch(getGear())
  }
  //

  render() {
    return (
      <Router>
        <div className="container has-text-centered">
          <div className="hero is-small is-success">
            <div className="hero-body has-text-centered">
              <Link to='/'><h1 className="title is-1">Home</h1></Link>
              <Nav />
            </div>
          </div>


          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {this.props.auth.isAuthenticated && <Route exact path='/profile' component={Profile}/>}
       </div>
      </Router>
    )
  }
} 

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)