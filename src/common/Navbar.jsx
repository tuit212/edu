import React from 'react' 
import { NavLink , Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='header__list'>
        <NavLink to={'courses'} className='item'>
            Kurslar
        </NavLink>
        <NavLink to={'onlineTest'} className='item'>
            Online test
        </NavLink>
        <NavLink to={'blog'} className='item'>
            Blog
        </NavLink>
        <NavLink to={'help'} className='item'>
            Yordam
        </NavLink>
        <Link to={'login'} className='login'>
            <i class="fa-solid fa-right-to-bracket"></i>
            <span>Kirish</span>
        </Link>
    </div>
  )
}

export default Navbar