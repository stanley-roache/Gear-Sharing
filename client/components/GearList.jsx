import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ItemInGrid from './ItemInGrid'

export const GearList = props => (
  <div className='columns is-multiline'>
    {props.user.gear.map(item => {
      return <ItemInGrid item={item} />
    })}
  </div>
)

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(GearList)