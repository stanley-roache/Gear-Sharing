import React from 'react'

import {connect} from 'react-redux'

import { fetchFoundPets } from '../actions/foundPets'

import FoundPet from './FoundPet'

export class Found extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(fetchFoundPets())
  }

  render() {
    return (
      <div className='pets'>
        <div className='is-size-1'> Found Pets </div>
        <div className="columns is-multiline">
          {this.props.foundPets.map(pet => (
            <FoundPet key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({foundPets}) => ({
  foundPets
})

export default connect(mapStateToProps)(Found)