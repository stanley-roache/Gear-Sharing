import React from 'react'
import {connect} from 'react-redux'

import GearList from './GearList'

const Profile = (props) => {
    return (
        <div>
            <h2>{props.user.firstName}</h2>
            <h2>{props.user.lastName}</h2>
            <p>{props.user.email}</p>
            <GearList />
            <button>Add Gear Item</button>
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