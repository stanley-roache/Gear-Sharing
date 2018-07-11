import React from 'react'

const LostPet = props => (
  <div className="column is-one-third has-text-bold">
    {props.pet.species}
  </div>
)

export default LostPet