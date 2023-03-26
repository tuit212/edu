import React from 'react'
import Cart from '../../components/Cart/Cart'
import Courses from '../../components/Courses/Courses'
import Hero from '../../components/Hero/Hero'

const Home = () => {
  return (
    <div className='section-main'>
      <Hero/>
      <Cart/>
      <Courses/>
    </div>
  )
}

export default Home