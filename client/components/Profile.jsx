import React from 'react'
import {connect} from 'react-redux'

const Profile = (props) => {
    return (
        <div>
            <h2>{props.user.firstName}</h2>
            <h2>{props.user.lastName}</h2>
            <p>{props.user.email}</p>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        auth: state.auth,
        user: state.user
    }
)

export default connect(mapStateToProps)(Profile)