import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAvailability } from '../actions/gear'


export const ItemInGrid = props => {
  const { name, status, id, photo_url } = props.item

  return (
    <div key={id} className='column is-3 gear-item'>
      <Link to={`/item/${id}`}>
        <img src={photo_url}/>
      </Link>
      <Link to={`/item/${id}`}>
        <h4 className='title is-4'>
          <a>{name}</a>
        </h4>
      </Link>
      <p>{status}</p>
      {props.showToggle && 
        <a className={`button button-pad has-text-centered ${status !== 'Available'
          ? 'is-inverted'
          : 'is-dark'}`}
          onClick={() => props.dispatch(setAvailability(id, status != 'Available'))}
        >
          {status !== 'Available'
            ? 'MARK AS AVAILABLE'
            : 'MARK AS UNAVAILABLE'}
        </a>}
    </div>
  )
}

export default connect()(ItemInGrid)