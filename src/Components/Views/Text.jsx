import React from 'react'

const Text = ({ children, type }) => {
  return (
    <div className={'text ' + type}>{children}</div>
  )
}

export default Text