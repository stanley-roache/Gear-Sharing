import React from 'react'

export const FoundPet = props => (
  <div className="column is-one-third has-text-bold">
    <div className="box has-text-left">
      <figure className="image is-4by3">
        <img src={props.pet.photo} />
      </figure>
      <div className='pet-species'>Species: {props.pet.species}</div>
      <div className='pet-finder'>Is this your pet?</div>
    </div>
  </div>
)

export default FoundPet