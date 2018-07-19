import React from 'react'
import {connect} from 'react-redux'

const Profile = (props) => {
    return (
        <div>
            <h2>{props.user.firstName}</h2>
            <h2>{props.user.lastName}</h2>
            <p>{props.user.email}</p>
            <ul>
                {props.user.gear.map((item) => {
                    return <li>{item.name} - {item.description} - {item.status} - {item.trustframework}</li>
                })}
            </ul>
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