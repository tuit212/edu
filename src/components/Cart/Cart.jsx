import React from 'react'
import './Cart.scss'
import Carts from '../../common/Carts'
import img from '../../Assets/img/hero/img.svg'
import img1 from '../../Assets/img/hero/img1.svg'
import img2 from '../../Assets/img/hero/img2.svg'

const Cart = () => {
  return (
    <div className='section-cart'>
        <div className="container">
            <div className="carts">
                <Carts
                    img={img}
                    title='2200 +'
                    text='Vedeo kurslar'
                />
                <Carts
                    img={img1}
                    title='100 +'
                    text='O’qituvchilar'
                />
                <Carts
                    img={img2}
                    title='5450 +'
                    text='Sinov testlar'
                />
            </div>
        </div>
    </div>
  )
}

export default Cart