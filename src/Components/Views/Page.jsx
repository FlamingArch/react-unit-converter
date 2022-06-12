import React from 'react'

const Page = ({ title, children }) => {
  return (
    <div className='page'>
      <div className="title">
        Lorem ipsum
      </div>
      <div className="flex">
        {children}
      </div>
    </div>
  )
}

export default Page