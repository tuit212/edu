import React from 'react'
import './Btn.scss'

const Btn = ({text}) => {
  return (
    <div className='button'>
      {text}
    </div>
  )
}

export default Btn