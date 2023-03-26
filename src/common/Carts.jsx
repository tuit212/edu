import React from 'react'

const Carts = ({img , title , text}) => {
  return (
    <div className='carts__page'>
        <div className="icons">
            <img src={img} alt="img" />
        </div>
        <div className="context">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Carts