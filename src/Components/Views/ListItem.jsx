import React from 'react'

const ListItem = ({ children, input }) => {
  return (
    <div className={`listitem ${input ? `input` : ``}`}>
      {children}
    </div>
  )
}

export default ListItem