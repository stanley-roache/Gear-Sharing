import React from 'react'
import { connect } from 'react-redux'

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
                <div className='section'>
                    <div className='container'>
                        <div className='columns is-multiline has-text-centered'>
                            <div className='column is-12'>
                                <h1 className='title is-1'>{name}</h1>
                            </div>

                            <div className='column is-12'>
                                <p>@placeholderino</p>
                            </div>
                        </div>
                        <div className='columns box gear-card'>
                            <div className='column is-6'>
                                <h3 className='title is-3'>Description:</h3>
                                <p>{description}</p>
                                <br />
                                <h5 className='title is-5' id='is-gear-item-subcategory1'>Availability:</h5>
                                <p>{status}</p>
                                <br />
                                <h5 className='title is-5' id='is-gear-item-subcategory2'>Borrowing conditions:</h5>
                                <p>{trustframework}</p>
                                <br />

                            </div>
                            <div className='column is-6'>
                                <img src={photo_url} />
                            </div>
                        </div>

                        <div className='columns is-multiline is-centered'>
                            <div className='column is-12'>
                                {!this.props.auth.isAuthenticated
                                    && <p className='has-text-centered'>Only registered users can request to borrow gear</p>}
                                    
                                    {this.props.auth.isAuthenticated && activeUserId === gearOwnerId && !this.state.editingItem
                                        && <p className='has-text-centered'>This is your tool</p>}
                                </div>
                                <div className='column is-6'>

                                    {!this.props.auth.isAuthenticated
                                        && <button className='submit button is-centered is-black is-large' onClick={this.toLogin}>Login/Register</button>}

                                    {this.props.auth.isAuthenticated && activeUserId === gearOwnerId && !this.state.editingItem
                                        && <button className='submit button is-centered is-black is-large' onClick={() => this.renderForm()}>Edit this tool</button>}
                                </div>
                            </div>

                            <div ref='editForm'>
                                {this.state.editingItem
                                    && <GearEdit item={thisGear} finish={() => this.cancelEdit()} />}
                            </div>

                            {this.props.auth.isAuthenticated && activeUserId !== gearOwnerId
                                && <GearRequest onFinish={() => { }} gear_id={gearId} owner_id={gearOwnerId} requester_id={activeUserId} />}

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