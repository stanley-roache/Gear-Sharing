import React from 'react'

import {connect} from 'react-redux'

<<<<<<< HEAD
import { fetchLostPets } from '../actions/lostPets'

const Lost = (props) => {
  const mockProps = {
    lostPets:
      [
        {
          id: 1,
          photo: 'https://tinyurl.com/ybmbgafu',
          species: 'dog',
          contact_details: 'no.'
        },
        {
          id: 2,
          photo: 'url',
          species: 'dog',
          contact_details: 'no.'
        },
        {
          id: 3,
          photo: 'url',
          species: 'dog',
          contact_details: 'no.'
        },
        {
          id: 4,
          photo: 'url',
          species: 'dog',
          contact_details: 'no.'
        },
        {
          id: 5,
          photo: 'url',
          species: 'dog',
          contact_details: 'no.'
        },
      ]
  }
=======
import LostPet from './LostPet'
>>>>>>> c6f3e3c2fe15fe0eeff35bf52d5922a520715910

export const Lost = (props) => {
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

export default connect(mapStateToProps)(Lost)