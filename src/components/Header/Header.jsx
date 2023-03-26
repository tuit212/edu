import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../Assets/img/logo.svg'
import Navbar from '../../common/Navbar'
import Nav from '../../common/Nav'

const Header = () => {
  return (
    <div className='site-header'>
        <div className="container">
            <div className="header">
                <div className="header__logo">
                    <Link to={'/'} className='logo' >
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <Navbar/>
                <Nav/>
            </div>
        </div>
    </div>
  )
}

export default Header