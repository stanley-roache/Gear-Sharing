import React from 'react'
import { connect } from 'react-redux'

import { nameSort } from '../utils/sorting'

import ItemInGrid from './ItemInGrid'

export const GearList = props => (
  <div className='columns is-multiline'>
    {props.user.gear
      .sort(nameSort)
      .map(item => {
        return <ItemInGrid key={item.id} item={item} showToggle={true} />
      })}
  </div>
)

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(GearList)