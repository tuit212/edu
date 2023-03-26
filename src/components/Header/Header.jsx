import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../Assets/img/logo.svg'

const Header = () => {
  return (
    <div className='site-header'>
        <div className="container">
            <div className="header">
                <div className="header__logo">
                    <Link to={'/'} >
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header