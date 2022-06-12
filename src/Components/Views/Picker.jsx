import React, { useState, useEffect } from 'react'
import ExpandIcon from '../../Icons/expand.svg'

const Picker = ({ items, selected, type, onChange }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return () => setVisible(false)
  }, [onChange])


  return (
    <div className={'picker ' + type} onClick={() => setVisible(true)}>
      {items[selected]}
      <img src={ExpandIcon} alt="" />
      <div className={`dropdown ${visible ? '' : 'hide'}`}>
        {items.map((e, idx) => {
          return <p key={idx} onClick={() => {
            onChange(items[idx])
          }}>{e}</p>
        })}
      </div>
    </div>
  )
}

export default Picker