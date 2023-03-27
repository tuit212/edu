import React from 'react'
import Btn from '../../common/Btn/Btn'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="container">
            <div className="hero">
                <div className="hero__context">
                    <h1>Masofaviy  ta'lim</h1>
                    <p>
                        Masofaviy o'quv kurslar orqali siz, eng so`ngi darsliklarni oson, qulay va mukammal o'rganishingiz mumkin.
                    </p>
                    <Btn
                        text='Hoziroq boshlash'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero