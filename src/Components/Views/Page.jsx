import React from 'react'

const Page = ({ title, children }) => {
  return (
    <div className='page'>
      <div className="text-xl font-black">{title}</div>
    </div>
  )
}

export default Page