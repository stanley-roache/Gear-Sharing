import React from 'react'

import LostPet from './LostPet'

const Lost = (props) => {
  const mockProps = {
    lostPets:
      [
        {
          id: 1,
          name: 'doggoJo',
          species: 'dog',
          photo: 'https://tinyurl.com/ybmbgafu',
          user_id: 'no.'
        },
        {
          id: 2,
          name: 'doggo',
          species: 'dog',
          photo: 'https://tinyurl.com/ybmbgafu',
          user_id: 'no.'
        },
        {
          id: 3,
          name: 'doggo',
          species: 'dog',
          photo: 'https://tinyurl.com/ybmbgafu',
          user_id: 'no.'
        },
        {
          id: 4,
          name: 'doggo',
          species: 'dog',
          photo: 'https://tinyurl.com/ybmbgafu',
          user_id: 'no.'
        },
        {
          id: 5,
          name: 'doggo',
          species: 'dog',
          photo: 'https://tinyurl.com/ybmbgafu',
          user_id: 'no.'
        }
      ]
  }

  return (
    <div className='pets'>
      <div className='is-size-1'> Lost Pets </div>
      <div className="columns is-multiline">
        {mockProps.lostPets.map(pet => (
          <LostPet key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  )
}

module.exports = Lost