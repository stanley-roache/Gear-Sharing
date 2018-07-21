import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import GearEdit from './GearEdit'
import GearRequest from './GearRequest'

export class GearItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, description, status, photo_url, trustframework, user_id } = this.props.gear.find(
            (i) => i.id == this.props.match.params.id)

        return (
            <div className='gear-display'>
                <img className='tempimgcss' src={photo_url} />
                <h1>{name}</h1>
                <p>{status} - {trustframework}</p>
                <p>{description}</p>

                {!this.props.auth.isAuthenticated
                    && <Link to='/login'><button>Login to request this tool</button></Link>}
                {this.props.auth.isAuthenticated && this.props.user.id === user_id
                    ? <GearEdit />
                    : <GearRequest />}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        auth: state.auth,
        user: state.user,
        gear: state.gear.gear
    }
)
export default connect(mapStateToProps)(GearItem)