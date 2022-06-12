import React from 'react'

const Page = ({ title, children }) => {
  return (
    <div className='page'>
      <div className="title">
        { title }
      </div>
      <div className="flex">
        {children}
      </div>
    </div>
  )
}

export default Page