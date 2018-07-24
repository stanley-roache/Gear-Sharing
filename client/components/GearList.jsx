import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export const GearList = props => (
  <div>
    <div className='columns is-multiline'>

      {props.user.gear.map((item) => {
        return (
          <div key={item.id} className='column is-4'>
            <Link to={`/item/${item.id}`}>
              <img src={item.photo_url} />
            </Link>
            <br/>
            <Link to={`/item/${item.id}`}>
              <h4 className='title is-4'><a>{item.name}</a></h4>
            </Link>
            <p>{item.status}</p>
            <a className={`button button-pad has-text-centered ${item.status == 'Available' 
              ? 'is-danger'
              : 'is-info'}`}>
                {item.status == 'Available' 
                  ? 'MAKE UNAVAILABLE'
                  : 'MAKE AVAILABLE'}
            </a>
          </div>
        )
      })}
    </div>
  </div>
)

// Avialability button needs onCLick

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(GearList)