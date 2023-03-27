import React from 'react' 
import { Link } from 'react-router-dom'

const Cours = ({img , title , text , accound}) => {
  return (
    <div className='item'>
        <div className="item__top">
            <img src={img} alt="" />
        </div>
        <div className="item__body">
            <div className="top">
                <img src={accound} alt="" />
                <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
            <p>
                Algebra va geometriyaning
                boshlang’ich asoslari
            </p>
            <span></span>
            <div className="bottom">
                <h5>$45</h5>
                <Link to={'Batafsil'} className='link'>
                    Batafsil
                    <i class="fa-solid fa-angle-right"></i>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Cours