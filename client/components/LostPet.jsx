import React from 'react'

const LostPet = props => (
  <div className="column is-one-third has-text-bold">
    <div className="box has-text-left">
      <img src={props.pet.photo} />
      <div className='pet-name'>Name: {props.pet.name}</div>
      <div className='pet-species'>Species: {props.pet.species}</div>
      <div className='pet-owner'>Notify Owner</div>
    </div>
  </div>
)

export default LostPet