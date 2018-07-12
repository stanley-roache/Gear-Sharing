import React from 'react'

import {connect} from 'react-redux'

import LostPet from './LostPet'

const Lost = (props) => {
  return (
    <div className='pets'>
      <div className='is-size-1'> Lost Pets </div>
      <div className="columns is-multiline">
        {props.lostPets.map(pet => (
          <LostPet key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = ({lostPets}) => ({
  lostPets
})

module.exports = connect(mapStateToProps)(Lost)