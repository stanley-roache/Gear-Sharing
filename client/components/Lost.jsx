import React from 'react'

import {connect} from 'react-redux'

import { fetchLostPets } from '../actions/lostPets'

import LostPet from './LostPet'

export class Lost extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(fetchLostPets())
  }

  render() {
    return (
      <div className='pets'>
        <div className='is-size-1'> Lost Pets </div>
        <div className="columns is-multiline">
          {this.props.lostPets.map(pet => (
            <LostPet key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({lostPets}) => ({
  lostPets
})

export default connect(mapStateToProps)(Lost)