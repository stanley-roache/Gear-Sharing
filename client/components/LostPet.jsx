import React from 'react'

export const LostPet = props => (
  <div className="column is-one-third has-text-bold">
    <div className="box has-text-left">
      <figure className="image is-4by3">
        <img src={props.pet.photo} />
      </figure>
      <div className='pet-name'>Name: {props.pet.name}</div>
      <div className='pet-species'>Species: {props.pet.species}</div>
      <div className='pet-owner'>Notify Owner</div>
    </div>
  </div>
)

export default LostPet