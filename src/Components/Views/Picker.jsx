import React, { useState } from 'react'
import ExpandIcon from '../../Icons/expand.svg'

const Picker = ({ items, selected, type }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='picker' onClick={() => setVisible(true)}>
      {items[selected]}
      <img src={ExpandIcon} alt="" />
      {visible ? <div className={`dropdown`}>
        {items.map((e, idx) => {
          return <p key={idx} onClick={() => {
            setVisible(false)
          }}>{e}</p>
        })}
      </div> : null}
    </div>
  )
}

export default Picker