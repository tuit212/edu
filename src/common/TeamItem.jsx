import React from 'react'

const TeamItem = ({img , text , title}) => {
  return (
    <div className='item'>
        <div className="team__top">
            <img src={img} alt="" />
        </div>
        <div className="context">
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default TeamItem