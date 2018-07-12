import React from 'react'

import {connect} from 'react-redux'

import FoundPet from './FoundPet'

export const Found = props => {
  return (
    <div className='pets'>
      <div className='is-size-1'> Found Pets </div>
      <div className="columns is-multiline">
        {props.foundPets.map(pet => (
          <FoundPet key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = ({foundPets}) => ({
  foundPets
})

export default connect(mapStateToProps)(Found)