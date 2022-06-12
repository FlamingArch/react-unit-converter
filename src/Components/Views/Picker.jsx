import React from 'react'
import ExpandIcon from '../../Icons/expand.svg'

const Picker = ({ items, selected }) => {
  return (
    <div className='picker'>
      {items[selected]}
      <img src={ExpandIcon} alt="" />
    </div>
  )
}

export default Picker