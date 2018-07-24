import React from 'react'
import { connect } from 'react-redux'
import scrollToComponent from 'react-scroll-to-component'

import GearEdit from './GearEdit'
import GearRequest from './GearRequest'

export class GearItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editingItem: false,
            requestingItem: false
        }
    }

    toLogin() {
        document.location = "/#/login"
    }

    renderForm() {
        this.setState({
            editingItem: true
        })
        scrollToComponent(this.refs.editForm, {
            align: 'top',
            duration: 1000
        })
    }

    cancelEdit() {
        this.setState({
            editingItem: false
        })
    }


    render() {
        const gearId = Number(this.props.match.params.id)

        // to wait on gear array & user info load:
        if (this.props.gear.isFetching || this.props.user.isFetching) {
            return (
                <p>Fetching!!!!!!!!!!!</p>
            )
        }

        // once loaded:
        else {
            const thisGear = this.props.gear.gear.find((i) => i.id === gearId)
            const {
                name,
                description,
                status,
                photo_url,
                trustframework,
                user_id
            } = thisGear
            const activeUserId = this.props.user.id
            const gearOwnerId = user_id

            return (
                <div>
                    <div className='hero'>
                        <div className='hero-body'>
                            <div className='container has-text-centered'>
                                <h1 className='title is-1'>{name}</h1>
                            </div>
                        </div>
                    </div>
                <div className='columns box'>
                    <div className='column is-7'>
                        <p className='subtitle is-5'>{description}</p>
                        <h3 className='subtitle is-4'>Avaliability: {status}</h3>
                        <h3 className='subtitle is-4'>Trust Level: {trustframework}</h3>

                        {!this.props.auth.isAuthenticated
                            && <button onClick={this.toLogin}>Login to request this tool</button>}

                        {this.props.auth.isAuthenticated && activeUserId === gearOwnerId && !this.state.editingItem
                            && <button className='button' onClick={() => this.renderForm()}>Edit this tool</button>}

                        <div ref='editForm'>
                            {this.state.editingItem
                                && <GearEdit item={thisGear} finish={() => this.cancelEdit()} />}
                        </div>

                        {this.props.auth.isAuthenticated && activeUserId !== gearOwnerId
                            && <GearRequest onFinish={() => { }} gear_id={gearId} owner_id={gearOwnerId} requester_id={activeUserId} />}
                    </div>
                    <div className='column is-5'>
                        <img className='imgset' src={photo_url} />
                    </div>
                </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => (
    {
        auth: state.auth,
        user: state.user,
        gear: state.gear
    }
)
export default connect(mapStateToProps)(GearItem)