import React from 'react'

import LostPet from './LostPet'

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

  return (
    <div className='pets'>
      <div className='is-size-1'> Lost Pets </div>
      <div className="columns is-multiline">
        {mockProps.lostPets.map(pet => <LostPet pet={pet} />)}
      </div>
    </div>
  )
}

module.exports = Lost