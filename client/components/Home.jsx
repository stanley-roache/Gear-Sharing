import React from 'react'
import { connect } from 'react-redux'

export class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }
    render() {
        return (
            <div className='homebody'>
                <div className="container">

                    <div className="section">
                        <h1 className='title is-1 has-text-centered'>Tool Pool is a community for peer-to-peer lending of odd household items.</h1>
                    </div>

                    <div className="section">
                        <div className='columns'>
                            <div className='column'>
                                <h1 className='title is-3'>About:</h1>
                                <p>The Tool Pool is a firendly gear sharing app where you can borrow bits a bobs from your communities. You can browse items that you need to borrow for those awkard one off odds and ends. </p>
                            </div>
                            <div className='column'>
                                <h1 className='title is-3'>Ethics:</h1>
                                <p>Our team here at The Tool Pool are committed to conducting business in an honest, responsible and ethical manner and in compliance with all applicable laws and regulations. We work with our suppliers and our customers to ensure an ethical and sustainable supply chain. </p>
                            </div>
                            <div className='column'>
                                <h1 className='title is-3'>Sustainability</h1>
                                <p>Tool Pool is commited to build on its achievements in the efficient management of energy, water and key material resources, and the minimisation of waste and emissions, and commits to continue to find new and innovative ways to demonstrate leadership in research, teaching, learning, operations, partnerships, capacity building and networking to advance sustainability.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({ gear: state.gear.gear, err: state.gear.errorMessage })

export default connect(mapStateToProps)(Home)





// popssible background image as only image
    // mission statement in h3, under Tool Pool in h1
    // 3 colums with about, ethics and sustability