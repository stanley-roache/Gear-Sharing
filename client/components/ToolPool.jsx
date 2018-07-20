import React from 'react'
import {connect} from 'react-redux'

import ItemInline from './ItemInline'

export const ToolPool = props => (
  <div className='toolpool-wrapper'>
    <h1>TOOL POOL</h1>
    {props.gear.map(item => {
      return <ItemInline item={item}/>
    })}
  </div>
)

const mapStateToProps = (state) => ({gear: state.gear.gear})

export default connect(mapStateToProps)(ToolPool)