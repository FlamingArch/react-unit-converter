import React from 'react'

const Picker = ({ items, selected }) => {
  return (
    <div>{items[selected]}</div>
  )
}

export default Picker